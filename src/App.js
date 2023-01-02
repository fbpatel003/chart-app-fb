import { useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import ChartBox from "./Components/ChartBox";
import ChartsInFocus from "./Components/ChartsInFocus";
import DivergenceChart from "./Components/DivergenceChart";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

function App() {

  const THEME = createTheme({
    typography: {
     "fontFamily": 'Josefin Sans'
    }
 });

  const [LogIn, setLogin] = useState(false);

  function handleLogin(confirmed) {
    if (confirmed) setLogin(true);
  }

  const audArr = [
    "AUDCAD",
    "AUDCHF",
    "EURAUD",
    "AUDNZD",
    "AUDUSD",
    "GBPAUD",
    "AUDJPY",
  ];
  const cadArr = [
    "AUDCAD",
    "CADCHF",
    "EURCAD",
    "NZDCAD",
    "USDCAD",
    "GBPCAD",
    "CADJPY",
  ];
  const eurArr = [
    "EURAUD",
    "EURCHF",
    "EURCAD",
    "EURNZD",
    "EURUSD",
    "EURGBP",
    "EURJPY",
  ];
  const chfArr = [
    "AUDCHF",
    "CADCHF",
    "EURCHF",
    "NZDCHF",
    "USDCHF",
    "GBPCHF",
    "CHFJPY",
  ];
  const gbpArr = [
    "GBPAUD",
    "GBPCAD",
    "GBPCHF",
    "GBPNZD",
    "GBPUSD",
    "EURGBP",
    "GBPJPY",
  ];
  const nzdArr = [
    "AUDNZD",
    "NZDCHF",
    "EURNZD",
    "NZDCAD",
    "NZDUSD",
    "GBPNZD",
    "NZDJPY",
  ];
  const jpyArr = [
    "AUDJPY",
    "CADJPY",
    "EURJPY",
    "NZDJPY",
    "USDJPY",
    "GBPJPY",
    "CHFJPY",
  ];
  const [timeFrame, setTimeFrame] = useState(60);
  const [legend, setLegend] = useState(false);
  const [mode, setMode] = useState("dark");
  const [rsi, setRsi] = useState(true);
  const [toptoolbar, setTopToolbar] = useState(true);
  const [macd, setMacd] = useState(false);
  const [toolbar, setToolBar] = useState(false);

  useEffect(() => {
    const TF = JSON.parse(localStorage.getItem("TimeFrameOfFxChart"));
    if (TF) setTimeFrame(TF);
    const LEGEND = JSON.parse(localStorage.getItem("LegendFxChart"));
    if (LEGEND) setLegend(LEGEND);
    const MODE = JSON.parse(localStorage.getItem("ModeFxChart"));
    if (MODE) setMode(MODE);
    const RSI = JSON.parse(localStorage.getItem("RsiFxChart"));
    if (RSI) setRsi(RSI);
    const TOPTOOL = JSON.parse(localStorage.getItem("TopToolBarFxChart"));
    if (TOPTOOL) setTopToolbar(TOPTOOL);
    const MACD = JSON.parse(localStorage.getItem("MacdFxChart"));
    if (MACD) setMacd(MACD);
    const TOOLBAR = JSON.parse(localStorage.getItem("ToolBarFxChart"));
    if (TOOLBAR) setMacd(TOOLBAR);
    fetchdata();
  }, []);

  useEffect(() => {
    localStorage.setItem("TimeFrameOfFxChart", JSON.stringify(timeFrame));
  }, [timeFrame]);
  useEffect(() => {
    localStorage.setItem("LegendFxChart", JSON.stringify(legend));
  }, [legend]);
  useEffect(() => {
    localStorage.setItem("ModeFxChart", JSON.stringify(mode));
  }, [mode]);
  useEffect(() => {
    localStorage.setItem("RsiFxChart", JSON.stringify(rsi));
  }, [rsi]);
  useEffect(() => {
    localStorage.setItem("TopToolBarFxChart", JSON.stringify(toptoolbar));
  }, [toptoolbar]);
  useEffect(() => {
    localStorage.setItem("MacdFxChart", JSON.stringify(macd));
  }, [macd]);
  useEffect(() => {
    localStorage.setItem("ToolBarFxChart", JSON.stringify(toolbar));
  }, [toolbar]);

  const [curFocusChartDetails, setCurFocusChartDetails] = useState([]);
  const [curDivergenceChartDetails, setcurDivergenceChartDetails] = useState(
    []
  );
  async function fetchdata() {
    await fetch("https://chart-api-fb.onrender.com/getFromFocus", {
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
        setCurFocusChartDetails(data);
      });

    await fetch("https://chart-api-fb.onrender.com/getFromDivergence", {
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
        setcurDivergenceChartDetails(data);
      });
  }

  const chartData = {
    TimeFrame: timeFrame,
    Rsi: rsi,
    Macd: macd,
    TopTool: toptoolbar,
    Mode: mode,
    hideLegend: legend,
    ToolBar: toolbar,
  };

  function handleChartDataChange(change) {
    if (change == "rsi") setRsi(!rsi);
    if (change == "macd") setMacd(!macd);
    if (change == "toptoolbar") setTopToolbar(!toptoolbar);
    if (change == "legend") setLegend(!legend);
    if (change == "mode" && mode == "dark") setMode("light");
    if (change == "mode" && mode == "light") setMode("dark");
    if (change == "toolbar") setToolBar(!toolbar);

    // fetchdata();
  }

  function handleTimeFrameChnage(Time) {
    setTimeFrame(Time);
    // fetchdata();
  }

  return (
    <>
    <ThemeProvider theme={THEME}>
      <LoginPage handleLoginToApp={handleLogin} />
      <Routes>
        {LogIn ? <Route path="/" element={<Home />} /> : null}
        {LogIn ? (
          <Route
            path="/Home"
            element={
              <Home
                chartData={chartData}
                handleChartDataChange={handleChartDataChange}
                handleTimeFrameChnage={handleTimeFrameChnage}
              />
            }
          />
        ) : null}
        {LogIn
          ? [
              { text: "AUD", Array: audArr },
              { text: "CAD", Array: cadArr },
              { text: "CHF", Array: chfArr },
              { text: "EUR", Array: eurArr },
              { text: "GBP", Array: gbpArr },
              { text: "NZD", Array: nzdArr },
              { text: "JPY", Array: jpyArr },
            ].map((Obj, index) => {
              return (
                <Route
                  key={chartData}
                  path={`/${Obj.text}`}
                  element={
                    <ChartBox
                      currencyName={Obj.text}
                      AllCharts={Obj.Array}
                      chartData={chartData}
                      handleChartDataChange={handleChartDataChange}
                      handleTimeFrameChnage={handleTimeFrameChnage}
                      fetchdata = {fetchdata}
                    />
                  }
                />
              );
            })
          : null}
        <Route
          path="/Charts In Focus"
          element={
            <ChartsInFocus
              currencyName="Charts In Focus"
              chartData={chartData}
              charts={curFocusChartDetails}
              handleChartDataChange={handleChartDataChange}
              handleTimeFrameChnage={handleTimeFrameChnage}
              fetchdata = {fetchdata}
            />
          }
        />
        <Route
          path="/Divergence Charts"
          element={
            <DivergenceChart
              currencyName="Divergence Charts"
              chartData={chartData}
              charts={curDivergenceChartDetails}
              handleChartDataChange={handleChartDataChange}
              handleTimeFrameChnage={handleTimeFrameChnage}
              fetchdata = {fetchdata}
            />
          }
        />
      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
