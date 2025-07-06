import Card from "../components/Card";

const About = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        About
      </h1>

      <Card>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Task Manager App
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This is a responsive React application built with Vite, Tailwind CSS,
          and React Router. It demonstrates component architecture, state
          management, hooks usage, and API integration.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Features include task management with local storage persistence, theme
          switching (light/dark mode), and fetching posts from JSONPlaceholder
          API with pagination and search functionality.
        </p>
      </Card>
    </div>
  );
};

export default About;
