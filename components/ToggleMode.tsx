// "use client" directive ensures this file is rendered on the client side.
"use client";

// Import necessary dependencies
import React, { useState, useEffect } from "react"; // React hooks
import { useTheme } from "next-themes"; // Hook to manage and access the current theme
import { Moon, Sun } from "lucide-react"; // Icons for light and dark modes
import { Button } from "./ui/button"; // Custom button component


/**
 * ToggleMode Component
 *
 * A button that allows users to toggle between light and dark themes.
 * It ensures that the theme-switching logic only executes after the component is mounted.
 *
 * @returns {JSX.Element} A button to toggle between light and dark modes.
 */
const ToggleMode = () => {
  // Destructure the current theme and the function to set a new theme from `useTheme`
  const { theme, setTheme } = useTheme();

  // State to track whether the component has been mounted in the browser
  const [mounted, setMounted] = useState(false);

  /**
  * useEffect Hook
  * Ensures that the component is marked as mounted after the first render.
  * This avoids issues with server-side rendering (SSR) and theme context.
  */
  useEffect(() => {
    setMounted(true);
  }, []); // Empty dependency array ensures this runs only once after the component mounts


  // If the component hasn't mounted yet, render a disabled button
  if (!mounted) {
    return <Button variant="secondary" size="icon" disabled={true}></Button>;
  }

  // Boolean to determine if the current theme is "dark"
  const dark = theme === "dark";

  return (
    // Button to toggle theme with click event
    <Button
      variant="secondary" // Secondary style variant for the button
      size="icon"  // Button styled as an icon button
      onClick={() => setTheme(`${dark ? "light" : "dark"}`)}  // Switch between light and dark themes
    >
      {/* Conditionally render the Sun or Moon icon based on the current theme */}
      {dark ? (
        // Sun icon for dark mode, with hover effects for pointer and color
        <Sun className="hover:cursor-pointer hover:text-primary" />
      ) : (
        // Moon icon for light mode, with similar hover effects
        <Moon className="hover:cursor-pointer hover:text-primary" />
      )}
    </Button>
  );
};

// Export the component for use in other parts of the application
export default ToggleMode;
