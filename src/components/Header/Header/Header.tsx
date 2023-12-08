import { HeaderHeadings } from "../HeaderHeadings/HeaderHeadings";
import { HeaderNewInvoiceButton } from "../HeaderNewInvoiceButton/HeaderNewInvoiceButton";
import "./Header.scss";

type HeaderProps = {
  invoicesCount: number;
};

export function Header({ invoicesCount }: HeaderProps) {
  return (
    <header className="header">
      <HeaderHeadings invoicesCount={invoicesCount} />
      <HeaderNewInvoiceButton />
    </header>
  );
}
