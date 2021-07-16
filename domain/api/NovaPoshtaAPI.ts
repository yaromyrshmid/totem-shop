import axios from 'axios';
import { NovaPoshtaCity, NovaPoshtaOffice } from 'domain/types';

const NOVA_POSHTA_URL = 'https://api.novaposhta.ua/v2.0/json/';

export abstract class NovaPoshtaAPI {
  static async getCities(): Promise<NovaPoshtaCity[]> {
    try {
      const result = await axios.post(NOVA_POSHTA_URL, {
        modelName: 'Address',
        calledMethod: 'getCities',
        apiKey: process.env.NEXT_PUBLIC_NOVA_POSHTA_API_KEY
      });

      return result.data.data || [];
    } catch (error) {
      return [];
    }
  }

  static async getOfficesByCityRef(cityRef: string): Promise<NovaPoshtaOffice[]> {
    try {
      const result = await axios.post(NOVA_POSHTA_URL, {
        modelName: 'AddressGeneral',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityRef: cityRef
        },
        apiKey: process.env.NEXT_PUBLIC_NOVA_POSHTA_API_KEY
      });

      return result.data.data || [];
    } catch (error) {
      return [];
    }
  }
}
