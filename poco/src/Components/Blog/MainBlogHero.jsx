import BlogLeftHero from "./BlogLeftHero";
import BlogRightHero from "./BlogRightHero";
import React from "react";

export default function BlogHero() {
  return (
    <div className="flex py-20 justify-center">
      <BlogLeftHero />
      <BlogRightHero />
    </div>
  );
}
