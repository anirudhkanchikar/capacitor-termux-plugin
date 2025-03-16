export interface TermuxPlugin {
  executeCommand(options: { command: string }): Promise<void>;
}