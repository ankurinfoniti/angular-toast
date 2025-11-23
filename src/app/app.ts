import { Component, inject, signal } from '@angular/core';
import { ToastService } from './shared/toast/toast.service';

import { ToastContainerComponent } from './shared/toast/toast-container.component';

@Component({
  selector: 'app-root',
  imports: [ToastContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Angular Toast Example');

  private readonly toastService = inject(ToastService);

  showSuccess() {
    this.toastService.show('Operation completed successfully!', 'success');
  }

  showError() {
    this.toastService.show('An error occurred during the process.', 'error');
  }

  showInfo() {
    this.toastService.show('Here is some useful information.', 'info');
  }

  showWarning() {
    this.toastService.show('Warning: This action cannot be undone.', 'warning');
  }
}
