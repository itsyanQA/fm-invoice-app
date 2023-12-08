import { useIsMobile } from "../../../hooks/useIsMobile";
import "./HeaderHeadings.scss";

type HeadingHeadingsProps = {
  invoicesCount: number;
};

export function HeaderHeadings({ invoicesCount }: HeadingHeadingsProps) {
  const isMobile = useIsMobile();

  return (
    <div className="header-title-container">
      <h1 className="header-title-container__title">Invoices</h1>
      {!!invoicesCount && (
        <span className="header-title-container__invoices-count">
          {isMobile ? `${invoicesCount} invoices` : `There are ${invoicesCount} total invoices`}
        </span>
      )}
    </div>
  );
}
