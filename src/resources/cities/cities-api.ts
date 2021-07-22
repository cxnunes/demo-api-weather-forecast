import {topCities} from './top-cities.mock'
import {City} from './type'

const toCity = (data: {Key: string; EnglishName: string}): City => ({
  key: data.Key,
  name: data.EnglishName,
})

const getCityByKey = (key: string) => {
  const data = topCities.find((c) => c.Key === key)
  if (!data) return null
  return toCity(data)
}
const getCityByName = (name: string) => {
  const data = topCities.find((c) => c.EnglishName === name)
  if (!data) return null
  return toCity(data)
}

export const CitiesAPI = {
  getCityByKey,
  getCityByName,
}
