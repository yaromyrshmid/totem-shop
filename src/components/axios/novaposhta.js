import axios from "axios"

const instance = axios.create({
  baseURL: "https://api.novaposhta.ua/v2.0/json",
})

export default instance
