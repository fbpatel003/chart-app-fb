import ChartBox from "./ChartBox";

function ChartsInFocus(props) {
  const allCharts = props.charts.data.map(function (obj) {
    return obj.chartPair;
  });

  function RemoveFromChart(pair){
    fetch("https://chart-api-fb.onrender.com/removeFromFocus", {
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
        if (data.data == "deleted from focus") {
          alert(pair.el + " deleted from focus");
        } else alert("Mr. stark i dont feel so good..!");
      });

      props.fetchdata();
  }

  return (
    <>
      <ChartBox
      RemoveFromChart = {RemoveFromChart}
        currencyName={props.currencyName}
        AllCharts={allCharts}
        chartData={props.chartData}
        handleChartDataChange={props.handleChartDataChange}
        handleTimeFrameChnage={props.handleTimeFrameChnage}
        fetchdata = {props.fetchdata}
      />
    </>
  );
}

export default ChartsInFocus;
