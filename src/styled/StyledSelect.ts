import { styled, Select } from "@mui/material";

export const StyledSelect = styled(Select)(({ theme }) => ({
  color: "var(--heading-1-clr)",
  "& fieldset": {
    border: "unset",
  },
  "& .MuiSelect-select": {
    padding: "7px 30px 10px 0px!important",
    fontSize: "15px",
    fontWeight: "700",
    letterSpacing: "-0.25px",
  },
  "&.filter-select--is-selected": {
    textTransform: "capitalize",
  },
  "& > svg": {
    top: "15px !important",
  },
}));
