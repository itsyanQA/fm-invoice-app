import { configureStore } from "@reduxjs/toolkit";
import invoicesReducer from "./slices/invoicesSlice";
import { getFromLocalStorage, setToLocalStorage } from "../services/localStorage";
import { Invoice } from "../types/types";

export const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
  },
  preloadedState: {
    invoices: getFromLocalStorage("invoices") as unknown as Invoice[],
  },
});

store.subscribe(() => {
  setToLocalStorage("invoices", store.getState().invoices);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
