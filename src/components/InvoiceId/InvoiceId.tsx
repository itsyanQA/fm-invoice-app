import "./InvoiceId.scss";

type InvoiceIdProps = {
  invoiceId: string | undefined;
};

export function InvoiceId({ invoiceId }: InvoiceIdProps) {
  return <span className="invoice-id">{invoiceId}</span>;
}
