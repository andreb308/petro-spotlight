import { MailIcon, PlusCircleIcon, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center">
            <Select defaultValue="FKR5">
              <SelectTrigger
                className="h-8 w-full"
                id={`${Date.now()}-reviewer`}
              >
                <SelectValue placeholder="Selecionar Usuário" />
              </SelectTrigger>
              <SelectContent align="end">
                <SelectItem value="FKR5">
                  André Flávio das Chagas Barros - Estudante
                </SelectItem>
                <SelectItem value="FKNP">
                  Guilherme De Almeida Martins - Estudante
                </SelectItem>
              </SelectContent>
            </Select>
          </SidebarMenuItem>
          <SidebarMenuItem className="flex items-center flex-col">
            <Avatar className="size-3/4 my-4 flex items-center justify-center shrink">
              <AvatarImage src="https://github.com/andreb308.png" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <h1 className="text-xl text-foreground text-center">
              André Flávio das Chagas Barros - Estudante
            </h1>
            <h2 className="text-center text-lg text-muted-foreground">FKR5</h2>
          </SidebarMenuItem>
        </SidebarMenu>
        {/* <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu> */}
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
