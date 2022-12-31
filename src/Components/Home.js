import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

function Home(props) {
  const [chartTF, setChartTF] = React.useState("");

  const handleChangeTF = (event) => {
    setChartTF(event.target.value);
    props.handleTimeFrameChnage(event.target.value);
  };

  const [state, setState] = React.useState({
    left: false,
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {["ChartsInFocus", "Divergence Chart"].map((text, index) => (
             <Link style={{color:'grey', textDecoration:'none'}} key={text} to={`/${text}`}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {["AUD", "CAD", "CHF", "EUR", "GBP", "NZD", "JPY"].map(
            (text, index) => (
              <Link style={{color:'grey', textDecoration:'none'}} key={text} to={`/${text}`}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              </Link>
            )
          )}
        </List>
      </Box>
      <div style={{ width: "80%", margin: "auto", marginTop: "25px" }}>
        <div>
          <Switch
            color="secondary"
            checked={props.chartData.Rsi}
            onChange={() => {
              props.handleChartDataChange("rsi");
            }}
          />
          RSI
        </div>
        <div>
          <Switch
            color="secondary"
            checked={props.chartData.Macd}
            onChange={() => {
              props.handleChartDataChange("macd");
            }}
          />
          MACD
        </div>
        <div>
          <Switch
            color="secondary"
            checked={props.chartData.Atr}
            onChange={() => {
              props.handleChartDataChange("atr");
            }}
          />
          ATR
        </div>
        <div>
          <Switch
            color="secondary"
            checked={props.chartData.Mode == "light" ? false : true}
            onChange={() => {
              props.handleChartDataChange("mode");
            }}
          />
          {props.chartData.Mode == "dark"
            ? "Switch to Light"
            : "Switch to Dark"}
        </div>
        <div>
          <Switch
            color="secondary"
            checked={!props.chartData.hideLegend}
            onChange={() => {
              props.handleChartDataChange("legend");
            }}
          />
          Symbol Details
        </div>
        <div>
          <Switch
            color="secondary"
            checked={!props.chartData.ToolBar}
            onChange={() => {
              props.handleChartDataChange("toolbar");
            }}
          />
          Drawing Toolbar
        </div>
        <div>
            <Select
              style={{width:'100%', marginTop:'10px'}}
              labelId="demo-select-small"
              id="demo-select-small"
              value={chartTF}
              label="chartTF"
              onChange={handleChangeTF}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={5}>5M</MenuItem>
              <MenuItem value={10}>10M</MenuItem>
              <MenuItem value={15}>15M</MenuItem>
              <MenuItem value={30}>30M</MenuItem>
              <MenuItem value={60}>1H</MenuItem>
              <MenuItem value={240}>4H</MenuItem>
              <MenuItem value={3600}>1D</MenuItem>
            </Select>
        </div>
      </div>
    </>
  );
  return (
    <div>
      <React.Fragment key={"left"}>
        <Button
          style={{
            position: "fixed",
            bottom: "0",
          }}
          onClick={toggleDrawer("left", true)}
        >
          {props.currencyName ? props.currencyName : "Lets Start..."}
        </Button>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export default Home;
