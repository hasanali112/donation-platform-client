import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const UserManageTable = () => {
  return (
    <Table className="bg-gray-50 p-4 rounded-md">
      <TableCaption>Rebuil Rising User List</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Serial No</TableHead>
          <TableHead>User Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Edit Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium"></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell className="text-right"></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default UserManageTable;
