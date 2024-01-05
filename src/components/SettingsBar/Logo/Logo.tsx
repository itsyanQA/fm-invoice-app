import { ReactComponent as InvoiceAppLogo } from "../../../assets/svg/logo.svg";
import "./Logo.scss";

export function Logo() {
  return (
    <div className="logo-container">
      <InvoiceAppLogo className="logo-container__logo" />
    </div>
  );
}
