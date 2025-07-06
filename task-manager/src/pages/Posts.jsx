import { useState, useEffect } from "react";
import { fetchPosts } from "../utils/api";
import Card from "../components/Card";
import Button from "../components/Button";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const limit = 10;

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const { data, total } = await fetchPosts(page, limit, searchQuery);
        setPosts(data);
        setTotalPosts(total);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, [page, searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        Posts
      </h1>

      <Card>
        <form onSubmit={handleSearch} className="flex space-x-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search posts..."
            className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <Button type="submit">Search</Button>
        </form>
      </Card>

      {loading ? (
        <Card>
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </Card>
      ) : error ? (
        <Card>
          <div className="text-red-500 dark:text-red-400 p-4">{error}</div>
        </Card>
      ) : (
        <>
          <Card>
            <ul className="space-y-4">
              {posts.map((post) => (
                <li
                  key={post.id}
                  className="p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                >
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {post.body}
                  </p>
                </li>
              ))}
            </ul>
          </Card>

          <div className="flex justify-between items-center">
            <Button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Previous
            </Button>
            <span className="text-gray-700 dark:text-gray-300">
              Page {page} of {Math.ceil(totalPosts / limit)}
            </span>
            <Button
              onClick={() => setPage((p) => p + 1)}
              disabled={page >= Math.ceil(totalPosts / limit)}
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Posts;
