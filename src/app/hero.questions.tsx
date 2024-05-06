/* eslint-disable react/no-children-prop */
"use client";
import { Button, Typography, Input } from "@material-tailwind/react";

function HeroQuestions() {
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
                    No tienes idea de como comenzar en programacion?
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
                    Puedes pedir una ruta de aprendizaje en base a tus intereses
                </Typography>
                <div className="grid place-items-start justify-center gap-2">
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
                        <div className="w-80">
                            {/* @ts-ignore */}
                            <Input label="Comienza preguntandome algo..." />
                        </div>

                        {/* @ts-ignore */}
                        <Button
                            // @ts-ignore
                            size="md"
                            className="lg:w-max shrink-0"
                            fullWidth
                            color="gray"
                            children={undefined}
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                        >
                            Comenzar
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default HeroQuestions;
