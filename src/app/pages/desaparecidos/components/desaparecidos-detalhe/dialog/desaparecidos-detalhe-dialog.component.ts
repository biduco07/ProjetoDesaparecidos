import { CommonModule } from '@angular/common';
import { Component, Inject, inject, signal } from '@angular/core';
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
import {
  MatDatepickerIntl,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as moment from 'moment';
@Component({
  selector: 'desaparecidos-detalhe-dialog',
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
  ],
  standalone: true,
  providers: [provideNativeDateAdapter()],
  templateUrl: './desaparecidos-detalhe-dialog.component.html',
  styleUrl: './desaparecidos-detalhe-dialog.component.scss',
})
export class DesaparecidosDetalheDialogComponent {
  form!: FormGroup;
  dateNow: string;

  savedImages: string[] = []; // Array para armazenar imagens localmente
  selectedFiles: File[] = []; // Array para armazenar os arquivos selecionados

  private readonly _adapter =
    inject<DateAdapter<unknown, unknown>>(DateAdapter);
  private readonly _intl = inject(MatDatepickerIntl);
  private readonly _locale = signal(inject<unknown>(MAT_DATE_LOCALE));

  constructor(
    private _fb: FormBuilder,
    private _facade: DesaparecidosFacade,
    public dialogRef: MatDialogRef<DesaparecidosDetalheDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number; descricao: string } //
  ) {
    const today = new Date();
    this.dateNow = today.toISOString().split('T')[0];

    this.criarForm();

    this._locale.set('fr');
    this._adapter.setLocale(this._locale());
  }

  criarForm(): void {
    this.form = this._fb.group({
      informacao: ['', [Validators.required]],
      data: [this.dateNow, [Validators.required]],
      ocoId: [this.data.id],
      files: [],
      descricao: [this.data.descricao],
    });
  }
  // Função chamada quando o usuário seleciona as imagens
  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      // Iterar sobre os arquivos selecionados
      Array.from(input.files).forEach((file) => {
        // Gerar uma pré-visualização da imagem
        const reader = new FileReader();
        reader.onload = () => {
          // Armazenar a imagem na variável local
          this.savedImages.push(reader.result as string);
        };
        reader.readAsDataURL(file);

        // Salvar o arquivo na lista de arquivos selecionados
        this.selectedFiles.push(file);
      });

      console.log('Imagens selecionadas:', this.selectedFiles);
    }
  }

  removeImage(index: number) {
    this.savedImages.splice(index, 1); // Remove a imagem do array pelo índice
  }

  onSend(): void {
    let formData: FormData = new FormData();
    let tempDate: moment.Moment = moment.utc(this.form.value.data).local();
    if (this.form.value.informacao.length == 0) {
      /*
      Swal.fire(
        'Há campos em branco!',
        'Campo Informação obrigatório!',
        'warning'
      );*/
    } else {
      formData.append('ocoId', this.form.value.ocoId);
      formData.append('descricao', this.form.value.descricao);
      formData.append('informacao', this.form.value.informacao);
      if (this.form.value.data.length == 0) {
        formData.append('data', this.form.value.data);
      } else {
        formData.append('data', tempDate.format('YYYY-MM-DD'));
      }
      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append('files', this.selectedFiles[i]);
      }
      console.log(this.form.value.data);
      this.dialogRef.close();
      this.form.reset();
      this._facade.postOcorrencia(formData);
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
