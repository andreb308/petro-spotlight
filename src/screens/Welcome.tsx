import { WavyBackground } from "@/components/ui/wavy-background";
import { HomeInput } from "../components/templates/HomeInput";
import HomeCarousel from "@/components/templates/HomeCarousel";
import { Sidebar, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/templates/Sidebar";
import { useNavigate, useSearchParams } from "react-router";
import { useEffect, useState } from "react";

function Welcome() {
  const navigate = useNavigate();

  console.log(prompt);

  useEffect(() => {
    const prompt = localStorage.getItem("prompt") || "";
    localStorage.removeItem("prompt");
    if (!!prompt.length) {
      navigate(`/chat/_?prompt=${prompt}`);
    }
  }, [prompt]);

  return (
    <>
      <AppSidebar />
      <SidebarTrigger className="motion-preset-slide-down-sm motion-delay-1000 text-foreground size-10 absolute top-2 left-2 z-[250]" />
      <WavyBackground
        blur={5}
        backgroundFill="#29273e"
        colors={["#6672c9", "#63adff", "#61aa71", "#bfa5b8"]}
      />
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
