import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpadateDonationPostMutation } from "@/redux/api/baseApi";
import { Inputs } from "@/type/type";
import { DialogTitle } from "@radix-ui/react-dialog";
import { SquarePen } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";

type TpropId = {
  _id: string;
};

const TableModal = ({ _id }: TpropId) => {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const [upadateDonationPost, { isLoading, isError }] =
    useUpadateDonationPostMutation();

  if (isLoading) {
    return <p>Loading...........</p>;
  }

  if (isError) {
    console.log(isError);
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const option = {
      id: _id,
      donationData: data,
    };
    console.log(option);
    upadateDonationPost(option);

    reset();
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-blue-600 text-white p-1 rounded-lg">
            <SquarePen />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Post</DialogTitle>
            <DialogDescription>
              Make changes to your post here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  className="col-span-3"
                  {...register("title")}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image" className="text-right">
                  Image
                </Label>
                <Input
                  id="image"
                  className="col-span-3"
                  {...register("image")}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <Input
                  id="category"
                  className="col-span-3"
                  {...register("category")}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="amount" className="text-right">
                  Amount
                </Label>
                <Input
                  id="amount"
                  className="col-span-3"
                  {...register("amount")}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  className="col-span-3"
                  {...register("description")}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <DialogClose asChild>
                <Button type="submit">Save changes</Button>
              </DialogClose>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TableModal;
