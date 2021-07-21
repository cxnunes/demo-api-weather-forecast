import {topCities} from '@modules/data/top-cities'

export const getCityNameByKey = (key: string) => topCities.find((c) => c.Key === key)?.EnglishName
