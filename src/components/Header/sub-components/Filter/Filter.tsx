import { Dispatch, SetStateAction } from "react";
import { StyledSelect } from "../../../../styled/StyledSelect";
import { ReactComponent as ArrowIcon } from "../../../../assets/svg/icon-arrow-up.svg";
import { Status } from "../../../../types/types";
import { MenuItem } from "@mui/material";
import "./Filter.scss";
import { useIsMobile } from "../../../../hooks/useIsMobile";

const filterItems: Status[] = ["draft", "paid", "pending"];

type FilterProps = {
  selectedStatusFilter: Status | "";
  setSelectedStatusFilter: Dispatch<SetStateAction<Status | "">>;
};

export function Filter({ selectedStatusFilter, setSelectedStatusFilter }: FilterProps) {
  const isMobile = useIsMobile();
  const filterPlaceholder = isMobile ? "Filter" : "Filter by status";
  const menuProps = {
    PaperProps: {
      sx: {
        backgroundColor: "var(--sub-bg-3-clr)",
        boxShadow: "var(--select-box-shadow-clr)",
        width: "192px",
        height: "128px",
        borderRadius: "8px",
        padding: "20px",
      },
    },
    MenuListProps: {
      sx: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "0",
      },
    },
  };

  const attemptStatusDeselect = (event: any) => {
    if (((event.target as HTMLLIElement).innerText as unknown as Status).toLowerCase() === selectedStatusFilter) {
      setSelectedStatusFilter("");
    }
  };

  const renderMenuItem = (value: Status) => (
    <MenuItem key={value} value={value} className="filter-select__item" disableRipple disableTouchRipple onClick={attemptStatusDeselect}>
      <div className="filter-select__item-container">
        <input className="filter-select__item-checkbox" type="checkbox" readOnly checked={value === selectedStatusFilter} />
        <span className="filter-select__item-text">{value}</span>
      </div>
    </MenuItem>
  );

  return (
    <StyledSelect
      displayEmpty
      className={`filter-select ${selectedStatusFilter && "filter-select--is-selected"}`}
      value={selectedStatusFilter}
      renderValue={() => selectedStatusFilter || filterPlaceholder}
      onChange={(event) => setSelectedStatusFilter(event.target.value as Status)}
      IconComponent={ArrowIcon}
      MenuProps={menuProps}
    >
      {filterItems.map(renderMenuItem)}
    </StyledSelect>
  );
}
