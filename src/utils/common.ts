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

export { orderAlphabetical };
