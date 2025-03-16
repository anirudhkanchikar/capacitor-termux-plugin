import { WebPlugin } from '@capacitor/core';

import type { TermuxPluginPlugin } from './definitions';

export class TermuxPluginWeb extends WebPlugin implements TermuxPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
