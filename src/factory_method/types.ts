export interface Transmitter {
  sendMessage(msg: string): Promise<boolean>
}
