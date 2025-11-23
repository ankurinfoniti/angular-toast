import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast.service';
import { ToastComponent } from './toast.component';
import { TOAST_CONFIG, defaultToastConfig } from './toast.config';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule, ToastComponent],
  template: `
    <div class="toast-container" [ngClass]="config.position">
      @for (toast of toastService.toasts(); track toast.id) {
        <app-toast [toast]="toast" (close)="toastService.remove(toast.id)"></app-toast>
      }
    </div>
  `,
  styles: [
    `
      .toast-container {
        position: fixed;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 10px;
        pointer-events: none;
      }

      /* Position styles */
      .top-right {
        top: 20px;
        right: 20px;
      }
      .top-left {
        top: 20px;
        left: 20px;
      }
      .top-center {
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
      }

      .bottom-right {
        bottom: 20px;
        right: 20px;
        flex-direction: column-reverse;
      }
      .bottom-left {
        bottom: 20px;
        left: 20px;
        flex-direction: column-reverse;
      }
      .bottom-center {
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        flex-direction: column-reverse;
      }

      app-toast {
        pointer-events: auto;
      }
    `,
  ],
})
export class ToastContainerComponent {
  toastService = inject(ToastService);
  config = inject(TOAST_CONFIG, { optional: true }) || defaultToastConfig;
}
