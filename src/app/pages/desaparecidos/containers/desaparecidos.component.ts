import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideCircleAlert,
  lucideRefreshCw,
  lucideSearch,
  lucideX,
} from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmRadioGroupImports } from '@spartan-ng/helm/radio-group';
import { HlmSpinnerImports } from '@spartan-ng/helm/spinner';
import { filter } from 'rxjs';
import { DesaparecidosFacade } from '../desaparecidos.facade';
import { IConsulta } from '../models/consulta.model';
import { MudancaDePagina } from '../../../shared/paginacao/paginacao';
import { PaginadorComponent } from '../../../shared/paginacao/paginador/paginador.component';

/** Opção de um grupo de rádio dos filtros (o id compõe o id do <input>). */
interface OpcaoDeFiltro {
  valor: string;
  id: string;
  rotulo: string;
}

@Component({
  selector: 'app-desaparecidos',
  templateUrl: './desaparecidos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DatePipe,
    NgIcon,
    HlmAlertImports,
    HlmButtonImports,
    HlmCardImports,
    HlmFieldImports,
    HlmInputImports,
    HlmLabelImports,
    HlmRadioGroupImports,
    HlmSpinnerImports,
    PaginadorComponent,
  ],
  providers: [
    provideIcons({ lucideSearch, lucideX, lucideCircleAlert, lucideRefreshCw }),
  ],
})
export class DesaparecidosComponent {
  private _facade = inject(DesaparecidosFacade);
  private _fb = inject(FormBuilder);

  form!: FormGroup;
  formularioConsulta!: IConsulta;

  protected readonly opcoesDeSexo: OpcaoDeFiltro[] = [
    { valor: 'MASCULINO', id: 'masculino', rotulo: 'Masculino' },
    { valor: 'FEMININO', id: 'feminino', rotulo: 'Feminino' },
  ];
  protected readonly opcoesDeStatus: OpcaoDeFiltro[] = [
    { valor: 'DESAPARECIDO', id: 'desaparecido', rotulo: 'Desaparecido' },
    { valor: 'LOCALIZADO', id: 'localizado', rotulo: 'Localizado' },
  ];

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

  handlePagination(evento: MudancaDePagina): void {
    this._facade.handlePagination(evento);
  }

  tentarNovamente(): void {
    this._facade.tentarNovamente();
  }
  resetForm() {
    this.form.reset();
    this.consultarDesaparecidos();
  }
}
