"use client";
import React from "react";
import { useTheme } from "./ThemeContext";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button variant="secondary" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
    );
};

export default ThemeSwitcher;
