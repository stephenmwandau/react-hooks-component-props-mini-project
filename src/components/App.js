// src/components/App.js

import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App({ blog }) {
  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Header name={blog.name} />
      <About image={blog.image} about={blog.about} />
      <ArticleList posts={blog.posts} />
    </div>
  );
}

export default App;
