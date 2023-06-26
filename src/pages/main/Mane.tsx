import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import SinglePost from "./SinglePost";

export interface Post {
  id: string;
  userId: string;
  title: string;
  description: string;
  username: string;
}

const Mane = () => {
  const [postsList, setPostsList] = useState<Post[] | null>(null);
  const postsRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {postsList?.map((post: Post) => (
        <SinglePost post={post} />
      ))}
    </div>
  );
};

export default Mane;
