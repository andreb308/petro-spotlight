import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { HomeInput } from "../components/templates/HomeInput";
import HomeCarousel from "@/components/templates/HomeCarousel";

function Welcome() {
  // const { currentConversation, setCurrentConversation } = useMessagesContext();
  // const isHomePage = !useParams().chatId;

  return (
    <>
      <WavyBackground backgroundFill="#29273e" />
      <div className="relative h-dvh w-dvw flex items-center justify-center px-32 motion-preset-slide-down-sm motion-delay-1000 min-w-[70%] overflow-x-hidden sm:max-lg:px-2 max-sm:px-0">
        <div className="motion-preset-fade-lg size-full flex items-center justify-center flex-col max-sm:px-4 sm:max-lg:px-16 sm:max-lg:overflow-hidden">
          <h1 className="w-full text-left font-bold text-foreground text-3xl">
            [WIP] Olá, Usuário!
          </h1>
          <h2 className="w-full text-left font-bold text-foreground text-xl">
            O que a Andre.IA pode fazer por você?
          </h2>
          <HomeInput />
          <HomeCarousel />
        </div>
      </div>
    </>
  );
}

export default Welcome;
