"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Sales",
      data: [73, 9, 9, 9],
      backgroundColor: ["#F8DEFF", "#EBA6FF", "#7E528B", "#F8DEFF"],
      borderColor: ["#F8DEFF", "#EBA6FF", "#7E528B", "#F8DEFF"],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return <Doughnut data={data} options={{ cutout: "70%" }} />;
}
