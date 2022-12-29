import React, { useEffect, useRef } from "react";

function TradingViewChart(props) {
    const curChartName = "FX:" + props.chartName;

    let curChartDetails = {
        width: "auto",
        height: "93%",
        symbol: curChartName,
        interval: props.chartData.TimeFrame,
        timezone: "Asia/Kolkata",
        studies: [],
        details: true,
        theme: props.chartData.Mode,
        style: "1",
        locale: "in",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        show_popup_button: true,
        popup_width: "1000",
        popup_height: "650",
        container_id: props.chartName,
      }

      if(props.chartData.hideLegend) curChartDetails.hide_legend=true;
      if(props.chartData.Rsi) curChartDetails.studies.push("RSI@tv-basicstudies");
      if(props.chartData.Macd) curChartDetails.studies.push("MACD@tv-basicstudies");
      if(props.chartData.Atr) curChartDetails.studies.push("ATR@tv-basicstudies");

  let tvScriptLoadingPromise;
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById(props.chartName) &&
        "TradingView" in window
      ) {
        new window.TradingView.widget(curChartDetails);
      }
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id={props.chartName}/>
    </div>
  );
}

export default TradingViewChart;
