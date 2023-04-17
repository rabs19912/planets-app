import { ORDER_ORIENTATION_TYPES } from "./types";

function orderAlphabetical<T>(
  array: T[],
  property: keyof T,
  orientation: ORDER_ORIENTATION_TYPES
) {
  return array?.sort((a, b) => {
    const valueA = a[property] as string;
    const valueB = b[property] as string;
    return orientation === ORDER_ORIENTATION_TYPES.asc
      ? valueA.localeCompare(valueB)
      : valueB.localeCompare(valueA);
  });
}

function orderByNumber<T>(
  array: T[],
  property: keyof T,
  orientation: ORDER_ORIENTATION_TYPES
) {
  return array.sort((a, b) => {
    const valueA = Number(a[property]);
    const valueB = Number(b[property]);
    return orientation === ORDER_ORIENTATION_TYPES.asc
      ? valueB - valueA
      : valueA - valueB;
  });
}

export { orderAlphabetical, orderByNumber };
