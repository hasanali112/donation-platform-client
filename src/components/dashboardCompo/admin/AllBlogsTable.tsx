import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllNewsQuery } from "@/redux/api/newsApi";

export type TNews = {
  _id: string;
  title: string;
  image: string;
  category: string;
  header: string;
  body: string;
  conclution: string;
};

const AllBlogsTable = () => {
  const { data } = useGetAllNewsQuery(undefined);
  return (
    <Table className="bg-[#14274e]  p-4 rounded-md w-full ">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Blogs No</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Detail</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item: TNews) => (
          <TableRow key={item._id}>
            <TableCell className="font-medium">{item?._id}</TableCell>
            <TableCell>{item?.title}</TableCell>
            <TableCell>{item?.header.slice(0, 30)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllBlogsTable;
