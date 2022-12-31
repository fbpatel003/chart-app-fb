import React, { useState } from "react";
import ChartBox from "./ChartBox";
import Home from "./Home";

function ChartsInFocus(props) {
  const [curChartDetails, setCurChartDetails] = useState([]);

  React.useEffect(() => {
    async function fetchdata(){
    await fetch("http://localhost:5000/getFromFocus", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "get from focus");
        // if(data.status=="chartAdded") {
        //   alert(pair.el + ' added to focus tab')
        // } else alert('Mr. stark i dont feel so good..!')
        // const tempArr = [];
        // data.map((element) => {
        //   tempArr.push(element.chartPair);
        // });
        // setCurChartDetails(tempArr);
         setCurChartDetails(data);
        const temparr = data.map(function (obj) {
            return obj.chartPair;
          });
        setCurChartDetails(temparr);
        console.log(curChartDetails);
      });
      
    }
    fetchdata();

    // const temparr = [];
    // curChartDetails.forEach((ele)=>{
    //     temparr.push(ele.chartPair);
    // })
  }, []);

    // while(!curChartDetails) fetchdata();

  return (
    <>
      <ChartBox
        currencyName={props.currencyName}
        AllCharts={curChartDetails}
        chartData={props.chartData}
        handleChartDataChange={props.handleChartDataChange}
        handleTimeFrameChnage={props.handleTimeFrameChnage}
      />
      <Home
        currencyName={props.currencyName}
        chartData={props.chartData}
        handleChartDataChange={props.handleChartDataChange}
        handleTimeFrameChnage={props.handleTimeFrameChnage}
      />
    </>
  );
}

export default ChartsInFocus;
