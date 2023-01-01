import React from "react";
import ChartBox from "./ChartBox";

function DivergenceChart(props) {
  const allCharts = props.charts.data.map(function (obj) {
    return obj.chartPair;
  });

  function RemoveFromChart(pair){
    console.log(pair.el)
    fetch("https://chart-api-fb.onrender.com/removeFromDivergence", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        chartPair: pair.el,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "deleted from divergence");
        if (data.data == "deleted from divergence") {
          alert(pair.el + " deleted from divergence");
        } else alert("Mr. stark i dont feel so good..!");
      });

      props.fetchdata();
  }

  return (
    <>
      <ChartBox
        currencyName={props.currencyName}
        AllCharts={allCharts}
        chartData={props.chartData}
        handleChartDataChange={props.handleChartDataChange}
        handleTimeFrameChnage={props.handleTimeFrameChnage}
        RemoveFromChart = {RemoveFromChart}
      />
    </>
  );
}

export default DivergenceChart;
