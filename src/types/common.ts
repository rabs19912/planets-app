import { SingleValue } from "react-select";

export enum ORDER_ORIENTATION_TYPES {
  asc = "ascendent",
  desc = "descendent",
}

export type PaginatedPlanetsResult = {
  count?: number;
  next?: string;
  previous?: string | null;
  results?: Planet[];
};

export type Planet = {
  climate: string;
  created: Date;
  diameter: string;
  edited: Date;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
};

export type SelectOption = SingleValue<{
  value: SORT_OPTIONS;
  label: string;
  data: { order: ORDER_ORIENTATION_TYPES };
}>;

export enum SORT_OPTIONS {
  ascAlphabet = "asc_alphabet",
  descAlphabet = "desc_alphabet",
  ascDiameter = "asc_diameter",
  descDiameter = "desc_diameter",
}
