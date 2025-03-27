import { DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
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
import { Observable } from 'rxjs';

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
  ],
  standalone: true,
  providers: [provideNativeDateAdapter()],
  templateUrl: './desaparecidos-detalhe-dialog.component.html',
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
    private dialogRef: DialogRef,
    private _fb: FormBuilder,
    private _facade: DesaparecidosFacade
  ) {
    const today = new Date();
    this.dateNow = today.toISOString().split('T')[0];

    this.criarForm();

    this._locale.set('fr');
    this._adapter.setLocale(this._locale());
  }

  criarForm(): void {
    this.form = this._fb.group({
      nome: [''],
      data: [this.dateNow],
      Imagem: [],
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

  onSend(): void {}

  onClose(): void {
    this.dialogRef.close();
  }
}
