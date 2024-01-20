import { Status } from "../types/types";
import { RootState } from "./store";

export function selectInvoices() {
  return (store: RootState) => store.invoices;
}

export function selectInvoiceById(invoiceId: string) {
  return (store: RootState) => store.invoices.find((invoice) => invoice.id === invoiceId);
}

export function selectInvoiceByStatus(status: Status) {
  return (store: RootState) => store.invoices.filter((invoice) => invoice.status === status);
}
