import React, { useEffect, useState } from "react";
import axios from "axios";

/*

install axios 
install dbjson
*/ 

interface Post {
  id: number;
  title: string;
  body?: string; // optional field, in case your JSON has it
}

function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const controller = new AbortController(); 
    const signal = controller.signal;

    const timer = setTimeout(() => {
      axios
        .get<Post[]>("http://localhost:3000/posts", { signal })
        .then((response:any) => {
          console.log(response.data);
          setPosts(response.data);
        })
        .catch((err:any) => {
          if (axios.isCancel(err)) {
            console.log("Request cancelled:", err.message);
          } else {
            console.log("Error:", err);
          }
        });
    }, 5000);

    // cleanup function
    return (): void => {
      console.log("unMounted, Cleaning up");
      clearTimeout(timer);
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
