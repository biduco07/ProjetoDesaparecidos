import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { provideNgxMask } from 'ngx-mask';
import { DesaparecidosComponent } from '../pages/desaparecidos/containers/desaparecidos.component';
import { DesaparecidosDetalheComponent } from '../pages/desaparecidos/components/desaparecidos-detalhe/desaparecidos-detalhe.component';
import { provideNativeDateAdapter } from '@angular/material/core';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    // Angular Material
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [
    provideNgxMask(),
    provideNativeDateAdapter(),
    DesaparecidosComponent,
    DesaparecidosDetalheComponent,
  ],
})
export class SharedModule {}
