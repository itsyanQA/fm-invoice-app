import "./GoBack.scss";
import { ReactComponent as ArrowLeft } from "../../assets/svg/icon-arrow-left.svg";
import { StyledLInk } from "../../styled/StyledLInk";

export function GoBack() {
  return (
    <StyledLInk to="/">
      <div className="go-back">
        <ArrowLeft />
        <span className="go-back__text">Go back</span>
      </div>
    </StyledLInk>
  );
}
