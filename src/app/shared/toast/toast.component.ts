import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toast } from './toast.types';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast" [ngClass]="toast.type">
      <div class="message">{{ toast.message }}</div>
      <button class="close-btn" (click)="close.emit()">×</button>
    </div>
  `,
  styles: [
    `
      .toast {
        padding: 12px 16px;
        margin-bottom: 10px;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        min-width: 250px;
        color: white;
        font-family: sans-serif;
      }

      .message {
        margin-right: 12px;
      }

      .close-btn {
        background: none;
        border: none;
        color: inherit;
        font-size: 20px;
        cursor: pointer;
        line-height: 1;
        padding: 0;
        opacity: 0.7;
      }

      .close-btn:hover {
        opacity: 1;
      }

      .success {
        background-color: #4caf50;
      }
      .error {
        background-color: #f44336;
      }
      .info {
        background-color: #2196f3;
      }
      .warning {
        background-color: #ff9800;
      }
    `,
  ],
})
export class ToastComponent {
  @Input({ required: true }) toast!: Toast;
  @Output() close = new EventEmitter<void>();
}
