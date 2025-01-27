// "use client" directive ensures this file is rendered on the client side.
"use client";

// Import necessary dependencies
import React from "react";
import { useTheme } from "./ThemeContext"; // Custom hook to access the theme context
import { Moon, Sun } from "lucide-react"; // Icon components for light and dark themes
import { Button } from "@/components/ui/button"; // Reusable button component

/**
 * ThemeSwitcher Component
 *
 * A button that allows users to toggle between light and dark themes.
 * Displays a sun icon for the dark theme and a moon icon for the light theme.
 *
 * @returns {JSX.Element} A button to toggle the theme.
 */
const ThemeSwitcher = () => {
    // Destructure the theme and toggleTheme function from the custom theme context
    const { theme, toggleTheme } = useTheme();

    return (
        // Button to toggle the theme, with an icon indicating the current theme
        <Button variant="secondary" size="icon" onClick={toggleTheme}>
            {/* Conditionally render the Sun or Moon icon based on the current theme */}
            {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
    );
};

// Export the component to be used in other parts of the application
export default ThemeSwitcher;
