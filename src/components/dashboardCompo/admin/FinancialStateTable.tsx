import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const FinancialStateTable = () => {
  return (
    <Table className="bg-gray-50 p-4 rounded-md">
      <TableCaption>Rebuil Rising Total Fund</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Donar Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="text-right">Amount</TableHead>
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

export default FinancialStateTable;
