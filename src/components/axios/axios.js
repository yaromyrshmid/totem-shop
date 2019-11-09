import axios from "axios"

const instance = axios.create({
  baseURL: "https://sena-totem.firebaseio.com/",
})

export default instance
