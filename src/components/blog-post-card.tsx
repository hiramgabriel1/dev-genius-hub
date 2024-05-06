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
  img: string;
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
  author,
  date,
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
        <div className="flex items-center gap-4">
          {/* @ts-ignore */}
          <Avatar
            size="sm"
            variant="circular"
            src={author.img}
            alt={author.name}
          />
          <div>
          {/* @ts-ignore */}
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-0.5 !font-medium"
            >
              {/* {author.name} */}
            </Typography>
          {/* @ts-ignore */}

            <Typography
              variant="small"
              color="gray"
              className="text-xs !text-gray-500 font-normal"
            >
              {date}
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}


export default BlogPostCard;