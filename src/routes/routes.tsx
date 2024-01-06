import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { InvoicePage } from "../pages/InvoicePage/InvoicePage";
import * as PATH from "../constants/path-constants";

export const routes = (
  <Routes>
    <Route path={PATH.HOME_PAGE} Component={HomePage} />
    <Route path={PATH.INVOICE_PAGE} Component={InvoicePage} />
  </Routes>
);
