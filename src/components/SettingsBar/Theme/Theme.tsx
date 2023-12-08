import { useState, useEffect } from "react";
import { ReactComponent as MoonIcon } from "../../../assets/svgs/icon-moon.svg";
import { ReactComponent as SunIcon } from "../../../assets/svgs/icon-sun.svg";
import "./Theme.scss";

export function Theme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (theme === "dark") {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
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
