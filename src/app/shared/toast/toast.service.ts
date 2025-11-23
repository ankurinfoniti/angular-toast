import { Injectable, signal, WritableSignal } from '@angular/core';
import { Toast, ToastType } from './toast.types';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastsSignal: WritableSignal<Toast[]> = signal<Toast[]>([]);

  readonly toasts = this.toastsSignal.asReadonly();

  show(message: string, type: ToastType = 'info', duration: number = 3000): void {
    const id = Math.random().toString(36).substring(2, 9);
    const toast: Toast = { id, message, type, duration };

    this.toastsSignal.update((toasts) => [...toasts, toast]);

    if (duration > 0) {
      setTimeout(() => {
        this.remove(id);
      }, duration);
    }
  }

  remove(id: string): void {
    this.toastsSignal.update((toasts) => toasts.filter((t) => t.id !== id));
  }
}
