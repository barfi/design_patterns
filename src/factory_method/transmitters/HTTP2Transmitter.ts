import { BaseTransmitter } from './BaseTransmitter'

export class HTTP2Transmitter extends BaseTransmitter {

  private readonly timeCostPerSymbol = 10

  constructor(
    public readonly host: string,
    public readonly port: number
  ) {
    super('HTTP2')
  }

  protected sendData(data: string): Promise<boolean> {
    const letters = data.split('')
    const requests = letters.map(() => {
      return new Promise<boolean>(resolve => {
        setTimeout(() => {
          resolve(true)
        }, this.timeCostPerSymbol)
      })
    })
    return Promise.all(requests).then(() => true)
  }
  
}