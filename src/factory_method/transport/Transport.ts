import type { Transmitter } from '../types'

export abstract class Transport {

  private transmitter: Transmitter

  constructor() {
    this.transmitter = this.createTransmitter()
  }

  public sendMessage(msg: string): Promise<boolean> {
    return this.transmitter.sendMessage(msg)
  }

  protected abstract createTransmitter(): Transmitter
}