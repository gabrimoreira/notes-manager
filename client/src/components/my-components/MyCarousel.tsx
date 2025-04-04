import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { FaGithub } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Rabbit } from "lucide-react";
import { Rocket } from "lucide-react";
import { ClipboardList } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function MyCarousel() {
  return (
    <div className="flex flex-col gap-2 ">
      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        orientation="vertical"
        className="w-full max-w-[500px]"
      >
        <CarouselContent className="-mt-1 h-[300px]">
          <CarouselItem className="pt-1 md:basis-1/2 h-full ">
            <div className="p-1 h-full">
              <Card className="bg-gray-500 border-0 ">
                <CardContent className="flex items-center justify-center p-6 ">
                  <span className="text-5xl font-medium">
                    Organize suas notas com facilidade!
                  </span>
                  <Rabbit size={128} fill="#ff8904" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card className="bg-gray-500 border-0 h-full">
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-5xl font-medium">
                    Fácil, rápido e eficiente para você!
                  </span>
                  <Rocket size={128} fill="#ff8904" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="pt-1 md:basis-1/2 ">
            <div className="p-1">
              <Card className="bg-gray-500 border-0 h-full">
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-5xl font-medium">
                    Controle suas tarefas sem estresse!
                  </span>
                  <ClipboardList size={128} fill="#ff8904" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <Link to={"https://github.com/gabrimoreira/notes-manager"} target="_blank">
        <div
          role="button"
          className="flex bg-gray-950 px-4 py-2 rounded-lg items-center justify-around w-[400px] cursor-pointer 
    hover:outline-2 hover:outline-orange-500 hover:bg-gray-900  transition-all duration-100"
        >
          <span className="text-gray-200 text-xl hover:text-white">
            Conheça o Repositório do Projeto
          </span>
          <FaGithub size={24} fill="#ff8904" />
        </div>
      </Link>
    </div>
  );
}

export default MyCarousel;
