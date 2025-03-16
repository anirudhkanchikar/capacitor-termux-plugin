import { registerPlugin } from '@capacitor/core';
import type { TermuxPlugin } from './definitions';

const Termux = registerPlugin<TermuxPlugin>('Termux', {
  web: () => import('./web').then(m => new m.TermuxPluginWeb()),
});

export * from './definitions';
export { Termux };