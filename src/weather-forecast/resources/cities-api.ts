import {topCities} from '../../data/top-cities'

export const getCityNameByKey = (key: string) => topCities.find((c) => c.Key === key)?.EnglishName
