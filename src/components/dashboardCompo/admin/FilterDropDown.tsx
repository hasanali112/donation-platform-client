import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type TProps = {
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;
};

const FilterDropDown = ({ role, setRole }: TProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-blue-600">Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 px-4">
        <DropdownMenuLabel>Filter By role</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={role} onValueChange={setRole}>
          <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="admin">Admin</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ambassadar">
            Amabassadar
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="user">User</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterDropDown;
