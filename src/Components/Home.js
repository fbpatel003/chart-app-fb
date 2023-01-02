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
import { SvgIcon } from "@mui/material";

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

  const FocusIcon = (
    <SvgIcon color="error">
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M21,11H19.93A8,8,0,0,0,13,4.07V3a1,1,0,0,0-2,0V4.07A8,8,0,0,0,4.07,11H3a1,1,0,0,0,0,2H4.07A8,8,0,0,0,11,19.93V21a1,1,0,0,0,2,0V19.93A8,8,0,0,0,19.93,13H21a1,1,0,0,0,0-2Zm-9,7a6,6,0,1,1,6-6A6,6,0,0,1,12,18Zm0-9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,13Z"
      />
    </SvgIcon>
  );

  const DivergenceIcon = (
    <SvgIcon color="primary">
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M8.5,14.1L4,18.6V17c0-0.6-0.4-1-1-1s-1,0.4-1,1v4c0,0.1,0,0.3,0.1,0.4c0.1,0.2,0.3,0.4,0.5,0.5C2.7,22,2.9,22,3,22h4  c0.6,0,1-0.4,1-1s-0.4-1-1-1H5.4l4.5-4.5c0.4-0.4,0.4-1,0-1.4C9.5,13.7,8.9,13.7,8.5,14.1z M21.7,2.3C21.7,2.3,21.7,2.3,21.7,2.3  C21.5,2.1,21.2,2,21,2h-4c-0.6,0-1,0.4-1,1s0.4,1,1,1h1.6l-4.5,4.5c-0.4,0.4-0.4,1,0,1.4l0,0c0.2,0.2,0.4,0.3,0.7,0.3  c0.3,0,0.5-0.1,0.7-0.3L20,5.4V7c0,0.6,0.4,1,1,1s1-0.4,1-1V3C22,2.8,21.9,2.5,21.7,2.3z M15.5,14.1L9.9,8.5c-0.4-0.4-1-0.4-1.4,0  c-0.4,0.4-0.4,1,0,1.4l5.7,5.7c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3C15.9,15.2,15.9,14.5,15.5,14.1  C15.5,14.1,15.5,14.1,15.5,14.1z"
      />
    </SvgIcon>
  );

  const list = (anchor) => (
    <>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {[
            { pair: "Charts In Focus", icon: FocusIcon },
            { pair: "Divergence Charts", icon: DivergenceIcon },
          ].map((text, index) => (
            <Link
              style={{ color: "grey", textDecoration: "none" }}
              key={text.pair}
              to={`/${text.pair}`}
            >
              <ListItem key={text.pair} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{text.icon}</ListItemIcon>
                  <ListItemText primary={text.pair} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {["AUD", "CAD", "CHF", "EUR", "GBP", "NZD", "JPY"].map(
            (text, index) => (
              <Link
                style={{ color: "grey", textDecoration: "none" }}
                key={text}
                to={`/${text}`}
              >
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
            checked={!props.chartData.TopTool}
            onChange={() => {
              props.handleChartDataChange("toptoolbar");
            }}
          />
          Top ToolBar
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
            style={{ width: "100%", marginTop: "10px" }}
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
            background: "white",
            color: "red",
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
