import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetPaymentQuery } from "@/redux/api/donationApi";

type TPayment = {
  _id: string;
  name: string;
  email: string;
  amount: string;
  postCode: string;
  country: string;
  phoneNumber: string;
};

const FinancialStateTable = () => {
  const { data, isLoading } = useGetPaymentQuery(undefined);

  if (isLoading) {
    return <p>Loading............</p>;
  }
  return (
    <Table className="bg-[#14274e]  p-4 rounded-md w-full ">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Donar Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Country</TableHead>
          <TableHead>Tranction Id</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((payment: TPayment, index: number) => (
          <TableRow key={payment._id}>
            <TableCell className="font-medium">
              {index == 0 ? 1 : index + 1}
            </TableCell>
            <TableCell>{payment.name}</TableCell>
            <TableCell>{payment.email}</TableCell>
            <TableCell>{payment.country}</TableCell>
            <TableCell>{payment._id}</TableCell>
            <TableCell>{payment.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FinancialStateTable;
