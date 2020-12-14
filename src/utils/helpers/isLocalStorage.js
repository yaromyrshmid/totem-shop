const isLocalStorage = () => {
  try {
    const key = "random_key_you_are_not_going_to_use"
    localStorage.setItem(key, key)
    localStorage.removeItem(key)
    return true
  } catch (e) {
    return false
  }
}

export default isLocalStorage
