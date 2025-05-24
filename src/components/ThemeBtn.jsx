import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeBtn = ({isVisible}) => {
  const { toggleTheme, theme } = useTheme();
  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}
        style={{ transitionDelay: "1000ms" }}
      >
        {theme === "dark" ? (
          <Sun className="w-6 h-6 text-yellow-500 transition-transform duration-300 hover:rotate-12" />
        ) : (
          <Moon className="w-6 h-6 text-purple-600 transition-transform duration-300 hover:-rotate-12" />
        )}
      </button>
    </div>
  );
};

export default ThemeBtn;
