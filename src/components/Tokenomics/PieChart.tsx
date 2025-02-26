"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart({
  data,
}: {
  data: {
    tooltip: string;
    value: number;
  }[];
}) {
  return (
    <Doughnut
      data={{
        datasets: [
          {
            label: "# of Sales",
            data: data.map((d) => d.value),
            backgroundColor: ["#F8DEFF", "#EBA6FF", "#7E528B", "#F8DEFF"],
            borderColor: ["#F8DEFF", "#EBA6FF", "#7E528B", "#F8DEFF"],
            borderWidth: 1,
          },
        ],
      }}
      options={{
        cutout: "70%",
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                // Return the custom tooltip text for this data point
                return data[context.dataIndex].tooltip;
              },
            },
          },
        },
      }}
    />
  );
}
