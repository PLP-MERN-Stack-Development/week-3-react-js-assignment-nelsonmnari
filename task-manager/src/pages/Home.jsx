import { Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
        Welcome to Task Manager
      </h1>

      <Card className="animate-scale">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Features
        </h2>
        <ul className="space-y-3 list-disc pl-5 text-gray-700 dark:text-gray-300">
          <li>Manage your tasks with ease</li>
          <li>Filter tasks by status</li>
          <li>Persistent storage using local storage</li>
          <li>Dark mode support</li>
          <li>Fetch and display posts from API</li>
        </ul>
      </Card>

      <div className="flex space-x-4">
        <Button as={Link} to="/tasks" className="flex-1 text-center">
          Go to Tasks
        </Button>
        <Button
          as={Link}
          to="/posts"
          variant="secondary"
          className="flex-1 text-center"
        >
          View Posts
        </Button>
      </div>
    </div>
  );
};

export default Home;
