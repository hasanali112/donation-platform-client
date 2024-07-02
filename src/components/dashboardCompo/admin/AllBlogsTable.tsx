import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AllBlogsTable = () => {
  return (
    <Table className="bg-gray-50 p-4 rounded-md">
      <TableCaption>Rebuil Rising Blog List</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Blogs No</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Detail</TableHead>
          <TableHead className="text-right">Edit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium"></TableCell>
          <TableCell></TableCell>
          <TableCell className="text-right"></TableCell>
          <TableCell className="text-right"></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default AllBlogsTable;
