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

export const getData = async () => {
  try {
    const themaOne = thema;
    return themaOne
  } catch (e) {
    console.error(e)
  }
}
