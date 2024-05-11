import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DonateChart = () => {
  const data = [
    {
      name: "Jan",
      high: 4000,
      low: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      high: 3000,
      low: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      low: 2000,
      high: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      low: 2780,
      high: 3908,
      amt: 2000,
    },
    {
      name: "May",
      low: 1890,
      high: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      low: 2390,
      high: 3800,
      amt: 2500,
    },
    {
      name: "July",
      low: 3490,
      high: 4300,
      amt: 2100,
    },
  ];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />

          <Legend />
          <Bar
            dataKey="low"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="high"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonateChart;
