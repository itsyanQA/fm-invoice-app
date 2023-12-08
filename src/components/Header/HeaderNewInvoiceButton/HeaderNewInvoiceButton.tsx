import "./HeaderNewInvoiceButton.scss";
import { ReactComponent as PlusIcon } from "../../../assets/svgs/icon-plus.svg";
import { useIsMobile } from "../../../hooks/useIsMobile";

export function HeaderNewInvoiceButton() {
  const isMobile = useIsMobile();

  return (
    <button className="new-invoice-button">
      <div className="new-invoice-button__plus-container">
        <PlusIcon />
      </div>
      <span className="new-invoice-button__text">{isMobile ? "New" : "New Invoice"}</span>
    </button>
  );
}
