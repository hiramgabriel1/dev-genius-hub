"use client";

import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import { ArrowSmallDownIcon } from "@heroicons/react/24/solid";
import BlogPostCard from "@/components/blog-post-card";
import toast from "react-hot-toast";

export function Posts() {
  const [posts, setPosts] = useState<any>();
  const [postsFrontend, setPostsFrontend] = useState<any>([]);
  const [postsBackend, setPostsBackend] = useState([]);
  const [postsFullstack, setPostsFullstack] = useState([]);
  const [postsTips, setPostsTips] = useState([]);
  const [postsHelper, setPostsHelper] = useState([]);

  const getAllPosts = async () => {
    try {
      const api = await fetch("http://localhost:5000/prompts/posts");

      if (!api.ok) toast.error("error al mostrar posts");

      let response = await api.json();
      setPosts(response);
    } catch (error) {
      console.log(error);

      toast.error("error");
    }
  };

  const filterDataContent = async () => {
    if(!posts) return

    const filterPostsFrontend = posts.frontendPosts;
    const filterPostsBackend = posts.backendPosts;
    const filterPostsFullstack = posts.fullstackPosts;
    const filterPostsTips = posts.tipPost;
    const filterPostsHelper = posts.helperPost;

    console.log(filterPostsFrontend);

    setPostsFrontend(filterPostsFrontend);
    setPostsBackend(filterPostsBackend);
    setPostsFullstack(filterPostsFullstack);
    setPostsTips(filterPostsTips);
    setPostsHelper(filterPostsHelper);
  };

  const changeContent = async () => {
    console.log("jdksdj");
  };

  const showMorePosts = async () => {
    console.log("show more posts");
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  useEffect(() => {
    console.log(posts);
    filterDataContent();
  }, [posts]);

  return (
    <section className="grid min-h-screen place-items-center p-8">
      <Tabs value="trends" className="mx-auto max-w-7xl w-full mb-16 ">
        <div className="w-full flex mb-8 flex-col items-center">
          {/* @ts-ignore */}
          <TabsHeader className="h-10 !w-12/12 md:w-[50rem] border border-white/25 bg-opacity-90">
            {/* @ts-ignore */}

            <Tab value="trends" onClick={changeContent}>
              Diario
            </Tab>
            {/* @ts-ignore */}

            <Tab value="frontend">Frontend</Tab>
            {/* @ts-ignore */}

            <Tab value="backend">Backend</Tab>
            {/* @ts-ignore */}

            <Tab value="ai">Tips</Tab>
            {/* @ts-ignore */}

            <Tab value="tools">Ejemplos</Tab>
          </TabsHeader>
        </div>
      </Tabs>
      {/* @ts-ignore */}

      <Typography variant="h6" className="mb-2">
        Explora los recientes posts
      </Typography>
      {/* @ts-ignore */}

      <Typography variant="h1" className="mb-2">
        Publicacion Diaria
      </Typography>

      {/* @ts-ignore */}
      <Typography
        variant="lead"
        color="gray"
        className="max-w-3xl mb-36 text-center text-gray-500"
      >
        Observa los nuevo posts de hoy creados 100% por inteligencia artificial
      </Typography>
      <div className="container my-auto grid grid-cols-1 gap-x-8 gap-y-16 items-start lg:grid-cols-3">
        {postsFrontend.map((data: any, index: number) => (
          // @ts-ignore
          <BlogPostCard
            key={index}
            img="/image/blogs/blog2.svg"
            tag={data.typePost}
            title={data.titlePost}
            desc={data.descriptionPost}
          />
        ))}
      </div>
      {/* @ts-ignore */}
      <Button
        variant="text"
        size="lg"
        color="gray"
        className="flex items-center gap-2 mt-24"
        onClick={showMorePosts}
      >
        <ArrowSmallDownIcon className="h-5 w-5 font-bold text-gray-900" />
        Ver mas
      </Button>
    </section>
  );
}

export default Posts;
