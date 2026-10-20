import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
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
import { DatePipe } from '@angular/common';
import { filter } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { PaginadorIntl } from '../../../shared/paginacao/paginador-intl';
import { IConsulta } from '../models/consulta.model';
@Component({
  selector: 'app-desaparecidos',
  templateUrl: './desaparecidos.component.html',
  styleUrl: './desaparecidos.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    DatePipe,
    MatProgressSpinnerModule,
    MatPaginatorModule,
  ],
  // Fica no componente (e não no app.config) para o paginador continuar
  // fora do bundle inicial.
  providers: [{ provide: MatPaginatorIntl, useClass: PaginadorIntl }],
})
export class DesaparecidosComponent {
  private _facade = inject(DesaparecidosFacade);
  private _fb = inject(FormBuilder);

  form!: FormGroup;
  formularioConsulta!: IConsulta;

  // toSignal() se inscreve agora e encerra a inscrição quando o componente
  // é destruído; cada nova emissão marca a view para checagem (OnPush).
  readonly localizadosDesaparecidos = toSignal(
    this._facade.localizadosDesaparecidos$
  );
  /** Última página válida; um valor sem `content` não apaga a lista atual. */
  readonly listaPessoas = toSignal(
    this._facade.listaPessoas$.pipe(filter((value) => !!value?.content))
  );
  readonly paginacao = toSignal(this._facade.controlePaginacao$, {
    requireSync: true,
  });
  readonly erroConsulta = toSignal(this._facade.erroConsulta$, {
    initialValue: null,
  });

  /** Texto anunciado pela região aria-live quando uma consulta termina. */
  readonly resumoResultados = computed(() => {
    const total = this.listaPessoas()?.totalElements;
    if (total == null) {
      return '';
    }
    if (total === 0) {
      return 'Nenhuma pessoa encontrada.';
    }
    return total === 1
      ? '1 pessoa encontrada.'
      : `${total} pessoas encontradas.`;
  });

  constructor() {
    this.criarForm();
    this._facade.loadInitialData();

    // O formulário é recriado com os filtros salvos no state (por exemplo,
    // ao voltar da tela de detalhe). takeUntilDestroyed() encerra a inscrição
    // junto com o componente.
    this._facade.formularioConsulta$
      .pipe(takeUntilDestroyed())
      .subscribe((value: IConsulta) => {
        if (value) {
          this.formularioConsulta = value;
          this.criarForm();
        }
      });
  }

  criarForm(): void {
    this.form = this._fb.group({
      nome: [this.formularioConsulta?.nome || ''],
      faixaIdadeInicial: [this.formularioConsulta?.faixaIdadeInicial || ''],
      faixaIdadeFinal: [this.formularioConsulta?.faixaIdadeFinal || ''],
      sexo: [this.formularioConsulta?.sexo || ''],
      status: [this.formularioConsulta?.status || ''],
    });
  }

  consultarDesaparecidos(): void {
    this._facade.adicionarFormularioState(this.form.value);
    this._facade.resetPagination();
    this._facade.consultarDesaparecidos();
  }

  abrirDetalhes(id: number): void {
    this._facade.getIdDetalhes(id);
  }

  handlePagination(event: PageEvent): void {
    this._facade.handlePagination(event);
  }

  tentarNovamente(): void {
    this._facade.tentarNovamente();
  }
  resetForm() {
    this.form.reset();
    this.consultarDesaparecidos();
  }
}
