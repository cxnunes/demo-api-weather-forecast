import * as axios from 'axios'

export const get = async (url: string) => {
  try {
    const res = await axios.default.get(url)
    return res.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
