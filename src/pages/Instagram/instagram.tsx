import { useEffect, useState } from "react";
const Instagram = () => {
  const [posts, setPosts] = useState();
  const getPosts = () => {
    fetch("http://localhost:3000/instagram")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="container">
      <h1>Instagram</h1>
      <hr />
    </div>
  );
};
export default Instagram;
