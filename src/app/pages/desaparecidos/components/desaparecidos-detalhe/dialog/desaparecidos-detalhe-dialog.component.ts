import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
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
    MatDialogModule,
    NgxMaskDirective,
  ],
  standalone: true,
  templateUrl: './desaparecidos-detalhe-dialog.component.html',
  styleUrl: './desaparecidos-detalhe-dialog.component.scss',
})
export class DesaparecidosDetalheDialogComponent {
  private _fb = inject(FormBuilder);
  private _facade = inject(DesaparecidosFacade);
  private _alert = inject(AlertService);
  dialogRef =
    inject<MatDialogRef<DesaparecidosDetalheDialogComponent>>(MatDialogRef);
  data = inject<{ id: number; descricao: string }>(MAT_DIALOG_DATA);

  form!: FormGroup;

  /**
   * Arquivo e pré-visualização ficam no mesmo item para que remover uma
   * imagem também remova o arquivo que seria enviado.
   */
  imagens: ImagemSelecionada[] = [];

  constructor() {
    this.criarForm();
  }

  criarForm(): void {
    this.form = this._fb.group({
      informacao: ['', [Validators.required]],
      data: ['', [Validators.required]],
      ocoId: [this.data.id],
      files: [],
      descricao: [this.data.descricao],
    });
  }
  // Função chamada quando o usuário seleciona as imagens
  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      Array.from(input.files).forEach((file) => {
        // O item entra na lista na ordem da seleção; a pré-visualização é
        // preenchida quando a leitura (assíncrona) do arquivo terminar.
        const imagem: ImagemSelecionada = { arquivo: file, preview: '' };
        this.imagens.push(imagem);

        const reader = new FileReader();
        reader.onload = () => {
          imagem.preview = reader.result as string;
        };
        reader.readAsDataURL(file);
      });
    }
  }

  removeImage(index: number): void {
    this.imagens.splice(index, 1);
  }

  onSend(): void {
    const formData = new FormData();
    const dataConvertida = this.convertDate(this.form.value.data);
    if (this.form.value.informacao.length == 0) {
      this._alert.showError('Campo Informação obrigatório!');
    } else {
      formData.append('ocoId', this.form.value.ocoId);
      formData.append('descricao', this.form.value.descricao);
      formData.append('informacao', this.form.value.informacao);
      formData.append('data', dataConvertida);
      for (const { arquivo } of this.imagens) {
        formData.append('files', arquivo);
      }
      this.dialogRef.close();
      this.form.reset();
      this._facade.postOcorrencia(formData);
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
  //conversão de data.
  convertDate(input: string): string {
    const day = input.substring(0, 2);
    const month = input.substring(2, 4);
    const year = input.substring(4, 8);
    return `${year}-${month}-${day}`; // Formato yyyy-dd-mm
  }
}
