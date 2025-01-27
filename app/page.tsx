// Import the MainContent component from the components directory
import MainContent from "@/components/MainContent";

/**
 * Home Component
 *
 * This is the default export for the `Home` page. 
 * It serves as the main entry point for rendering the primary content of the application.
 *
 * @returns {JSX.Element} The main content of the application, rendered using the MainContent component.
 */
export default function Home() {
  // Render the MainContent component as the primary content for the Home page
  return <MainContent />;
}