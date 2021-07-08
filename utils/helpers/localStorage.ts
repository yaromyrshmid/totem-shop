export const LOCAL_STORAGE_KEYS = {
  cart: 'cart'
};

export const readLocalStorage = (key: string): any => {
  try {
    const result = localStorage.getItem(key);

    if (!result) return null;

    return JSON.parse(result);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);

    return null;
  }
};

export const writeLocalStorage = (key: string, value: any): void => {
  try {
    const valueString = JSON.stringify(value);

    localStorage.setItem(key, valueString);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
