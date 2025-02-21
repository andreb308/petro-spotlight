import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  ChevronUp,
  SettingsIcon,
  Bug,
  PlayCircleIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ToolsModal from "../../components/abstractions/ModalTools";
import SettingsModal from "../../components/abstractions/ModalSettings";
import LogoURL from "@/assets/AndreIA-Logo-TEST.svg";
import AndreIA_Logo from "@/assets/AndreIA-Logo-Component";
import { Link } from "react-router";

//

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: PlayCircleIcon,
  },
];

export default function AppSidebar() {
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader className="motion-preset-slide-right-lg relative flex items-start flex-row justify-between px-4">
        {/* <img src={LogoURL} alt="Andre.IA" className="z-0" /> */}
        <AndreIA_Logo/>
      </SidebarHeader>
      <SidebarContent style={{ scrollbarColor: "#ffffff22 black" }} className="motion-preset-slide-right-lg">
        <SidebarGroup>
          <SidebarGroupLabel>Seção 1</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, i) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={"/chat/13"} className="group/item">
                      <item.icon className="group-hover/item:motion-preset-pulse motion-loop-once motion-duration-500" />
                      <span>{`Link ${i + 1}`}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          {/* <SidebarGroupLabel></SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <p className="mt-8 px-2 italic whitespace-pre-line text-muted-foreground">
                  {`When she turned to go home
                She heard the echoes of new words
                "May your heart remain breakable
                But never by the same hand twice"
                And even louder
                "Without your past
                You could never have arrived
                So wondrously and brutally
                By design or some violent, exquisite happenstance:
                Here"
                
                And in the death of her reputation
                She felt truly alive.
                — Taylor Swift 🌟`}
                </p>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu className="motion-preset-slide-right-lg">
          <SidebarMenuItem>
            <SidebarMenuButton className="h-12 flex grow">
              <ToolsModal />
            </SidebarMenuButton>
            <SidebarMenuButton className="h-12 flex grow">
              <SettingsModal />
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="h-12">
                  <Avatar className="size-8">
                    <AvatarImage src="https://placehold.co/32" />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  Nome de Usuário
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
