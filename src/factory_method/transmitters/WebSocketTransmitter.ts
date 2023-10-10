import { BaseTransmitter } from './BaseTransmitter'

export class WebSocketTransmitter extends BaseTransmitter {

  private readonly timeCostForEstablishConnection = 40
  private readonly timeCostPerSymbol = 2

  constructor(
    public readonly host: string,
    public readonly port: number
  ) {
    super('WebSocket')
  }

  private calcTotalDelay(data: string): number {
    const timeCostForData = data.length * this.timeCostPerSymbol
    return timeCostForData + this.timeCostForEstablishConnection
  }

  protected sendData(data: string): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      setTimeout(() => {
        resolve(true)
      }, this.calcTotalDelay(data))
    })
  }
  
}