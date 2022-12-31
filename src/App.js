import { useState, useEffect, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import ChartBox from "./Components/ChartBox";
import ChartsInFocus from "./Components/ChartsInFocus";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";

function App() {
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
  const [atr, setAtr] = useState(true);
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
    const ATR = JSON.parse(localStorage.getItem("AtrFxChart"));
    if (ATR) setAtr(ATR);
    const MACD = JSON.parse(localStorage.getItem("MacdFxChart"));
    if (MACD) setMacd(MACD);
    const TOOLBAR = JSON.parse(localStorage.getItem("ToolBarFxChart"));
    if (TOOLBAR) setMacd(TOOLBAR);
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
    localStorage.setItem("AtrFxChart", JSON.stringify(atr));
  }, [atr]);
  useEffect(() => {
    localStorage.setItem("MacdFxChart", JSON.stringify(macd));
  }, [macd]);
  useEffect(() => {
    localStorage.setItem("ToolBarFxChart", JSON.stringify(toolbar));
  }, [toolbar]);

  const chartData = {
    TimeFrame: timeFrame,
    Rsi: rsi,
    Macd: macd,
    Atr: atr,
    Mode: mode,
    hideLegend: legend,
    ToolBar: toolbar,
  };

  function handleChartDataChange(change) {
    if (change == "rsi") setRsi(!rsi);
    if (change == "macd") setMacd(!macd);
    if (change == "atr") setAtr(!atr);
    if (change == "legend") setLegend(!legend);
    if (change == "mode" && mode == "dark") setMode("light");
    if (change == "mode" && mode == "light") setMode("dark");
    if (change == "toolbar") setToolBar(!toolbar);
  }

  function handleTimeFrameChnage(Time) {
    setTimeFrame(Time);
    console.log(timeFrame);
  }

  return (
    <>
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
                    />
                  }
                />
              );
            })
          : null}
        <Route
          path="/ChartsInFocus"
          element={
            <ChartsInFocus
              currencyName='Charts In Focus'
              chartData={chartData}
              handleChartDataChange={handleChartDataChange}
              handleTimeFrameChnage={handleTimeFrameChnage}
            />
          }
        />
        {/* <Route path="/AUD" element={<ChartBox currencyName="AUD" AllCharts={audArr} chartData={chartData} />} />
        <Route path="/CAD" element={<ChartBox currencyName="CAD" AllCharts={cadArr} chartData={chartData} />} />
        <Route path="/CHF" element={<ChartBox currencyName="CHF" AllCharts={chfArr} chartData={chartData} />} />
        <Route path="/GBP" element={<ChartBox currencyName="GBP" AllCharts={gbpArr} chartData={chartData} />} />
        <Route path="/EUR" element={<ChartBox currencyName="EUR" AllCharts={eurArr} chartData={chartData} />} />
        <Route path="/NZD" element={<ChartBox currencyName="NZD" AllCharts={nzdArr} chartData={chartData} />} />
        <Route path="/JPY" element={<ChartBox currencyName="JPY" AllCharts={jpyArr} chartData={chartData} />} /> */}
      </Routes>
    </>
  );
}

export default App;
