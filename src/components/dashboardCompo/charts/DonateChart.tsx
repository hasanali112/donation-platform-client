import { useGetCalculationAmountQuery } from "@/redux/api/donationApi";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

type TPayment = {
  _id: string;
  totalAmount: number;
  month: string;
};

const monthOrder = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

type TShortData = {
  name: string;
  amount: number;
  amt: number;
};

const DonateChart = () => {
  const { data: paymentCalculation } = useGetCalculationAmountQuery(undefined);

  const paymentData = paymentCalculation
    ?.map((payment: TPayment) => ({
      name: payment._id,
      amount: payment.totalAmount,
      amt: payment.totalAmount,
    }))
    .sort(
      (a: TShortData, b: TShortData) =>
        monthOrder.indexOf(a.name) - monthOrder.indexOf(b.name)
    );

  return (
    <div style={{ width: "100%", height: 320 }} className="text-white">
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={paymentData}
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
            dataKey="amount"
            fill="#0d99ff"
            activeBar={<Rectangle fill="#57b5e8" />}
          >
            <LabelList dataKey="amount" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonateChart;
