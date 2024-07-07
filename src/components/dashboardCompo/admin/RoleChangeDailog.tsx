import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRoleChangeMutation } from "@/redux/api/userApi";
import { useEffect, useState } from "react";

const RoleChangeDialog = ({ id }: { id: string }) => {
  const [role, setRole] = useState("");
  const [roleChange] = useRoleChangeMutation();

  useEffect(() => {
    if (role) {
      const options = {
        id,
        role,
      };
      roleChange(options);
    }
  }, [role, id, roleChange]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border border-blue-600 text-blue-600 bg-transparent"
        >
          Change Role
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[530px] bg-[#14274e] text-white border-0">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Click and change role</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 gap-2 py-4">
          <DialogClose asChild>
            <Button onClick={() => setRole("admin")} className="bg-blue-600">
              Admin
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              onClick={() => setRole("ambassador")}
              className="bg-blue-600"
            >
              Ambassador
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              onClick={() => setRole("volunteer")}
              className="bg-blue-600"
            >
              Volunteer
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={() => setRole("user")} className="bg-blue-600">
              User
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RoleChangeDialog;
