import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AllBlogsTable = () => {
  return (
    <Table className="bg-[#14274e]  p-4 rounded-md w-full ">
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
