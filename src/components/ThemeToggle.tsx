import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full border-glass-border bg-glass backdrop-blur-glass hover:bg-primary/10 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-accent-orange transition-transform duration-300 rotate-0" />
      ) : (
        <Moon className="h-4 w-4 text-primary transition-transform duration-300 rotate-0" />
      )}
    </Button>
  );
};