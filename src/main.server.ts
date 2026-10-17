import {
  bootstrapApplication,
  BootstrapContext,
} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

// `config` já inclui provideZoneChangeDetection() vindo de app.config.ts
// (mergeApplicationConfig), então o servidor usa o mesmo modo de detecção
// de mudanças do navegador.
const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(AppComponent, config, context);

export default bootstrap;
