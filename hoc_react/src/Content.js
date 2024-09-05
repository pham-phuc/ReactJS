import { useState, useEffect } from "react";

const tabs = ["posts", "comments", "albums"];

function Content() {
  const [title, settitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");

  //   useEffect(() => {
  //     document.title = title;
  //   });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, [type]);

  return (
    <div style={{ padding: 50 }}>
      {tabs.map((tab) => (
        <button
          key="tab"
          style={
            type === tab ? { color: "#fff", backgroundColor: "#2ecc71" ,border:'1px solid #2ecc71'} : {}
          }
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
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
