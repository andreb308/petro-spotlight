import React from "react";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SettingsIcon, BookUserIcon, CpuIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import SettingsOption from "./SettingSwitchOption";
import { Textarea } from "../ui/textarea";

const SettingsModal = () => {
  return (
    <Dialog>
      {/* DialogTrigger is used to open the dialog when the settings icon is clicked. */}
      <DialogTrigger  asChild className="group/settings h-12 size-full text-foreground hover:text-black">
        <div className="flex justify-center items-center text-sm group/modal-btn whitespace-pre-wrap">
          {/* Settings icon with animation effects on hover. */}
          <SettingsIcon className="group-hover/settings:motion-rotate-in-[180deg] hover:motion-ease-spring-bouncier mr-2 cursor-pointer" />
          <span className="w-3/4 text-center">Configurações</span>
        </div>
      </DialogTrigger>

      {/* DialogContent defines the content of the modal, including header, settings options, and footer. */}
      <DialogContent className="w-[40%] max-lg:w-[95%] px-8 max-[900px]:h-[85%]  overflow-y-auto" aria-describedby="Configurações de usuário">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Configurações
          </DialogTitle>
        </DialogHeader>

        {/* SettingsOption components to display various settings available to the user. */}
        <SettingsOption
          label="Modo Avançado"
          desc='Acompanhar o processo de "pensamento" do modelo.'
          sublabel="(Experimental)"
        />

        {/* Section for personalized instructions with a textarea for user input. */}
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
        <div className="relative flex flex-col w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5">
          <Label
            htmlFor="memory"
            className="w-full flex flex-row gap-2 items-center justify-start mb-2"
          >
            <CpuIcon />
            <span>Memória</span>
          </Label>
          <Textarea
            disabled
            id="memory"
            placeholder="Usuário tende a preferir respostas curtas e fortemente baseadas em dados."
          />
          <p className="text-sm text-muted-foreground">Comandos específicos.</p>
        </div>

        {/* Footer of the dialog with a button to save changes. */}
        <DialogFooter>
          <EnhancedButton type="submit">Save changes</EnhancedButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsModal;
