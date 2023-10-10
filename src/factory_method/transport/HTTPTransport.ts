import type { Transmitter } from '../types'
import { HTTPTransmitter } from '../transmitters/HTTPTransmitter'
import { Transport } from './Transport'

export class HTTPTransport extends Transport {

  createTransmitter(): Transmitter {
    return new HTTPTransmitter('http://localhost', 8080)
  }
  
}