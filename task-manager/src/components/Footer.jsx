import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`py-6 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-300"
          : "bg-gray-100 text-gray-700"
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <p>
          © {new Date().getFullYear()} Task Manager App. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
            Terms
          </a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
            Privacy
          </a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
