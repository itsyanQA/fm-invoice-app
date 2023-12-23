import "./InvoicesEmpty.scss";
import { ReactComponent as EmptyIllustration } from "../../assets/svgs/illustration-empty.svg";

export function InvoicesEmpty() {
  return (
    <div className="invoices-empty">
      <EmptyIllustration className="invoices-empty__illustration" />
      <div className="invoices-empty__text-container">
        <p className="invoices-empty__title">There is nothing here</p>
        <p className="invoices-empty__description">
          Create an invoice by clicking the <span className="invoices-empty__new-invoice-text">New invoice</span> button and get started
        </p>
      </div>
    </div>
  );
}
