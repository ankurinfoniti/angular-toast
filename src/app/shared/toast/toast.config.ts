import { InjectionToken, Provider } from '@angular/core';

export type ToastPosition =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center';

export interface ToastConfig {
  position: ToastPosition;
}

export const TOAST_CONFIG = new InjectionToken<ToastConfig>('TOAST_CONFIG');

export const defaultToastConfig: ToastConfig = {
  position: 'top-right',
};

export function provideToastConfig(config: Partial<ToastConfig>): Provider {
  return {
    provide: TOAST_CONFIG,
    useValue: { ...defaultToastConfig, ...config },
  };
}
