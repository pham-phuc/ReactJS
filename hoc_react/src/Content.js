import { useState, useEffect } from "react";

function Content() {
  const [title, settitle] = useState("");
  const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     document.title = title;
  //   });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, []);

  return (
    <div style={{ padding: 50 }}>
      <input value={title} onChange={(e) => settitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Content;
