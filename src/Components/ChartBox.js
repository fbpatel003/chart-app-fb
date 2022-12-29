import * as React from "react";
import Grid from "@mui/material/Grid";
import TradingViewChart from "./TradingViewChart";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Home from "./Home";

function ChartBox(props) {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ padding: "15px" }}>
      <Grid container spacing={2}>
        {props.AllCharts.map((el) => {
          return (
            <Grid key={el} item xs={12} md={6}>
              <div
                style={{
                  height: "47vh",
                  // padding: "10px",
                  // boxShadow:
                  //   "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                }}
              >
                <TradingViewChart
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
                  <Grid item xs={4}>
                    <Button style={{background:"grey", width:"90%"}} variant="contained">..to Focus</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button style={{background:"grey", width:"90%"}} variant="contained">..Divergence</Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          );
        })}
      </Grid>
      <Home currencyName={props.currencyName}/>
    </Box>
  );
}

export default ChartBox;
