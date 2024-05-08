/* eslint-disable react/no-children-prop */
"use client";

import Image from "next/image";
import { Button, Typography, Input } from "@material-tailwind/react";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

function Hero() {
  const [email, setEmail] = useState("");

  const handleInputQuest = (e: React.ChangeEvent<HTMLInputElement>) => {
    const question = e.target.value;

    if (question == " ") {
      toast.error("Epa, llena el input papi");
    } else {
      setEmail(question.toLowerCase());
    }
  };

  const subscribe = async () => {
    try {
      const sender = await fetch(
        "https://devgeniushub-api-production.up.railway.app/emails/saveEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        }
      );

      if (!sender.ok) {
        toast.error("Error, intenta despues");
        return;
      } else {
        toast.success(
          "Recibiras emails diarios. Gracias por tu confianza guap(@) :)"
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="mt-5 bg-white p-8">
      <div className="w-w-full container mx-auto pt-12 pb-24 text-center">
        <Typography
          // @ts-expect-error
          color="blue-gray"
          className="mx-auto w-full text-[30px] lg:text-[48px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl"
          children={undefined}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Haciendo que la programación sea accesible para todos, una respuesta a
          la vez
        </Typography>
        <Typography
          // @ts-expect-error
          variant="lead"
          className="mx-auto mt-8 mb-4 w-full px-8 !text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
          children={undefined}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Impulsado 100% con Inteligencia Artificial
        </Typography>
        <div className="grid place-items-start justify-center gap-2">
          <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
            <div className="w-80">
              {/* @ts-ignore */}
              <Input label="name@gmail.com" onChange={handleInputQuest} />
            </div>

            {/* @ts-ignore */}
            <Button
              // @ts-ignore
              size="md"
              className="lg:w-max shrink-0"
              fullWidth
              color="gray"
              onClick={subscribe}
              children={undefined}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Comenzar
            </Button>
          </div>
          <div className="flex items-center gap-1">
            {/* @ts-ignore */}
            <Typography
              // @ts-ignore
              variant="small"
              className="font-normal text-gray-700"
              children={undefined}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Ver los{" "}
              <a
                href="#"
                onClick={() => toast("hola xd")}
                className="hover:text-gray-900 transition-colors underline"
              >
                Terminos y Condiciones de uso
              </a>
              <Toaster />
            </Typography>
          </div>
        </div>
      </div>
      <div className="w-full lg:container lg:mx-auto">
        <Image
          width={1024}
          height={400}
          src="/image/blog-background.png"
          alt="credit cards"
          className="h-96 w-full rounded-lg object-cover lg:h-[21rem]"
        />
      </div>
    </header>
  );
}
export default Hero;
