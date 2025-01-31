import React from "react";
import { motion } from "framer-motion";
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
import { SettingsIcon, SquareMousePointer, Bug, BugIcon, BookUserIcon } from "lucide-react";
import { Switch } from "../ui/switch";
import { Label } from "@/components/ui/label";
import SettingsOption from "./SettingsOption";
import { Textarea } from "../ui/textarea";

const SettingsModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SettingsIcon className="hover:motion-rotate-in-[180deg] hover:motion-ease-spring-bouncier size-5 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="w-1/3 ">
        <DialogHeader>
          <DialogTitle>Configurações</DialogTitle>
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
          <Label htmlFor="message-2" className="w-full flex flex-row gap-2 items-center justify-start mb-2">
            <BookUserIcon />
            <span>Instruções Personalizadas</span>
          </Label>
          <Textarea placeholder="Ex: Responda apenas utilizando palavras que começam com P." id="message-2" />
          <p className="text-sm text-muted-foreground">
            Comandos específicos.
          </p>
        </div>
        <DialogFooter>
          <EnhancedButton type="submit">Save changes</EnhancedButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsModal;
