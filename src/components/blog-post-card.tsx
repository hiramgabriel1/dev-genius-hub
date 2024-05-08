import React from "react";
import Image from "next/image";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
} from "@material-tailwind/react";

interface BlogPostCardProps {
  img: any;
  tag: string;
  title: string;
  desc: string;
  author: { name: string; img: string };
  date: string;
}

export function BlogPostCard({
  img,
  tag,
  title,
  desc,
}: BlogPostCardProps) {
  return (
    // @ts-expect-error

    <Card shadow={true}>
      {/* @ts-ignore */}
      <CardHeader>
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full scale-110 object-cover"
        />
      </CardHeader>
      {/* @ts-ignore */}

      <CardBody className="p-6">
        {/* @ts-ignore */}

        <Typography variant="small" color="blue" className="mb-2 !font-medium">
          {tag}
        </Typography>
        {/* @ts-ignore */}
        <Typography
          as="a"
          href="#"
          variant="h5"
          color="blue-gray"
          className="mb-2 normal-case transition-colors hover:text-gray-900"
        >
          {title}
        </Typography>
        {/* @ts-ignore */}

        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default BlogPostCard;
