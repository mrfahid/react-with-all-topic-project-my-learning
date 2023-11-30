import { useState, useEffect } from "react";
import Card from "./components/Card";
import ThemeButton from "./components/ThemeButton";
import { ThemeProvider } from "./context/theme";

function App() {
  const [themeMode, setThemeMode] = useState();

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const remove = document.querySelector("html");
    remove.classList.remove("light", "dark");
    const add = document.querySelector("html");
    add.classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
