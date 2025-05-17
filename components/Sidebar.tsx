import {
  Activity,
  Bell,
  CreditCard,
  FileClock,
  House,
  Inbox,
  Settings,
  UserRound,
} from "lucide-react";
import { Command, CommandGroup, CommandItem, CommandList } from "./ui/command";

export default function Sidebar() {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          text: "Home",
          icon: <House />,
        },
      ],
    },
    {
      group: "Prescription Management",
      items: [
        {
          link: "/",
          text: "Prescription history",
          icon: <FileClock />,
        },
        {
          link: "/",
          text: "Standard Treatment Program",
          icon: <Activity />,
        },
      ],
    },
    {
      group: "My Page",
      icon: <UserRound />,
      items: [
        {
          link: "/",
          text: "Edit Personal information",
          icon: <Settings />,
        },
      ],
    },
  ];

  return (
    <div>
      <div className="fixed top-0 left-0 pt-20 flex flex-col gap-4 w-[250px] min-w-[250px] border-r border-gray-300 h-screen">
        <div className="grow overflow-y-auto">
          <Command
            className="border-none shadow-none"
            style={{ overflow: "visible" }}
          >
            <CommandList style={{ overflow: "visible" }}>
              {menuList.map((menuItem: any, key: number) => {
                return (
                  <CommandGroup key={key} heading={menuItem.group}>
                    {menuItem.items.map((option: any, optionKey: number) => (
                      <CommandItem
                        key={optionKey}
                        className="flex gap-2 cursor-pointer"
                      >
                        {option.icon}
                        {option.text}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                );
              })}
            </CommandList>
          </Command>
        </div>
      </div>
    </div>
  );
}
