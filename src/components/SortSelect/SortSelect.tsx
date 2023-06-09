import Select from "react-select";
import {
  ORDER_ORIENTATION_TYPES,
  SORT_OPTIONS,
  SelectOption,
} from "../../types/common";
import { SelectContainer } from "./styled";

const sortOptions = [
  {
    value: SORT_OPTIONS.ascAlphabet,
    label: "A-Z",
    data: { order: ORDER_ORIENTATION_TYPES.asc },
  },
  {
    value: SORT_OPTIONS.descAlphabet,
    label: "Z-A",
    data: { order: ORDER_ORIENTATION_TYPES.desc },
  },
  {
    value: SORT_OPTIONS.ascDiameter,
    label: "Diameter Ascending",
    data: { order: ORDER_ORIENTATION_TYPES.asc },
  },
  {
    value: SORT_OPTIONS.descDiameter,
    label: "Diameter Descending",
    data: { order: ORDER_ORIENTATION_TYPES.desc },
  },
];

type SortSelectPros = {
  orderByDiameter: (orientation: ORDER_ORIENTATION_TYPES) => void;
  orderByName: (orientation: ORDER_ORIENTATION_TYPES) => void;
  resetFilters: () => void;
  isDisabled: boolean;
  className?: string;
};

function SortSelect({
  orderByDiameter,
  orderByName,
  resetFilters,
  isDisabled,
  className,
}: SortSelectPros) {
  const onSort = (event: SelectOption) => {
    if (!event) {
      resetFilters();
      return;
    }
    switch (event.value) {
      case SORT_OPTIONS.ascDiameter:
      case SORT_OPTIONS.descDiameter:
        orderByDiameter(event.data?.order as ORDER_ORIENTATION_TYPES);
        break;
      case SORT_OPTIONS.ascAlphabet:
      case SORT_OPTIONS.descAlphabet:
      default:
        orderByName(event.data?.order as ORDER_ORIENTATION_TYPES);
        break;
    }
  };
  return (
    <SelectContainer>
      <Select
        options={sortOptions}
        isClearable
        isSearchable
        onChange={onSort}
        placeholder={"Sort by..."}
        isDisabled={isDisabled}
        className={className}
      />
    </SelectContainer>
  );
}

export { SortSelect };
