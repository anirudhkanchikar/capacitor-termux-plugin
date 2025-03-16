import { WebPlugin } from '@capacitor/core';
import type { TermuxPlugin } from './definitions';

export class TermuxPluginWeb extends WebPlugin implements TermuxPlugin {
  name: string;
  platforms: string[];
  constructor() {
    super(); // No arguments
    this.name = 'Termux';
    this.platforms = ['web'];
  }

  async executeCommand(_options: { command: string }): Promise<void> {
    throw new Error('Termux command execution is not supported on the web platform.');
  }
}