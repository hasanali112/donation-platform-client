import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type TData = {
  totalUser: number;
  totalCampain: number;
  totalBlog: number;
};

const TotalPost = ({ data: PostData }: { data: TData }) => {
  const data = [
    {
      name: "Sun",
      campain: PostData.totalCampain,
      amt: 2400,
    },
    {
      name: "Mon",
      campain: PostData.totalCampain,
      amt: 2210,
    },
    {
      name: "Tus",
      campain: 10,
      amt: 2290,
    },
    {
      name: "Wed",
      campain: 15,
      amt: 2000,
    },
    {
      name: "Thu",
      campain: 20,
      amt: 2181,
    },
    {
      name: "Fri",
      campain: 28,
      amt: 2500,
    },
    {
      name: "Sat",
      campain: 40,
      amt: 2100,
    },
  ];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="campain"
            stroke="#8884d8"
            fill="#0d99ff"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalPost;
