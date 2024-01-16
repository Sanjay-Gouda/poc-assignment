/* eslint-disable react/jsx-key */
import LineChart from "../components/Charts/barChart";
import ChartDemo from "../components/Charts/lineChart";
import PieChart from "../components/Charts/pieChart";
import Table from "../components/Table";

export const MockSlide = [
  {
    id: 1,
    item: [<ChartDemo />, <LineChart />],
    notes: "Comments on Slide",
  },
  {
    id: 2,
    item: [<LineChart />, <ChartDemo />],
    notes: "Comments on Slide2",
  },
  {
    id: 3,
    item: [<PieChart />, <Table />],
    notes: "Comments on Slide3",
  },
  {
    id: 4,
    item: [],
    notes: "",
  },
];
