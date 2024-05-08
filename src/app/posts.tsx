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
import foto from "../../public/image/foto.png";

export function Posts() {
  const [posts, setPosts] = useState<any>();
  const [currentPostRender, setCurrentPostRender] = useState<any>(null);
  const [postsFrontend, setPostsFrontend] = useState<any>([]);
  const [postsBackend, setPostsBackend] = useState([]);
  const [postsFullstack, setPostsFullstack] = useState([]);
  const [postsTips, setPostsTips] = useState([]);
  const [postsHelper, setPostsHelper] = useState([]);

  const getAllPosts = async () => {
    try {
      const api = await fetch(
        "https://devgeniushub-api-production.up.railway.app/prompts/posts"
      );

      if (!api.ok) toast.error("error al mostrar posts");

      let response = await api.json();
      setPosts(response);
    } catch (error) {
      console.log(error);
      toast.error("error");
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filterDataContent = async () => {
    if (!posts) return;

    setPostsFrontend(posts.frontendPosts);
    setPostsBackend(posts.backendPosts);
    setPostsFullstack(posts.fullstackPosts);
    setPostsTips(posts.tipPost);
    setPostsHelper(posts.helperPost);
  };

  const handleChangeContent = (value: string) => {
    switch (value) {
      case "frontend":
        setCurrentPostRender(postsFrontend);
        break;
      case "backend":
        setCurrentPostRender(postsBackend);
        break;
      case "fullstack":
        setCurrentPostRender(postsFullstack);
        break;
      case "tips":
        setCurrentPostRender(postsTips);
        break;
      case "helper":
        setCurrentPostRender(postsHelper);
        break;
      default:
        setCurrentPostRender(null);
        break;
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  useEffect(() => {
    filterDataContent();
  }, [filterDataContent, posts]);

  return (
    <section className="grid min-h-screen place-items-center p-8">
      <Tabs value="trends" className="mx-auto max-w-7xl w-full mb-16 ">
        <div className="w-full flex mb-8 flex-col items-center">
          {/* @ts-ignore */}
          <TabsHeader className="h-10 !w-12/12 md:w-[50rem] border border-white/25 bg-opacity-90">
            {/* @ts-ignore */}
            <Tab
              value="frontend"
              onClick={() => handleChangeContent("frontend")}
            >
              Frontend
            </Tab>
            {/* @ts-ignore */}

            <Tab value="backend" onClick={() => handleChangeContent("backend")}>
              Backend
            </Tab>
            {/* @ts-ignore */}

            <Tab
              value="fullstack"
              onClick={() => handleChangeContent("fullstack")}
            >
              FullStack
            </Tab>

            {/* <Tab value="tips" onClick={() => handleChangeContent("tips")}>
              Consejos
            </Tab>

            <Tab value="helper" onClick={() => handleChangeContent("helper")}>
              Ejemplos
            </Tab> */}
          </TabsHeader>
        </div>
      </Tabs>

      {/* @ts-ignore */}

      <Typography variant="h6" className="mb-2">
        Explora los recientes posts
      </Typography>
      {/* @ts-ignore */}

      <Typography variant="h1" className="mb-2">
        Publicación Diaria
      </Typography>
      {/* @ts-ignore */}

      <Typography
        variant="lead"
        color="gray"
        className="max-w-3xl mb-36 text-center text-gray-500"
      >
        Observa los nuevos posts de hoy creados 100% por inteligencia artificial
      </Typography>

      <div className="container my-auto grid grid-cols-1 gap-x-8 gap-y-16 items-start lg:grid-cols-3">
        {currentPostRender !== null ? (
          currentPostRender.map((data: any, index: number) => (
            // @ts-ignore
            <BlogPostCard
              key={index}
              img={foto}
              tag={data.typePost}
              title={data.titlePost}
              desc={data.descriptionPost}
            />
          ))
        ) : (
          <div>
            {currentPostRender === "tips" && postsTips.length > 0 ? (
              postsTips.map((data: any, index: number) => (
                // @ts-ignore
                <BlogPostCard
                  key={index}
                  img={foto}
                  tag={data.typePost}
                  title={data.title}
                  desc={data.descripcion}
                />
              ))
            ) : (
              // @ts-ignore
              <Typography variant="body" className="text-center">
                Selecciona una categoria.
              </Typography>
            )}
          </div>
        )}
      </div>

      {/* @ts-ignore */}
      <Button
        variant="text"
        size="lg"
        color="gray"
        className="flex items-center gap-2 mt-24"
        onClick={() => toast.error("no hay mas contenido aun xd")}
      >
        <ArrowSmallDownIcon className="h-5 w-5 font-bold text-gray-900" />
        Ver más
      </Button>
    </section>
  );
}

export default Posts;
