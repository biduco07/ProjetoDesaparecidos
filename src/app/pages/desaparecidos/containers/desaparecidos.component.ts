import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DesaparecidosFacade } from '../desaparecidos.facade';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IEstatisticas } from '../models/estatisticas.model';

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
  ],
})
export class DesaparecidosComponent {
  LocalizadosDesaparecidos!: IEstatisticas;
  private _unsubscribeFlag$: Subject<any> = new Subject<any>();

  constructor(private _facade: DesaparecidosFacade, private fb: FormBuilder) {
    this._facade.loadInitialData();

    this._facade.localizadosDesaparecidos$
      .pipe(takeUntil(this._unsubscribeFlag$))
      .subscribe((value: IEstatisticas) => {
        debugger;
        this.LocalizadosDesaparecidos = value;
      });
  }
}
