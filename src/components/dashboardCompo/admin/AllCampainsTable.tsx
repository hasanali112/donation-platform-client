import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDelateDonationPostMutation,
  useGetDonationPostQuery,
} from "@/redux/api/baseApi";
import { TProps } from "@/type/type";
import { Trash2 } from "lucide-react";
import TableModal from "../table/TableModal";

const AllCampainsTable = () => {
  const { data, isLoading, isError } = useGetDonationPostQuery(undefined);
  const [delateDonationPost] = useDelateDonationPostMutation();
  if (isLoading) {
    return <p>Loading........</p>;
  }

  if (isError) {
    console.log(isError);
  }

  const handleDelete = (id: string) => {
    delateDonationPost(id);
    console.log(id);
  };

  return (
    <Table className="bg-[#14274e]  p-4 rounded-md w-full ">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Serial No</TableHead>
          <TableHead>Campaing Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Edit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item: TProps) => (
          <TableRow key={item._id}>
            <TableCell className="font-medium">{item._id}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>${item.amount}</TableCell>
            <TableCell className="flex items-center  gap-2 ">
              <div>
                <TableModal _id={item._id} />
              </div>
              <button onClick={() => handleDelete(item._id)}>
                <div className="bg-red-500 text-white p-1 rounded-lg">
                  <Trash2 />
                </div>
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllCampainsTable;
