import { Input } from "@/components/ui/input";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BlogCard from "./BlogCard";

import { useState, useEffect } from "react";
import axios from "axios";

function ArticleSection() {
  const [categoryActive, setCategoryActive] = useState("Highlight");
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [posts, setPosts] = useState([]); //api data
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1); //pagination
  const [hasMore, setHasMore] = useState(true);

  const getPosts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://blog-post-project-api.vercel.app/posts?page=${page}&limit=6${
          categoryActive !== "Highlight" ? `&category=${categoryActive}` : "" //fetch ทุก post ถ้าไม่ใช่ highlight
        }`,
      );
      setPosts((prevPosts) =>
        page === 1
          ? response.data.posts
          : [...prevPosts, ...response.data.posts],
      );
      console.log(response);

      if (response.data.currentPage >= response.data.totalPages) {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getPosts();
  }, [page, categoryActive]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleCategorySelectionChange = (value) => {
    setCategoryActive(value);
    setPage(1);
    setHasMore(true);
  };

  return (
    <section className="w-full bg-white pb-[80px] md:px-[120px] md:pt-[80px] md:pb-[120px]">
      <div className="">
        <h2 className="text-headline-3 md:text-headline-3 text-brown-600 mb-[32px] px-[16px] md:px-0">
          Latest articles
        </h2>
      </div>
      <div className="flex flex-col gap-[16px] bg-brown-200 px-[24px] py-[16px] md:flex-row md:items-center md:justify-between md:rounded-[16px]  ">
        <div className="hidden md:flex md:flex-wrap md:items-center gap-[8px]">
          {categories.map((category) => (
            <button
              disabled={categoryActive === category}
              key={category}
              onClick={() => setCategoryActive(category)}
              className={`rounded-[8px] md:px-[20px] md:py-[12px] text-body-2 md:text-body-1 text-brown-400  hover:text-brown-500 transition-colors ${
                categoryActive === category ? "bg-brown-300" : "hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="relative w-full md:max-w-[380px]">
          <Input
            type="text"
            placeholder="Search"
            className="bg-white placeholder:text-brown-400 placeholder:text-body-1"
          />
        </div>
        <div className="md:hidden w-full">
          <p className="text-body-1 text-brown-400">Category</p>
          <Select
            value={categoryActive}
            onValueChange={handleCategorySelectionChange}
          >
            <SelectTrigger className="w-full md:max-w-[380px] bg-white text-brown-400">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="text-brown-400">
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="px-[16px] pt-[24px] pb-[80px] md:px-0 grid grid-cols-1 md:grid-cols-2 gap-x-[20px] gap-y-[48px] ">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            id={post.id}
            image={post.image}
            category={post.category}
            title={post.title}
            description={post.description}
            author={post.author}
            date={post.date}
          />
        ))}
      </div>
      {hasMore && (
        <div className="flex justify-center">
          <button
            className="cursor-pointer disabled:opacity-50"
            onClick={handleLoadMore}
          >
            {isLoading ? "Loading..." : "View more"}
          </button>
        </div>
      )}
    </section>
  );
}

export default ArticleSection;
