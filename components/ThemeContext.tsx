// Enable client-side rendering for this file
"use client";

// Import necessary React utilities
import React, { createContext, useContext, useEffect, useState } from "react";

// Define the shape of the ThemeContext data
type ThemeContextType = {
    theme: string;  // Current theme, either "light" or "dark"
    toggleTheme: () => void; // Function to toggle between light and dark themes
};

// Create the ThemeContext with an initial undefined value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);



/**
 * ThemeProvider Component
 * 
 * Provides theme management (light/dark mode) to the entire application.
 * It wraps its children with a context provider to share the theme and toggleTheme function.
 * 
 * @param {React.ReactNode} children - The child components wrapped by the ThemeProvider.
 * 
 * @returns {JSX.Element} ThemeContext.Provider with the current theme and toggle function.
 */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    // State to track the current theme, initialized based on localStorage or defaulted to "light"
    const [theme, setTheme] = useState<string>(() => {

        // Ensure window object is available (for server-side rendering safety)
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "light"; // Retrieve the theme from localStorage or use "light"
        }
        return "light";  // Default theme for server-side rendering
    });

    /**
    * Effect to update the document's class list and save the theme in localStorage whenever it changes.
    */
    useEffect(() => {
        // Remove both theme classes from the document's root element
        document.documentElement.classList.remove("light", "dark");
        // Add the current theme as a class to the root element
        document.documentElement.classList.add(theme);
        // Save the current theme in localStorage for persistence
        localStorage.setItem("theme", theme);
    }, [theme]); // Dependency array ensures this effect runs when the theme changes

    /**
    * Function to toggle between light and dark themes.
    */
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    // Return the ThemeContext.Provider, passing the theme and toggleTheme function
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};


/**
 * useTheme Hook
 *
 * Custom hook to access the theme context. Ensures that it is only used within a ThemeProvider.
 *
 * @returns {ThemeContextType} The theme context (current theme and toggle function).
 * @throws Will throw an error if used outside of a ThemeProvider.
 */
export const useTheme = () => {
    const context = useContext(ThemeContext);
    // Throw an error if the hook is used outside the ThemeProvider
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
