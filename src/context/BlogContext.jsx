import React, { useEffect } from "react";
import { postBlog } from "../api";
import { UserContext } from "../context/UserContext";

export const BlogContext = React.createContext();

const BlogComponent = ({ children }) => {
  const [UserState, setUserState] = React.useContext(UserContext);
  const [blogState, setBlogState] = React.useState(postBlog);

  //   useEffect(() => {
  //     if (!UserState.token) return false;
  //     postBlog();
  //   }, [UserState]);

  return (
    <BlogContext.Provider value={[blogState, setBlogState]}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogComponent;
