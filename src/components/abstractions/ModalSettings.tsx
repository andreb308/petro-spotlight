import React from "react";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SettingsIcon, BookUserIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import SettingsOption from "./SettingsOption";
import { Textarea } from "../ui/textarea";

const SettingsModal = () => {
  return (
    <Dialog>
      {/* <DialogTrigger asChild>
        <SettingsIcon className="hover:motion-rotate-in-[180deg] hover:motion-ease-spring-bouncier size-5 cursor-pointer" />
      </DialogTrigger> */}
      <DialogTrigger className="group/settings h-12 size-full text-white hover:text-black">
        <div className=" flex justify-center items-center text-sm group/modal-btn whitespace-pre-wrap">
          <SettingsIcon className="group-hover/settings:motion-rotate-in-[180deg] hover:motion-ease-spring-bouncier mr-2 cursor-pointer" />
          <span className="w-3/4  text-center">Configurações</span>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[40%] ">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Configurações
          </DialogTitle>
        </DialogHeader>
        <SettingsOption
          label="Modo Avançado"
          desc='Acompanhar o processo de "pensamento" do modelo.'
          sublabel="(Experimental)"
        />
        <SettingsOption
          label="Modo Avançado"
          desc='Acompanhar o processo de "pensamento" do modelo.'
          sublabel="(Experimental)"
        />
        <SettingsOption
          label="Modo Avançado"
          desc='Acompanhar o processo de "pensamento" do modelo.'
          sublabel="(Experimental)"
        />
        <div className="relative flex flex-col w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5">
          <Label
            htmlFor="message-2"
            className="w-full flex flex-row gap-2 items-center justify-start mb-2"
          >
            <BookUserIcon />
            <span>Instruções Personalizadas</span>
          </Label>
          <Textarea
            placeholder="Ex: Responda apenas utilizando palavras que começam com P."
            id="message-2"
          />
          <p className="text-sm text-muted-foreground">Comandos específicos.</p>
        </div>
        <DialogFooter>
          <EnhancedButton type="submit">Save changes</EnhancedButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsModal;
