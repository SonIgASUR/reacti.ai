import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useAuthContext } from "../context/authContext";

ChartJS.register(ArcElement, Tooltip, Legend);


export const options = {
  responsive: true,
};

const TotalUsageChart = () => {
  const {userData,limit,count} = useAuthContext()

  
const data ={
    labels: [
      `${count} credits Used`,
      `${limit - count} credits left`,
    ],
    datasets: [
      {
        data: [count, limit - count],
        backgroundColor: [
          "rgba(200, 200, 200, 0.3",
          "rgb(114, 20, 255, 0.3)",
        ],
        borderColor: [
          "rgba(200, 200, 200, 0.4)",
          "rgb(114, 20, 255, 0.4)",
        ],
      },
    ],
  }
  return <Doughnut
  data={data}
  options={{
    cutout: 100,
  }}
/>;
};

export default TotalUsageChart;
