import React, { useState } from "react";
import {
  Typography,
  IconButton,
  Input,
  Button,
} from "@material-tailwind/react";
import toast, { Toaster } from "react-hot-toast";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];

export function Footer() {
  const [email, setEmail] = useState("");

  const getEmailUser = (e:Event) => {
    // @ts-ignore
    const email = e.target.value

    setEmail(email)
  };

  const saveEmailNewsLatter = async () => {
    toast.error("Hola, aún sigo trabajando en lo de los emails xd");
  };

  console.log(email);
  

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
                onInput={getEmailUser}
                label="Email"
                color="white"
              />
              <Toaster />
            </div>
            {/* @ts-ignore */}
            <Button
              onClick={saveEmailNewsLatter}
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
            href="https://www.material-tailwind.com"
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
                  href="#"
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            {/* @ts-ignore */}
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
            {/* @ts-ignore */}
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-youtube text-lg" />
            </IconButton>
            {/* @ts-ignore */}
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            {/* @ts-ignore */}
            <IconButton size="sm" color="gray" variant="text">
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
          <a href="https://www.creative-tim.com" target="_blank">
            @hiram.dev
          </a>
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
