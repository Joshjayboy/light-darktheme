// Use "use client" to enable client-side rendering for this file
"use client";

// Import React for component creation
import * as React from "react";

// Import the ThemeProvider from the 'next-themes' package for theme management
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Import the type definition for ThemeProviderProps from the 'next-themes' package
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    // Pass all received props to the NextThemesProvider and render the children within it
    <NextThemesProvider {...props}>{children}</NextThemesProvider>

  )
}
