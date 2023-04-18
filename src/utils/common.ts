import { ORDER_ORIENTATION_TYPES } from "../types/common";


const compareString = (firstValue: string, secondValue: string) =>
  firstValue.localeCompare(secondValue);

const sortByString = (
  a: string,
  b: string,
  orientation: ORDER_ORIENTATION_TYPES
) => {
  const sortByOrientation = {
    [ORDER_ORIENTATION_TYPES.asc]: compareString(a, b),
    [ORDER_ORIENTATION_TYPES.desc]: compareString(b, a),
  };

  return sortByOrientation[orientation];
};

function orderAlphabetical<T>(
  array: T[],
  property: keyof T,
  orientation: ORDER_ORIENTATION_TYPES
) {
  return array?.sort((a, b) => {
    const valueA = a[property] as string;
    const valueB = b[property] as string;
    return sortByString(valueA, valueB, orientation);
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
