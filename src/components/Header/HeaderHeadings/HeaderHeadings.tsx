import { useIsMobile } from "../../../hooks/useIsMobile";
import "./HeaderHeadings.scss";

type HeadingHeadingsProps = {
  invoicesCount: number;
};

export function HeaderHeadings({ invoicesCount }: HeadingHeadingsProps) {
  const isMobile = useIsMobile();

  const getInvoiceCountText = () => {
    if (isMobile) {
      return `${invoicesCount} invoices`;
    }

    return `There are ${invoicesCount} total invoices`;
  };

  return (
    <div className="header-title-container">
      <h1 className="header-title-container__title">Invoices</h1>
      {!!invoicesCount && (
        <span className="header-title-container__invoices-count">{invoicesCount ? getInvoiceCountText() : "No invoices"}</span>
      )}
    </div>
  );
}
