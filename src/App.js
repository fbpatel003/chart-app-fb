import { useState , useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import ChartBox from "./Components/ChartBox";
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
  const [timeFrame, setTimeFrame] = useState("60");
  const [legend, setLegend] = useState(false);
  const [mode, setMode] = useState("dark");
  const [rsi, setRsi] = useState(true);
  const [atr, setAtr] = useState(true);
  const [macd, setMacd] = useState(false);

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

  const chartData = {
    TimeFrame: timeFrame,
    Rsi: rsi,
    Macd: macd,
    Atr: atr,
    Mode: mode,
    hideLegend: legend,
  };

  return (
    <>
      <LoginPage handleLoginToApp={handleLogin} />
      <Routes>
        {LogIn ? <Route path="/" element={<Home />} /> : null}
        {LogIn ? <Route path="/Home" element={<Home />} /> : null}
        {
          LogIn ?
          [{text:"AUD", Array:audArr}, {text:"CAD", Array:cadArr}, {text:"CHF", Array:chfArr}, {text:"EUR", Array:eurArr}, {text:"GBP", Array:gbpArr}, {text:"NZD", Array:nzdArr}, {text:"JPY", Array:jpyArr}].map((Obj, index)=>{
            return(
              <Route key={Obj.text} path={`/${Obj.text}`} element={<ChartBox currencyName={Obj.text} AllCharts={Obj.Array} chartData={chartData} />} />
            )
          } )
          : null
        }
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
