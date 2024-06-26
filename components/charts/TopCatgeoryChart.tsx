"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  ChartData,
  ChartOptions,
} from "chart.js";
import { getOrderCategoryCount } from "@/libs/actions/order.actions";
import { useEffect, useState } from "react";
import Loader from "../ui/Loader";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const TopCatgeoryChart = () => {
  const [category, setCategory] = useState<string[]>();
  const [categoryCount, setCategoryCount] = useState<number[]>();
  const [showLoader, setShowLoader] = useState(false);
  const [isScreenWidth, setIsScreenWidth] = useState(0);

  useEffect(() => {
    const getChartData = async () => {
      setShowLoader(true);
      const retrivedChartData = await getOrderCategoryCount();
      setCategory(retrivedChartData ? retrivedChartData.category : []);
      setCategoryCount(
        retrivedChartData ? retrivedChartData.categoryCount : []
      );
      setShowLoader(false);
    };
    getChartData();
    setIsScreenWidth(window.innerWidth);
  }, []);

  const data: ChartData<"bar"> = {
    labels: category,
    datasets: [
      {
        label: "Revenue",
        data: categoryCount!,
        backgroundColor: "#272829",
        borderRadius: 5,
        barPercentage: 0.8,
        // barThickness: 22,
        minBarLength: 7,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    interaction: {
      axis: "y",
      intersect: false,
      mode: "index",
    },

    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },

    responsive: true,

    maintainAspectRatio: true,

    aspectRatio: isScreenWidth <= 767 ? 1.5 : 2,

    indexAxis: "y",

    scales: {
      x: {
        border: {
          display: false,
        },

        grid: {
          display: false,
          tickLength: 17,
          tickColor: "transparent",
        },

        ticks: {
          font: {
            family: "'Poppins', sans-serif",
          },
        },
      },

      y: {
        border: {
          display: false,
          dash: [8, 4],
        },

        ticks: {
          font: {
            family: "'Poppins', sans-serif",
          },
        },

        grid: {
          display: true,
          tickLength: 17,
          tickColor: "transparent",
        },
      },
    },
  };

  return (
    <section className="w-full border-[1px] border-gray-300 p-4 overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <span>
          <h2 className="font-medium text-xl">Top selling categories</h2>
        </span>
      </div>
      {!showLoader ? (
        <Bar data={data} options={options}></Bar>
      ) : (
        <section className="h-[70%] flex items-center justify-center">
          <Loader className="loader" />
        </section>
      )}
    </section>
  );
};

export default TopCatgeoryChart;
