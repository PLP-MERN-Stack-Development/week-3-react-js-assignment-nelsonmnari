export const fetchPosts = async (page = 1, limit = 10, searchQuery = "") => {
  try {
    let url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`;
    if (searchQuery) {
      url += `&q=${searchQuery}`;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const total = response.headers.get("x-total-count");
    const data = await response.json();
    return { data, total: parseInt(total, 10) };
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
