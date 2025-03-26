import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DesaparecidosFacade } from '../desaparecidos.facade';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IEstatisticas } from '../models/estatisticas.model';
import { ResultadoPaginado } from '../../../shared/paginacao/resultado-paginado';
import { IPessoas } from '../models/pessoas.model';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-desaparecidos',
  templateUrl: './desaparecidos.component.html',
  styleUrl: './desaparecidos.component.scss',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    MatProgressSpinnerModule,
  ],
})
export class DesaparecidosComponent {
  form!: FormGroup;

  LocalizadosDesaparecidos!: IEstatisticas;
  listaPessoas!: ResultadoPaginado<IPessoas>;

  private _unsubscribeFlag$: Subject<any> = new Subject<any>();

  constructor(
    private _facade: DesaparecidosFacade,
    private _fb: FormBuilder,
    private router: Router
  ) {
    this.criarForm();
    this._facade.loadInitialData(this.form.value);

    this._facade.localizadosDesaparecidos$
      .pipe(takeUntil(this._unsubscribeFlag$))
      .subscribe((value: IEstatisticas) => {
        this.LocalizadosDesaparecidos = value;
      });

    this._facade.listaPessoas$
      .pipe(takeUntil(this._unsubscribeFlag$))
      .subscribe((value: ResultadoPaginado<IPessoas>) => {
        if (value?.content) {
          this.listaPessoas = value;
        }
      });
  }

  criarForm(): void {
    this.form = this._fb.group({
      nome: [''],
      faixaIdadeInicial: [0],
      faixaIdadeFinal: [0],
      sexo: [''],
      status: [''],
    });
  }

  consultarDesaparecidos(): void {
    this._facade.consultarDesaparecidos(this.form.value);
  }

  abrirDetalhes(id: number): void {
    this._facade.abrirDetalhes(id);
    this.router.navigate(['/detalhes']);
  }
}
