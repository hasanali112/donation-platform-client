import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type TProps = {
  title: string;
  totalUser?: number;
  totalCampain?: number;
  totalBlog?: number;
};

const DashboardHome = ({
  title,
  totalUser,
  totalCampain,
  totalBlog,
}: TProps) => {
  return (
    <Card className="w-[350px] bg-white text-gray-400 bg-opacity-10 backdrop-blur-sm backdrop-filter">
      <CardHeader>
        <CardTitle className="text-center text-3xl">{title}</CardTitle>
        <CardDescription className="text-3xl text-center font-bold">
          {totalUser || totalCampain || totalBlog}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={totalUser || totalCampain || totalBlog} />
      </CardContent>
    </Card>
  );
};

export default DashboardHome;
