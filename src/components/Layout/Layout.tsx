import "./Layout.scss";
import { SettingsBar } from "../SettingsBar/SettingsBar";
import { routes } from "../../routes/routes";

export function Layout() {
  return (
    <main className="app-container">
      <SettingsBar />
      <div className="app-container__content">{routes}</div>
    </main>
  );
}
