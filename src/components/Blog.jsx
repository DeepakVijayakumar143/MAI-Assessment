import React from "react";

import "../css/RecentProject.css";
import ProjectCard from "./ProjectCard";
import BlogCard from "./BlogCard";
const Blog = () => {
  return (
    <div className="recent-project">
      <h3>Blog</h3>
      <div className="recent-project-bottom scrolling-wrapper">
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
      </div>
      <h3 className="text-align-end">View All</h3>
    </div>
  );
};

export default Blog;
