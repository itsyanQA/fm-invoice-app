import { useState } from "react";
import { ReactComponent as MoonIcon } from "../../../assets/svg/icon-moon.svg";
import { ReactComponent as SunIcon } from "../../../assets/svg/icon-sun.svg";
import "./Theme.scss";
import { useDidMountEffect } from "../../../hooks/useDidMountEffect";

type ThemeMode = "light" | "dark";

export function Theme() {
  const handleThemeChange = (theme: ThemeMode) => {
    if (theme === "dark") {
      document.body.setAttribute("data-theme", "dark");
    } else if (theme === "light") {
      document.body.setAttribute("data-theme", "light");
    }

    localStorage.setItem("theme", theme);
  };

  const getInitialTheme = (): ThemeMode => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (window.matchMedia("(prefers-color-scheme: dark)") && localStorage.getItem("theme") !== "light")
    ) {
      handleThemeChange("dark");
      return "dark";
    }

    handleThemeChange("light");
    return "light";
  };

  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useDidMountEffect(() => handleThemeChange(theme), [theme]);

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
