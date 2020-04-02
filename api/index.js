import axios from 'axios'
import { thema } from './../commons/themaOne'

export const getServices = async (slug) => {
  try {
    const themaOne = thema[slug];
    return themaOne
  } catch (e) {
    console.error(e)
  }
}
