import type { Transmitter } from '../types'
import { WebSocketTransmitter } from '../transmitters/WebSocketTransmitter'
import { Transport } from './Transport'

export class WebSocketTransport extends Transport {

  createTransmitter(): Transmitter {
    return new WebSocketTransmitter('ws://localhost', 8082)
  }
  
}