import { HTTP2Transport } from './transport/HTTP2Transport'
import { HTTPTransport } from './transport/HTTPTransport'
import { WebSocketTransport } from './transport/WebSocketTransport'
import type { Transmitter } from './types'

export class FactoryMethodApp {
  
  public run(msg: string): void {
    const transport: Transmitter[] = [
      new HTTPTransport(),
      new HTTP2Transport(),
      new WebSocketTransport(),
    ]

    const requests: Promise<boolean>[] = []

    transport.forEach(transmitter => {
      requests.push(transmitter.sendMessage(msg))
    })

    Promise.all(requests)
      .then(() => console.log(`"${msg}" was transferred successfully`))
      .catch(err => console.error(err))
  }

}

