import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TUser } from "@/pages/Dashboard/admin/UserManagement";

const UserManageTable = ({ data, role }: { data: TUser[]; role: string }) => {
  return (
    <Table className="bg-[#14274e]  p-4 rounded-md w-full ">
      <TableHeader>
        <TableRow>
          {data?.length == 0 ? (
            <TableHead className="w-full text-red-600 text-center">
              Oops This {role} is not found!
            </TableHead>
          ) : (
            <>
              <TableHead className="w-[100px]">Serial No</TableHead>
              <TableHead>User Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Edit Role</TableHead>
            </>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.length == 0 ? (
          <h1 className="text-center p-5">There is no {role} role exist </h1>
        ) : (
          data?.map((user: TUser) => (
            <TableRow key={user._id}>
              <TableCell className="font-medium">{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>edit</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default UserManageTable;
