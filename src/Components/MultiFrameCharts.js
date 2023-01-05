import React from "react";
import Home from "./Home";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TradingViewChart from './TradingViewChart'

function MultiFrameCharts(props) {
  const [currencyPair, setCurrencyPair] = React.useState("");
  const AllCurrency = [
    "AUDCAD",
    "AUDCHF",
    "EURAUD",
    "AUDNZD",
    "AUDUSD",
    "GBPAUD",
    "AUDJPY",
    "CADCHF",
    "EURCAD",
    "NZDCAD",
    "USDCAD",
    "GBPCAD",
    "CADJPY",
    "EURCHF",
    "EURNZD",
    "EURUSD",
    "EURGBP",
    "EURJPY",
    "NZDCHF",
    "USDCHF",
    "GBPCHF",
    "CHFJPY",
    "GBPNZD",
    "GBPUSD",
    "GBPJPY",
    "NZDUSD",
    "NZDJPY",
    "USDJPY",
  ];
  const handleChangeCurrencyPair = (event) => {
    setCurrencyPair(event.target.value);
  };

  const [tripleTf, setTripleTf] = React.useState("4H-1H-15M");
  const [chart1Tf, setChart1Tf] = React.useState(240);
  const [chart2Tf, setChart2Tf] = React.useState(60);
  const [chart3Tf, setChart3Tf] = React.useState(15);
  const AllTripleTf = ["1D-4H-1H", "4H-1H-15M", "1H-15M-5M"];
  const handleChangeTripleTf = (event) => {
    setTripleTf(event.target.value);
    if(event.target.value=="1D-4H-1H") {
      setChart1Tf('D');
      setChart2Tf(240);
      setChart3Tf(60);
    } else
    if(event.target.value=="4H-1H-15M") {
      setChart1Tf(240);
      setChart2Tf(60);
      setChart3Tf(15);
    } else 
    if(event.target.value=="1H-15M-5M") {
      setChart1Tf(60);
      setChart2Tf(15);
      setChart3Tf(5);
    }

  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{padding: "7px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Select
              style={{ float: "right", minWidth: "150px" }}
              labelId="demo-simple-select-label-currency"
              id="demo-simple-select-currency"
              value={currencyPair}
              label="CurrencyPair"
              onChange={handleChangeCurrencyPair}
            >
              {AllCurrency.map((el) => {
                return (
                  <MenuItem key={el} value={el}>
                    {el}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
          <Grid item xs={6}>
            <Select
              style={{ float: "left", minWidth: "150px" }}
              labelId="demo-simple-select-triple-tf"
              id="demo-simple-select-triple"
              value={tripleTf}
              label="TripleTf"
              onChange={handleChangeTripleTf}
            >
              {AllTripleTf.map((el) => {
                return (
                  <MenuItem key={el} value={el}>
                    {el}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
        </Grid>
      </Box>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          style={{ width: "100%", height: "85vh", padding:'4px'}}
        >
          <TradingViewChart 
            key = {new Date()}
            chartName = {currencyPair}
            chartData = {props.chartData}
            multiChart = {true}
            chartTf = {chart1Tf}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            item
            xs={12}
            style={{ width: "100%", height: "43vh", padding:'4px'}}
          >
            <TradingViewChart 
            key = {new Date()}
            chartName = {currencyPair}
            chartData = {props.chartData}
            multiChart = {true}
            chartTf = {chart2Tf}
          />
          </Grid>
          <Grid
            item
            xs={12}
            style={{ width: "100%", height: "42vh", padding:'4px'}}
          >
            <TradingViewChart 
            key = {new Date()}
            chartName = {currencyPair}
            chartData = {props.chartData}
            multiChart = {true}
            chartTf = {chart3Tf}
          />
          </Grid>
        </Grid>
      </Grid>
      <div style={{ height: "35px", width: "95vw" }}></div>
      <Home
        currencyName={props.currencyName}
        chartData={props.chartData}
        handleChartDataChange={props.handleChartDataChange}
        handleTimeFrameChnage={props.handleTimeFrameChnage}
      />
    </>
  );
}

export default MultiFrameCharts;
