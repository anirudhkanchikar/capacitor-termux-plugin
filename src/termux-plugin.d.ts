import { TermuxPlugin } from '../../termux-plugin';

declare module '@capacitor/core' {
  interface PluginRegistry {
    Termux: TermuxPlugin;
  }
}