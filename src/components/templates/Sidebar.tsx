// Importing various icons from the lucide-react library for use in the sidebar.
import {
  ChevronUp, MessagesSquareIcon
} from "lucide-react";

// Importing avatar components for user profile display.
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Importing sidebar components for building the sidebar structure.
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Importing dropdown menu components for additional user options.
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

// Importing modal components for tools and settings.
import ToolsModal from "../abstractions/ModalTools";
import SettingsModal from "../abstractions/ModalSettings";

// Importing logo assets for branding.
import AndreIA_Logo from "@/assets/AndreIA-Logo-Component";

// Importing Link component for navigation.
import { Link } from "react-router";

// Main function to render the application sidebar.
export default function AppSidebar() {
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader className="motion-preset-slide-right-lg relative flex items-start flex-row justify-between px-4">
        {/* Logo component for branding */}
        <AndreIA_Logo />
      </SidebarHeader>
      <SidebarContent
        style={{ scrollbarColor: "#ffffff22 black" }}
        className="motion-preset-slide-right-lg"
      >
        <SidebarGroup>
          {/* Previous Chats */}
          <SidebarGroupLabel>Histórico de Mensagens</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to={"/chat/13"} className="group/item">
                    <MessagesSquareIcon className="group-hover/item:motion-preset-pulse motion-loop-once motion-duration-500" />
                    <span>Conversa 1</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton asChild>
                  <Link to={"/chat/14"} className="group/item">
                    <MessagesSquareIcon className="group-hover/item:motion-preset-pulse motion-loop-once motion-duration-500" />
                    <span>Conversa 2</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton asChild>
                  <Link to={"/chat/15"} className="group/item">
                    <MessagesSquareIcon className="group-hover/item:motion-preset-pulse motion-loop-once motion-duration-500" />
                    <span>Conversa 3</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu className="motion-preset-slide-right-lg">
          <SidebarMenuItem>

            {/* Button to open tools modal */}
            <SidebarMenuButton className="h-12 flex grow">
              <ToolsModal />
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Button to open settings modal */}
          <SidebarMenuItem>
            <SidebarMenuButton className="h-12 flex grow">
              <SettingsModal />
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Dropdown menu for user account options */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton className="h-12">
                <Avatar className="size-8">
                  <AvatarImage src="https://github.com/andreb308.png" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <span className="text-center w-full">Nome de Usuário</span>
                <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              className="w-[--radix-popper-anchor-width]"
            >
              <DropdownMenuItem>
                <span>Opção 1</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Opção 2</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Opção 3</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
