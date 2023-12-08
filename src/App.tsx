import { SettingsBar } from "./components/SettingsBar/SettingsBar/SettingsBar";
import { HomePage } from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <main className="app-container">
      <SettingsBar />
      <div className="app-container__content">
        <Routes>
          <Route path="/" Component={HomePage} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
