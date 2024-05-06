/* eslint-disable react/no-children-prop */
import Image from "next/image";
import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";


interface ArticleCardProps {
    img: string;
    title: string;
    desc: string;
  }
  
  export function ArticleCard({ img, title, desc }: ArticleCardProps) {
    
    return (
      
      <Card
      // @ts-ignore
        className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
        color="transparent" children={undefined} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
        <Image
          width={768}
          height={768}
          src={img}
          alt="bg"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        {/* @ts-ignore */}
        <CardBody className="relative flex flex-col justify-end">
        {/* @ts-ignore */}
          <Typography variant="h4" color="white">
            {title}
          </Typography>
{/* @ts-ignore */}
          <Typography
            variant="paragraph"
            color="white"
            className="my-2 font-normal"
          >
            {desc}
          </Typography>
        </CardBody>
      </Card>
    );
  }

  export default ArticleCard;