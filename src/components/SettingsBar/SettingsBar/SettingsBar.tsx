import { Logo } from "../Logo/Logo";
import { Theme } from "../Theme/Theme";
import "./SettingsBar.scss";

export function SettingsBar() {
  return (
    <div className="settings">
      <Logo />
      <div className="settings__theme-and-profile-container">
        <Theme />
        <span className="settings__horizontal-line" />
        <img className="settings__avatar" src={require("../../../assets/images/image-avatar.jpg")} />
      </div>
    </div>
  );
}
