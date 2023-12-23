import "./InvoiceRow.scss";
import { Invoice } from "../../types/types";
import { ReactComponent as ArrowRight } from "../../assets/svgs/icon-arrow-right.svg";
import { StatusButton } from "../StatusButton/StatusButton";
import { useIsMobile } from "../../hooks/useIsMobile";

type InvoiceRowProps = {
  invoice: Invoice;
};

export function InvoiceRow({ invoice }: InvoiceRowProps) {
  const isMobile = useIsMobile();

  const renderRow = (): JSX.Element => {
    if (isMobile) {
      return (
        <div className="invoice">
          <div className="invoice__mobile-id-and-client-container">
            <span className="invoice__id">{invoice.id}</span>
            <span className="invoice__client-name">{invoice.clientName}</span>
          </div>

          <div className="invoice__mobile-bottom-container">
            <div className="invoice__mobile-due-date-and-price-container">
              <div className="invoice__due-date-container">
                <span className="invoice__due-text">Due</span>
                <span className="invoice__payment-date-text">{invoice.paymentDue}</span>
              </div>
              <span className="invoice__total">{`£ ${invoice.total.toFixed(2)}`}</span>
            </div>

            <StatusButton status={invoice.status} />
          </div>
        </div>
      );
    }

    return (
      <div className="invoice">
        <div className="invoice__id-date-name-container">
          <span className="invoice__id">{invoice.id}</span>
          <div className="invoice__due-date-container">
            <span className="invoice__due-text">Due</span>
            <span className="invoice__payment-date-text">{invoice.paymentDue}</span>
          </div>
          <span className="invoice__client-name">{invoice.clientName}</span>
        </div>
        <div className="invoice__price-status-arrow-container">
          <span className="invoice__total">{`£ ${invoice.total.toFixed(2)}`}</span>
          <div className="invoice__status-and-arrow-container">
            <StatusButton status={invoice.status} />
            <ArrowRight className="invoice__right-arrow" />
          </div>
        </div>
      </div>
    );
  };

  return renderRow();
}
