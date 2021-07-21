import {createLogger, Logger as WinstonLogger, format, transports} from 'winston'

interface Options {
  service: string
  handler?: string
  processId?: string
}

const formats = [format.timestamp(), format.simple()]

export class Logger {
  logger: WinstonLogger

  constructor({service, handler, processId}: Options) {
    this.logger = createLogger({
      defaultMeta: {
        service,
        handler,
        processId,
      },
      format: format.combine(...formats),
      transports: [new transports.Console()],
    })
  }

  info(message: string) {
    this.logger.info(message)
  }

  warn(message: string) {
    this.logger.warn(message)
  }

  error(message: string) {
    this.logger.error(message)
  }
}
