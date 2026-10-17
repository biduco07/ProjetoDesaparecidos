import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  signal,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DesaparecidosFacade } from '../../../desaparecidos.facade';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMaskDirective } from 'ngx-mask';
import { AlertService } from '../../../../../core/alert.service';

/** Tamanho máximo de cada imagem, informado ao usuário no formulário. */
export const TAMANHO_MAXIMO_IMAGEM = 3 * 1024 * 1024;
const TIPOS_DE_IMAGEM_ACEITOS = ['image/png', 'image/jpeg'];

/**
 * Valida a data digitada com a máscara 00/00/0000. O ngx-mask entrega só os
 * dígitos (ddmmaaaa); a data precisa existir no calendário e não pode estar
 * no futuro.
 */
export function dataValidaValidator(
  control: AbstractControl<string>
): ValidationErrors | null {
  const valor = control.value;
  if (!valor) {
    return null; // o Validators.required cuida do campo vazio
  }
  if (!/^\d{8}$/.test(valor)) {
    return { dataInvalida: true };
  }
  const dia = Number(valor.substring(0, 2));
  const mes = Number(valor.substring(2, 4));
  const ano = Number(valor.substring(4, 8));
  const data = new Date(ano, mes - 1, dia);
  const existe =
    ano >= 1900 &&
    data.getFullYear() === ano &&
    data.getMonth() === mes - 1 &&
    data.getDate() === dia;
  if (!existe) {
    return { dataInvalida: true };
  }
  return data.getTime() > Date.now() ? { dataFutura: true } : null;
}

/** Arquivo escolhido pelo usuário e a pré-visualização exibida no diálogo. */
export interface ImagemSelecionada {
  arquivo: File;
  /** Data URL gerada pelo FileReader; fica vazia até a leitura terminar. */
  preview: string;
}

@Component({
  selector: 'app-desaparecidos-detalhe-dialog',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    NgxMaskDirective,
  ],
  standalone: true,
  templateUrl: './desaparecidos-detalhe-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './desaparecidos-detalhe-dialog.component.scss',
})
export class DesaparecidosDetalheDialogComponent {
  private _fb = inject(FormBuilder);
  private _facade = inject(DesaparecidosFacade);
  private _alert = inject(AlertService);
  private _elemento = inject<ElementRef<HTMLElement>>(ElementRef);
  dialogRef =
    inject<MatDialogRef<DesaparecidosDetalheDialogComponent>>(MatDialogRef);
  data = inject<{ id: number; descricao: string }>(MAT_DIALOG_DATA);

  form!: FormGroup;

  /**
   * Arquivo e pré-visualização ficam no mesmo item para que remover uma
   * imagem também remova o arquivo que seria enviado. Como é um signal, a
   * view (OnPush) é atualizada quando a leitura assíncrona termina.
   */
  readonly imagens = signal<ImagemSelecionada[]>([]);

  constructor() {
    this.criarForm();
  }

  criarForm(): void {
    this.form = this._fb.group({
      informacao: ['', [Validators.required, Validators.pattern(/\S/)]],
      data: ['', [Validators.required, dataValidaValidator]],
      ocoId: [this.data.id],
      files: [],
      descricao: [this.data.descricao],
    });
  }
  // Função chamada quando o usuário seleciona as imagens
  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const recusados: string[] = [];
      Array.from(input.files).forEach((file) => {
        if (
          !TIPOS_DE_IMAGEM_ACEITOS.includes(file.type) ||
          file.size > TAMANHO_MAXIMO_IMAGEM
        ) {
          recusados.push(file.name);
          return;
        }
        // O item entra na lista na ordem da seleção; a pré-visualização é
        // preenchida quando a leitura (assíncrona) do arquivo terminar.
        const imagem: ImagemSelecionada = { arquivo: file, preview: '' };
        this.imagens.update((lista) => [...lista, imagem]);

        const reader = new FileReader();
        reader.onload = () => {
          const preview = reader.result as string;
          this.imagens.update((lista) =>
            lista.map((item) => (item === imagem ? { ...item, preview } : item))
          );
        };
        reader.readAsDataURL(file);
      });
      if (recusados.length) {
        this._alert.showError(
          `Arquivo não aceito (use PNG ou JPG de até 3 MB): ${recusados.join(', ')}`
        );
      }
      // Permite escolher de novo o mesmo arquivo depois de removê-lo.
      input.value = '';
    }
  }

  removeImage(index: number): void {
    this.imagens.update((lista) => lista.filter((_, i) => i !== index));
  }

  onSend(): void {
    if (this.form.invalid) {
      // Mostra as mensagens de erro e leva o foco ao primeiro campo inválido,
      // onde o leitor de tela lê o rótulo e a mensagem (aria-describedby).
      this.form.markAllAsTouched();
      this._elemento.nativeElement
        .querySelector<HTMLElement>('input.ng-invalid, textarea.ng-invalid')
        ?.focus();
      return;
    }
    const formData = new FormData();
    const dataConvertida = this.convertDate(this.form.value.data);
    formData.append('ocoId', this.form.value.ocoId);
    formData.append('descricao', this.form.value.descricao);
    formData.append('informacao', this.form.value.informacao.trim());
    formData.append('data', dataConvertida);
    for (const { arquivo } of this.imagens()) {
      formData.append('files', arquivo);
    }
    this.dialogRef.close();
    this.form.reset();
    this._facade.postOcorrencia(formData);
  }

  onClose(): void {
    this.dialogRef.close();
  }
  /** Converte os dígitos ddmmaaaa da máscara para aaaa-mm-dd (formato da API). */
  convertDate(input: string): string {
    const day = input.substring(0, 2);
    const month = input.substring(2, 4);
    const year = input.substring(4, 8);
    return `${year}-${month}-${day}`; // Formato aaaa-mm-dd
  }
}
