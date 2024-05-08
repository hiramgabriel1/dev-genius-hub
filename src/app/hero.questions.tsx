"use client";

import { Button, Typography, Input } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function HeroQuestions() {
    const [question, setQuestion] = useState<string>("");
    const [answer, setAnswer] = useState<{ response: string }>({ response: "" });
    const [render, setRender] = useState<boolean>(Boolean);

    const handleInputQuest = (e: React.ChangeEvent<HTMLInputElement>) => {
        const question = e.target.value;
        setQuestion(question);
    };

    const handleQuestionAI = async () => {
        setRender(true);
        toast("Procesando respuesta...");
        try {
            const API = await fetch(
                "https://devgeniushub-api-production.up.railway.app/assistant",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ question: question }),
                }
            );

            if (!API.ok) throw new Error("Error al procesar tu pregunta");

            const response = await API.json();
            setAnswer(response);
        } catch (error) {
            toast.error("Hubo un error al procesar tu respuesta");
            console.error(error);
        }
    };

    useEffect(() => {
        if (answer !== null || answer !== " ") {
            toast.success("Respuesta procesada correctamente");
        }
    }, [answer]);

    return (
        <>
            <header className="mt-5 bg-white p-8">
                <Toaster />
                <div className="w-w-full container mx-auto pt-12 pb-24 text-center">
                    {/* @ts-ignore */}

                    <Typography
                        color="blue-gray"
                        className="mx-auto w-full text-[30px] lg:text-[48px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl"
                    >
                        ¿No tienes idea de cómo comenzar en programación?
                    </Typography>
                    {/* @ts-ignore */}

                    <Typography
                        variant="lead"
                        className="mx-auto mt-8 mb-4 w-full px-8 !text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
                    >
                        Puedes pedir una ruta de aprendizaje en base a tus intereses
                    </Typography>
                    <div className="grid place-items-start justify-center gap-2">
                        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
                            <div className="w-80">
                                {/* @ts-ignore */}
                                <Input
                                    onChange={handleInputQuest}
                                    disabled={render ? true : false}
                                    label="Comienza preguntándome algo..."
                                />
                            </div>
                            {/* @ts-ignore */}
                            <Button
                                onClick={handleQuestionAI}
                                size="md"
                                className="lg:w-max shrink-0"
                                fullWidth
                                color="gray"
                            >
                                Preguntar
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container mx-auto">
                <p className="bg-gray-200 p-4 rounded-md">{answer.response}</p>
            </div>
        </>
    );
}

export default HeroQuestions;
