import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useAuthContext } from "../context/authContext";
import { isSameDay } from "date-fns";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
};

function Last7Days() {
  const lastWeekData = [];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  for (var i = 6; i >= 0; i--) {
    if (i == 0) {
      lastWeekData.push({ day: "Today", date: new Date() });
      continue;
    }
    var d = new Date();
    d.setDate(d.getDate() - i);
    lastWeekData.push({ day: days[d.getDay()], date: d });
  }
  return lastWeekData;
}

const WeeklyUsageChart = () => {
  const { userData } = useAuthContext();
  const requestsData = userData?.requestsData || [];
  const lastWeekData = Last7Days();
  const labels = lastWeekData.map((d) => d.date.getDate());
  const temp = lastWeekData.map((d) => {
    const dateOfDay = d.date
    let count = 0;
    requestsData.forEach((requestDate) => {
      if (isSameDay(new Date(requestDate),dateOfDay)) {
        count++;
      }
    });
    return count;
  });
  const data = {
    labels,
    datasets: [
      {
        label: "Requests this week",
        data: temp,
        backgroundColor: "rgb(114, 20, 255,0.3)",
        borderColor: "rgb(114, 20, 255)",
        borderRadius: 4,
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default WeeklyUsageChart;
