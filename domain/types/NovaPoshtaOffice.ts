type WorkSchedule = {
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;
};

export type NovaPoshtaOffice = {
  CategoryOfWarehouse: string;
  CityDescription: string;
  CityRef: string;
  Description: string;
  Schedule: WorkSchedule;
  SettlementAreaDescription: string;
  SettlementDescription: string;
  SettlementRef: string;
  SettlementRegionsDescription: string;
  SettlementTypeDescription: string;
  SettlementTypeDescriptionRu: string;
  ShortAddress: string;
};
