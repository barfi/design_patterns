import type { Transmitter } from '../types'
import { HTTP2Transmitter } from '../transmitters/HTTP2Transmitter'
import { Transport } from './Transport'

export class HTTP2Transport extends Transport {

  createTransmitter(): Transmitter {
    return new HTTP2Transmitter('http://localhost', 8081)
  }
  
}