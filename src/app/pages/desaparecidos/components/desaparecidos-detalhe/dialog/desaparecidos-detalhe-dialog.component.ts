import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
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
import * as moment from 'moment';
import { NgxMaskDirective } from 'ngx-mask';
import { AlertService } from '../../../../../core/alert.service';

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
    NgxMaskDirective,
  ],
  standalone: true,
  templateUrl: './desaparecidos-detalhe-dialog.component.html',
  styleUrl: './desaparecidos-detalhe-dialog.component.scss',
})
export class DesaparecidosDetalheDialogComponent {
  form!: FormGroup;

  savedImages: string[] = []; // Array para armazenar imagens localmente
  selectedFiles: File[] = []; // Array para armazenar os arquivos selecionados

  constructor(
    private _fb: FormBuilder,
    private _facade: DesaparecidosFacade,
    private _alert: AlertService,
    public dialogRef: MatDialogRef<DesaparecidosDetalheDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number; descricao: string } //
  ) {
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
    }
  }

  removeImage(index: number) {
    this.savedImages.splice(index, 1); // Remove a imagem do array pelo índice
  }

  onSend(): void {
    debugger;
    let formData: FormData = new FormData();
    const dataConvertida = this.convertDate(this.form.value.data);
    if (this.form.value.informacao.length == 0) {
      this._alert.showError('Campo Informação obrigatório!');
    } else {
      formData.append('ocoId', this.form.value.ocoId);
      formData.append('descricao', this.form.value.descricao);
      formData.append('informacao', this.form.value.informacao);
      formData.append('data', dataConvertida);
      debugger;
      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append('files', this.selectedFiles[i]);
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
    debugger;
    const day = input.substring(0, 2);
    const month = input.substring(2, 4);
    const year = input.substring(4, 8);
    return `${year}-${month}-${day}`; // Formato yyyy-dd-mm
  }
}
