import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetUserQuery } from "@/redux/api/userApi";

type TUser = {
  _id: string;
  name: string;
  photo: string;
  userName: string;
  email: string;
  role: string;
};

const UserManageTable = () => {
  const { data, isLoading } = useGetUserQuery(undefined);

  if (isLoading) {
    return <p>Loading..........</p>;
  }

  return (
    <Table className="bg-gray-50 p-4 rounded-md">
      <TableCaption>Rebuil Rising User List</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Serial No</TableHead>
          <TableHead>User Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Edit Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((user: TUser) => (
          <TableRow key={user._id}>
            <TableCell className="font-medium">{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserManageTable;
