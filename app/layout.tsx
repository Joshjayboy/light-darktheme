// Import necessary types and components from Next.js and custom files
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/Nav";

// Load the Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Define metadata for the application (used for SEO purposes)
export const metadata: Metadata = {
  title: "Nexus Horizon", // Title of the web application
  description: "Interactive Theme Switcher", // Description for search engines
};

// Defines the RootLayout component which wraps the entire application layout
export default function RootLayout({
  children, // Children represent all nested components within the layout
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* ThemeProvider wraps the app to enable dark/light theme switching */}
        <ThemeProvider
          attribute="class"   // Enables class-based theme switching
          defaultTheme="dark"   // Sets the default theme to dark mode
          enableSystem    // Allows system preference-based theming
          disableTransitionOnChange  // Disables transitions when switching themes
        >
          <Nav />   {/* Navigation component */}
          {children}  {/* Main application content passed as children */}
        </ThemeProvider>
      </body>
    </html>
  );
}
