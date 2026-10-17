import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private snackBar = inject(MatSnackBar);

  // Método para exibir mensagem de sucesso
  showSuccess(message: string): void {
    this.snackBar.open(message, 'Fechar', {
      duration: 3000,
      panelClass: ['success-snackbar'],
    });
  }

  // Método para exibir mensagem de erro
  showError(message: string): void {
    this.snackBar.open(message, 'Fechar', {
      duration: 3000,
      panelClass: ['error-snackbar'],
    });
  }
}
