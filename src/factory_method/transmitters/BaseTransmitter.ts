import type { Transmitter } from '../types'

export abstract class BaseTransmitter implements Transmitter {

  protected constructor(
    private readonly name: string,
  ) {}

  private get fullName(): string {
    return `${this.name} connector`
  }

  protected abstract sendData(data: string): Promise<boolean>

  public async sendMessage(msg: string): Promise<boolean> {
    console.time(this.fullName)
    const status = await this.sendData(msg).catch(() => false)
    console.timeLog(this.fullName, `for transfering data: "${msg}"`)
    return status
  }
  
}