import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BellRing } from "lucide-react";
import { useState } from "react";
const Notification = () => {
  const [position, setPosition] = useState("bottom");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative cursor-pointer">
          <BellRing />
          <div className="absolute -top-4 -right-3 bg-[#dc3545] w-6 h-6 rounded-full ">
            <h3 className="ml-1">4+</h3>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 bg-[#0d1e3f] border border-[#293856] text-white -translate-x-[80px] rounded-sm">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">
            <div className="flex ml-2 gap-3">
              <img
                src="https://images.unsplash.com/photo-1555421689-3f034debb7a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-12 h-12 rounded-full mt-2"
              />
              <div>
                <h1 className="text-gray-300 text-lg">Archer Cowie</h1>
                <p className="text-sm text-gray-400">
                  Open the message and read
                </p>
                <p className="text-sm text-gray-400">2 hours ago</p>
              </div>
            </div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">
            <div className="flex ml-2 gap-3">
              <img
                src="https://images.unsplash.com/photo-1555421689-3f034debb7a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-12 h-12 rounded-full mt-2"
              />
              <div>
                <h1 className="text-gray-300 text-lg">Archer Cowie</h1>
                <p className="text-sm text-gray-400">
                  Open the message and read
                </p>
                <p className="text-sm text-gray-400">2 hours ago</p>
              </div>
            </div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">
            <div className="flex ml-2 gap-3">
              <img
                src="https://images.unsplash.com/photo-1555421689-3f034debb7a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-12 h-12 rounded-full mt-2"
              />
              <div>
                <h1 className="text-gray-300 text-lg">Archer Cowie</h1>
                <p className="text-sm text-gray-400">
                  Open the message and read
                </p>
                <p className="text-sm text-gray-400">2 hours ago</p>
              </div>
            </div>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notification;
