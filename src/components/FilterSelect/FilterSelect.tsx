import Select from "react-select";
import { SelectOption } from "../../types/common";
import { SelectContainer } from "./styled";

type FilterSelectProps = {
  onFilter: (event: SelectOption) => void;
  filterOptions: SelectOption[];
  isDisabled: boolean;
  className?: string;
};

function FilterSelect({
  onFilter,
  filterOptions,
  isDisabled,
  className,
}: FilterSelectProps) {
  return (
    <SelectContainer>
      <Select
        options={filterOptions}
        isClearable
        isSearchable
        onChange={onFilter}
        placeholder={"Filter by Climate"}
        isDisabled={isDisabled}
        className={className}
      />
    </SelectContainer>
  );
}

export { FilterSelect };
