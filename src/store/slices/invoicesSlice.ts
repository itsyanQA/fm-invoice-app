import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Invoice } from "../../types/types";
import invoices from "../../data/invoices.json";

const initialState: Invoice[] = invoices as Invoice[];

const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    markAsPaid: (state, action: PayloadAction<string | undefined>) => {
      return state.forEach((invoice) => {
        if (invoice.id === action.payload && invoice.status === "pending") {
          invoice.status = "paid";
        }
        return invoice;
      });
    },
    deleteInvoice: (state, action: PayloadAction<string | undefined>) => {
      return state.filter((invoice) => {
        return invoice.id !== action.payload;
      });
    },
  },
});

export const { markAsPaid, deleteInvoice } = invoicesSlice.actions;

export default invoicesSlice.reducer;
