/* eslint-disable react/jsx-key */
import LineChart from "../components/Charts/barChart";
import BubbleChart from "../components/Charts/bubbleChart";
import ChartDemo from "../components/Charts/lineChart";
import PieChart from "../components/Charts/pieChart";
import Table from "../components/Table";

export const MockSlide = [
  {
    id: 1,
    item: [<ChartDemo />],
    notes: "Comments on Slide",
  },
  {
    id: 2,
    item: [<LineChart />],
    notes: "Comments on Slide2",
  },
  {
    id: 3,
    item: [<PieChart />],
    notes: "Comments on Slide3",
  },
  {
    id: 4,
    item: [<BubbleChart />],
    notes: "Comments on Slide3",
  },
];
