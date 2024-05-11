import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetDonationPostQuery } from "@/redux/api/baseApi";
import { TProps } from "@/type/type";
import { PencilLine, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import TableModal from "./TableModal";

const TableSection = () => {
  const { data, isLoading, isError } = useGetDonationPostQuery(undefined);

  if (isLoading) {
    return <p>Loading........</p>;
  }

  if (isError) {
    console.log(isError);
  }

  return (
    <div>
      <div className="p-2 lg:w-[90%] mx-auto border bg-white rounded-lg shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-right">Action Button</TableHead>
              <TableHead className="text-right">Create Post</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item: TProps) => (
              <TableRow>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>${item.amount}</TableCell>
                <TableCell className="text-right lg:space-x-4 flex justify-end items-center">
                  <TableModal _id={item._id} />
                  <button>
                    <Trash2 />
                  </button>
                </TableCell>
                <TableCell className="text-right space-x-4">
                  <Link to="/dashboard/create-donation">
                    <button>
                      <PencilLine />
                    </button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TableSection;
