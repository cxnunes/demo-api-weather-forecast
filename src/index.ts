import {Logger} from '@utils/logger'
import {init} from 'server'

const logger = new Logger({service: 'demo-api-weather-forecast'})

logger.info('Hello world!')

init()
