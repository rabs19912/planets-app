import Select from "react-select";
import { SelectOption } from "../../types/common";
import { SelectContainer } from "./styled";

type FilterSelectProps = {
  onFilter: (event: SelectOption) => void;
  filterOptions: SelectOption[]
};

function FilterSelect({ onFilter, filterOptions }: FilterSelectProps) {
 
  return (
    <SelectContainer>
      <Select
        options={filterOptions}
        isClearable
        isSearchable
        onChange={onFilter}
        placeholder={"Filter by Climate"}
      />
    </SelectContainer>
  );
}

export { FilterSelect };
