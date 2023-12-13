import { styled, Select } from "@mui/material";

export const StyledSelect = styled(Select)(({ theme }) => ({
  color: "var(--heading-1-clr)",
  "& fieldset": {
    border: "unset",
  },
}));
