/* eslint-disable react-hooks/rules-of-hooks */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { usePaymentByUserEmailQuery } from "@/redux/api/donationApi";
import { TPayment } from "../admin/FinancialStateTable";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProviders";

const DonationReceptTable = () => {
  const context = useContext(AuthContext);

  if (!context) {
    return <p>Null</p>;
  }

  const { user } = context;
  const { data, isLoading } = usePaymentByUserEmailQuery(user?.email);

  if (isLoading) {
    return <p>Loading............</p>;
  }

  return (
    <Table className="bg-[#14274e]  p-4 rounded-md w-full ">
      <TableHeader>
        <TableRow>
          {data?.length == 0 ? (
            <TableHead className="w-full text-red-600 text-center">
              Oops you are not donate yet!
            </TableHead>
          ) : (
            <>
              <TableHead className="w-[100px]">Donar Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Tranction Id</TableHead>
              <TableHead>Amount</TableHead>
            </>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.length == 0 ? (
          <h1 className="text-center p-5">
            OOPS! Not Found. Please donate first{" "}
          </h1>
        ) : (
          data?.map((payment: TPayment, index: number) => (
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
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default DonationReceptTable;
