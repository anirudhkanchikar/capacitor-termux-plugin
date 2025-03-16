import { registerPlugin } from '@capacitor/core';

import type { TermuxPluginPlugin } from './definitions';

const TermuxPlugin = registerPlugin<TermuxPluginPlugin>('TermuxPlugin', {
  web: () => import('./web').then((m) => new m.TermuxPluginWeb()),
});

export * from './definitions';
export { TermuxPlugin };
