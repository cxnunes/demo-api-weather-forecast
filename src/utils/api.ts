import * as axios from 'axios'

const get = async (url: string) => {
  try {
    const res = await axios.default.get(url)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const API = {
  get,
}
