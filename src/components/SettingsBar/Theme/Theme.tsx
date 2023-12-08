import { useState, useEffect } from "react";
import { ReactComponent as MoonIcon } from "../../../assets/svgs/icon-moon.svg";
import { ReactComponent as SunIcon } from "../../../assets/svgs/icon-sun.svg";
import "./Theme.scss";

type ThemeMode = "light" | "dark";

const getInitialTheme = (): ThemeMode => {
  if (
    localStorage.getItem("theme") === "dark" ||
    (window.matchMedia("(prefers-color-scheme: dark)") && localStorage.getItem("theme") !== "light")
  ) {
    return "dark";
  }

  return "light";
};

export function Theme() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.body.setAttribute("data-theme", "dark");
    } else if (theme === "light") {
      document.body.setAttribute("data-theme", "light");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const clickHandler = (): void => {
    setTheme((currentTheme) => {
      if (currentTheme === "light") {
        return "dark";
      }
      return "light";
    });
  };

  const themeIconProps = {
    onClick: clickHandler,
    className: "theme-icon",
  };

  return theme === "light" ? <MoonIcon {...themeIconProps} /> : <SunIcon {...themeIconProps} />;
}
