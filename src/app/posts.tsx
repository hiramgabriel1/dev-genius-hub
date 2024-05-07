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

const POSTS = [
  {
    img: `/image/blogs/blog2.svg`,
    tag: "Enterprise",
    title: "The key new features and changes in Tailwind CSS",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
  },
];

export function Posts() {
  const [postsFrontend, setPostsFrontend] = useState({});
  const [postsBackend, setPostsBackend] = useState([]);
  const [postsFullstack, setPostsFullstack] = useState([]);
  const [postsTips, setPostsTips] = useState([]);
  const [postsRandomCode, setPostsRandom] = useState([]);

  const getAllPosts = async () => {
    try {
      const api = await fetch("http://localhost:5000/prompts/posts");

      if (!api.ok) toast.error("error al mostrar posts");

      let response = await api.json()
      setPostsFrontend(response)

    } catch (error) {
      console.log(error);

      toast.error('error')
    }
  };

  const changeContent = async () => {
    console.log("jdksdj");
  };

  const showMorePosts = async () => {
    console.log("show more posts");
  };

  useEffect(() => {
    getAllPosts()
  }, [])

  useEffect(() => {
    console.log(postsFrontend);
    
  }, [postsFrontend])

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
        {POSTS.map(({ img, tag, title, desc }) => (
          // @ts-ignore
          <BlogPostCard
            key={title}
            img={img}
            tag={tag}
            title={title}
            desc={desc}
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
