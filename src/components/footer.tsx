import React, { useState } from "react";
import {
  Typography,
  IconButton,
  Input,
  Button,
} from "@material-tailwind/react";
import toast, { Toaster } from "react-hot-toast";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = [
  {
    name: "Vopper Community",
    href: "https://chat.whatsapp.com/Jq40THDMFnhBTUSedzcZc4",
  },
  { name: "Asistente", href: "/questions" },
  { name: "Creador" },
];

export function Footer() {
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
        toast.error("Prueba con otro correo");
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
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-900 container max-w-6xl mx-auto rounded-2xl p-5 ">
          {/* @ts-ignore */}
          <Typography
            className="text-2xl md:text-3xl text-center font-bold "
            color="white"
          >
            Unete a la Comunidad!
          </Typography>
          {/* @ts-ignore */}
          <Typography
            color="white"
            className=" md:w-7/12 text-center my-3 !text-base"
          >
            Obten notificaciones diarias sobre nuevos posts desde tu correo
          </Typography>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
            <div className="w-80">
              {/* @ts-ignore */}
              <Input
                // @ts-ignore
                onChange={handleInputQuest}
                label="Email"
                color="white"
              />
              <Toaster />
            </div>
            {/* @ts-ignore */}
            <Button
              onClick={subscribe}
              size="md"
              className="lg:w-32"
              fullWidth
              color="white"
            >
              Suscribir
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center !justify-between">
          {/* @ts-ignore */}
          <Typography
            as="a"
            href="https://www.instagram.com/hiram.dev"
            target="_blank"
            variant="h6"
            className="text-gray-900"
          >
            Dev Genius Hub
          </Typography>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                {/* @ts-ignore */}
                <Typography
                  as="a"
                  href={link.href}
                  target="_blank"
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link.name}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            {/* @ts-ignore */}
            <IconButton
              onClick={() => {
                window.location.href = "https://instagram.com/hiram.dev";
              }}
              size="sm"
              color="gray"
              variant="text"
            >
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            {/* @ts-ignore */}
            <IconButton
              onClick={() => {
                window.location.href = "https://github.com/itsrusty";
              }}
              size="sm"
              color="gray"
              variant="text"
            >
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
        </div>
        {/* @ts-ignore */}
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Created By{" "}
          <a href="https://www.instagram.com/hiram.dev" target="_blank">
            @hiram.dev
          </a>
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
