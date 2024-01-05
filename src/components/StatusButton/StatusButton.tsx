import { Status } from "../../types/types";
import { ReactComponent as Bullet } from "../../assets/svg/bullet.svg";
import "./StatusButton.scss";

type StatusButtonProps = {
  status: Status;
};

export function StatusButton({ status }: StatusButtonProps) {
  const statusButtonClassModifier: Record<Status, string> = {
    draft: "status-button--is-draft",
    paid: "status-button--is-paid",
    pending: "status-button--is-pending",
  };

  return (
    <button className={`status-button ${statusButtonClassModifier[status]}`}>
      <Bullet className="status-button__bullet" />
      <span className="status-button__text">{status}</span>
    </button>
  );
}
