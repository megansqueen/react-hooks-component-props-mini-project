import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js";
import About from "./About.js";
import ArticleList from "./ArticleList.js";


function App() {
  return (
    <div className="App">
      <Header name="Blog"></Header>
      <About image={blogData.image}></About>
      <ArticleList posts={blogData.posts}></ArticleList>
    </div>
  );
}

export default App;
