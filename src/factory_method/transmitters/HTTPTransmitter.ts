import { BaseTransmitter } from './BaseTransmitter'

export class HTTPTransmitter extends BaseTransmitter {

  private readonly timeCostPerSymbol = 10

  constructor(
    public readonly host: string,
    public readonly port: number
  ) {
    super('HTTP')
  }

  private calcTotalDelay(data: string): number {
    return data.length * this.timeCostPerSymbol
  }

  protected sendData(data: string): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      setTimeout(() => {
        resolve(true)
      }, this.calcTotalDelay(data))
    })
  }
  
}