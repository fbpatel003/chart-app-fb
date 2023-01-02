import * as React from "react";
import Grid from "@mui/material/Grid";
import TradingViewChart from "./TradingViewChart";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Home from "./Home";

function ChartBox(props) {
  function addChartToFocus(pair) {
    fetch("https://chart-api-fb.onrender.com/addToFocus", {
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
        if (data.status == "chartAdded") {
          alert(pair.el + " added to focus tab");
        } else alert("Mr. stark i dont feel so good..!");
      });

      props.fetchdata();
  }

  function addToDivergence(pair) {
    fetch("https://chart-api-fb.onrender.com/addToDivergence", {
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
        if (data.status == "chartDivergenceAdded") {
          alert(pair.el + " added to focus tab");
        } else alert("Mr. stark i dont feel so good..!");
      });
      props.fetchdata();
  }

  return (
    <Box sx={{ flexGrow: 1 }} style={{ padding: "15px" }}>
      <Grid container spacing={2}>
        {props.AllCharts
          ? props.AllCharts.map((el) => {
              return (
                <Grid key={el} item xs={12} md={6}>
                  <div
                    style={{
                      height: "47vh",
                    }}
                  >
                    <TradingViewChart
                      key={new Date().getMilliseconds()}
                      style={{ padding: "10px" }}
                      chartName={el}
                      chartData={props.chartData}
                    />
                    <Grid
                      style={{ marginTop: "-50px", paddingLeft: "20px" }}
                      container
                      direction="row"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      spacing={2}
                    >
                      <Grid item xs={4}>
                        <div
                          style={{
                            width: "80%",
                            background:
                              props.currencyName == el.substring(0, 3)
                                ? "green"
                                : "red",
                            color: "white",
                            padding: "7px",
                            textAlign: "center",
                            borderRadius: "10px",
                            border: "1px solid black",
                          }}
                        >
                          {el}
                        </div>
                      </Grid>

                      {props.currencyName != "Charts In Focus" &&
                      props.currencyName != "Divergence Charts" ? (
                        <>
                          <Grid item xs={4}>
                            <Button
                              onClick={() => addChartToFocus({ el })}
                              style={{ background: "grey", width: "90%" }}
                              variant="contained"
                            >
                              ..to Focus
                            </Button>
                          </Grid>
                          <Grid item xs={4}>
                            <Button
                              onClick={() => addToDivergence({ el })}
                              style={{ background: "grey", width: "90%" }}
                              variant="contained"
                            >
                              ..Divergence
                            </Button>
                          </Grid>
                        </>
                      ) : (
                        <Grid item xs={8}>
                        <Button
                          onClick={() => props.RemoveFromChart({ el })}
                          style={{ background: "grey", width: "90%" }}
                          variant="contained"
                        >
                          Remove
                        </Button>
                      </Grid>
                      )}
                    </Grid>
                  </div>
                </Grid>
              );
            })
          : null}
      </Grid>
      <Home
        currencyName={props.currencyName}
        chartData={props.chartData}
        handleChartDataChange={props.handleChartDataChange}
        handleTimeFrameChnage={props.handleTimeFrameChnage}
      />
    </Box>
  );
}

export default ChartBox;
