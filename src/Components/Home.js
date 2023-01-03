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
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { SvgIcon } from "@mui/material";

function Home(props) {
  const [chartTF, setChartTF] = React.useState(props.chartData.TimeFrame);

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

  const audIcon = (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#0052b4" d="M0 85.333h512V426.67H0z" />
        <path
          fill="#f0f0f0"
          d="M223.397 255.996c.273-.304.543-.609.813-.916-.27.308-.546.61-.82.916h.007zM189.217 297.923l10.958 22.913 24.747-5.718-11.083 22.853 19.9 15.781-24.776 5.585.069 25.398-19.815-15.89-19.814 15.89.069-25.398-24.776-5.585 19.9-15.781-11.083-22.853 24.746 5.718zM387.076 326.387l5.227 10.929 11.803-2.728-5.286 10.9 9.492 7.528-11.818 2.663.032 12.114-9.45-7.578-9.45 7.578.032-12.114-11.817-2.663 9.491-7.528-5.285-10.9 11.803 2.728zM338.453 210.448l5.227 10.93 11.803-2.729-5.286 10.901 9.491 7.528-11.817 2.663.032 12.115-9.45-7.58-9.451 7.58.033-12.115-11.818-2.663 9.491-7.528-5.284-10.901 11.802 2.729zM387.076 144.198l5.227 10.93 11.803-2.73-5.286 10.902 9.491 7.527-11.817 2.664.032 12.114-9.45-7.58-9.45 7.58.032-12.114-11.817-2.664 9.491-7.527-5.285-10.902 11.803 2.73zM429.547 193.886l5.227 10.929 11.802-2.728-5.284 10.9 9.491 7.527-11.818 2.664.033 12.114-9.451-7.578-9.45 7.578.032-12.114-11.817-2.664 9.491-7.527-5.286-10.9 11.803 2.728zM399.179 251.856l4.11 12.652h13.304l-10.763 7.82 4.112 12.652-10.763-7.819-10.765 7.819 4.112-12.652-10.763-7.82h13.304z"
        />
        <path
          fill="#f0f0f0"
          d="M256 85.333v30.553l-45.167 25.099H256v59.359h-59.103L256 233.179v22.817h-26.68l-73.494-40.826v40.826h-55.652v-48.573l-87.43 48.573H0v-30.553l45.167-25.099H0v-59.359h59.103L0 108.139V85.333h26.68l73.494 40.827V85.333h55.652v48.573l87.43-48.573z"
        />
        <path
          fill="#d80027"
          d="M144 85.33h-32v69.332H0v32h112v69.334h32v-69.334h112v-32H144z"
        />
        <path
          fill="#0052b4"
          d="M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"
        />
        <path
          fill="#f0f0f0"
          d="M155.826 200.344 256 255.996v-15.737l-71.847-39.915z"
        />
        <path
          fill="#d80027"
          d="M155.826 200.344 256 255.996v-15.737l-71.847-39.915zM71.846 200.344 0 240.259v15.737l100.174-55.652z"
        />
        <path
          fill="#0052b4"
          d="M100.174 140.982 0 85.33v15.737l71.847 39.915z"
        />
        <path
          fill="#f0f0f0"
          d="M100.174 140.982 0 85.33v15.737l71.847 39.915z"
        />
        <path
          fill="#d80027"
          d="M100.174 140.982 0 85.33v15.737l71.847 39.915zM184.154 140.982 256 101.067V85.33l-100.174 55.652z"
        />
      </svg>
    </SvgIcon>
  );

  const cadIcon = (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#f0f0f0" d="M0 85.331h512v341.326H0z" />
        <path
          fill="#d80027"
          d="M0 85.331h170.663v341.337H0zM341.337 85.331H512v341.337H341.337zM288 279.704l32-16-16-7.999v-16l-32 16 16-32h-16l-16-24.001-16 24.001h-16l16 32-32-16v16l-16 7.999 32 16-7.999 16h32v24.001h16v-24.001h32z"
        />
      </svg>
    </SvgIcon>
  );

  const chfIcon = (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#d80027" d="M0 85.337h512v341.326H0z" />
        <path
          fill="#f0f0f0"
          d="M356.174 222.609h-66.783v-66.783h-66.782v66.783h-66.783v66.782h66.783v66.783h66.782v-66.783h66.783z"
        />
      </svg>
    </SvgIcon>
  );

  const eurIcon = (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#0052b4" d="M0 85.331h512v341.337H0z" />
        <path
          fill="#ffda44"
          d="m256 159.994 5.107 15.715h16.523l-13.368 9.713 5.106 15.715L256 191.425l-13.368 9.712 5.106-15.715-13.368-9.713h16.523zM188.118 188.112l14.723 7.501 11.684-11.683-2.586 16.32 14.723 7.502-16.32 2.585-2.585 16.321-7.502-14.723-16.319 2.584 11.684-11.684zM160 255.994l15.715-5.106.001-16.523 9.711 13.368 15.716-5.106-9.713 13.367 9.713 13.368-15.716-5.105-9.711 13.367v-16.523zM188.118 323.877l7.5-14.724-11.682-11.683 16.321 2.585 7.5-14.723 2.585 16.321 16.32 2.584-14.722 7.502 2.585 16.319-11.684-11.683zM256 351.994l-5.107-15.715H234.37l13.369-9.712-5.107-15.715L256 320.564l13.368-9.712-5.106 15.715 13.368 9.712h-16.524zM323.882 323.877l-14.723-7.501-11.684 11.684 2.586-16.322-14.723-7.501 16.319-2.584 2.586-16.321 7.502 14.723 16.319-2.585-11.684 11.684zM352 255.994l-15.715 5.107v16.523l-9.712-13.369-15.716 5.107 9.713-13.368-9.713-13.367 15.716 5.105 9.711-13.367.001 16.524zM323.882 188.112l-7.501 14.723 11.684 11.684-16.322-2.586-7.5 14.724-2.586-16.32-16.319-2.585 14.723-7.502-2.586-16.32 11.684 11.684z"
        />
      </svg>
    </SvgIcon>
  );

  const gbpIcon = (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#f0f0f0" d="M0 85.333h512V426.67H0z" />
        <path
          fill="#d80027"
          d="M288 85.33h-64v138.666H0v64h224v138.666h64V287.996h224v-64H288z"
        />
        <path
          fill="#0052b4"
          d="M393.785 315.358 512 381.034v-65.676zM311.652 315.358 512 426.662v-31.474l-143.693-79.83zM458.634 426.662l-146.982-81.664v81.664z"
        />
        <path
          fill="#f0f0f0"
          d="M311.652 315.358 512 426.662v-31.474l-143.693-79.83z"
        />
        <path
          fill="#d80027"
          d="M311.652 315.358 512 426.662v-31.474l-143.693-79.83z"
        />
        <path
          fill="#0052b4"
          d="M90.341 315.356 0 365.546v-50.19zM200.348 329.51v97.151H25.491z"
        />
        <path
          fill="#d80027"
          d="M143.693 315.358 0 395.188v31.474l200.348-111.304z"
        />
        <path
          fill="#0052b4"
          d="M118.215 196.634 0 130.958v65.676zM200.348 196.634 0 85.33v31.474l143.693 79.83zM53.366 85.33l146.982 81.664V85.33z"
        />
        <path
          fill="#f0f0f0"
          d="M200.348 196.634 0 85.33v31.474l143.693 79.83z"
        />
        <path
          fill="#d80027"
          d="M200.348 196.634 0 85.33v31.474l143.693 79.83z"
        />
        <path
          fill="#0052b4"
          d="M421.659 196.636 512 146.446v50.19zM311.652 182.482V85.331h174.857z"
        />
        <path
          fill="#d80027"
          d="M368.307 196.634 512 116.804V85.33L311.652 196.634z"
        />
      </svg>
    </SvgIcon>
  );

  const nzdIcon = (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#0052b4" d="M0 85.334h512v341.337H0z" />
        <path
          fill="#d80027"
          d="m425.301 233.745 3.388 10.428h10.963l-8.87 6.444 3.388 10.427-8.869-6.444-8.871 6.444 3.388-10.427-8.87-6.444h10.963zM386.107 308.817l5.083 15.642h16.445l-13.305 9.667 5.082 15.64-13.305-9.667-13.305 9.667 5.083-15.64-13.305-9.667h16.445zM387.588 185.971l4.236 13.036h13.704l-11.088 8.054 4.235 13.034-11.087-8.056-11.088 8.056 4.235-13.034-11.087-8.054h13.704zM349.876 233.291l5.082 15.641h16.446l-13.306 9.666 5.084 15.641-13.306-9.666-13.305 9.666 5.082-15.641-13.305-9.666h16.445z"
        />
        <path
          fill="#f0f0f0"
          d="M256.003 85.329v30.564l-45.178 25.088h45.178v59.359H196.89l59.113 32.846v22.806h-26.69l-73.484-40.826v40.826h-55.652v-48.573l-87.429 48.573H.003v-30.553l45.168-25.099H.003v-59.359h59.103L.003 108.147V85.329h26.68l73.494 40.838V85.329h55.652v48.573l87.43-48.573z"
        />
        <path
          fill="#d80027"
          d="M144 85.33h-32v69.334H0v32h112v69.334h32v-69.334h112v-32H144z"
        />
        <path
          fill="#0052b4"
          d="M155.826 200.344 256 255.998v-15.739l-71.847-39.915z"
        />
        <path
          fill="#f0f0f0"
          d="M155.826 200.344 256 255.998v-15.739l-71.847-39.915z"
        />
        <path
          fill="#d80027"
          d="M155.826 200.344 256 255.998v-15.739l-71.847-39.915zM71.846 200.344 0 240.259v15.739l100.174-55.654z"
        />
        <path
          fill="#0052b4"
          d="M100.174 140.983 0 85.33v15.738l71.847 39.915z"
        />
        <path
          fill="#f0f0f0"
          d="M100.174 140.983 0 85.33v15.738l71.847 39.915z"
        />
        <path
          fill="#d80027"
          d="M100.174 140.983 0 85.33v15.738l71.847 39.915zM184.154 140.983 256 101.068V85.33l-100.174 55.653z"
        />
      </svg>
    </SvgIcon>
  );

  const jpyIcon = (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#f0f0f0" d="M0 85.331h512v341.337H0z" />
        <circle cx="256" cy="255.994" r="96" fill="#d80027" />
      </svg>
    </SvgIcon>
  );

  const usdIcon = (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#f0f0f0" d="M0 85.331h512v341.337H0z" />
        <path
          fill="#d80027"
          d="M0 127.994h512v42.663H0zM0 213.331h512v42.663H0zM0 298.657h512v42.663H0zM0 383.994h512v42.663H0z"
        />
        <path fill="#2e52b2" d="M0 85.331h256v183.797H0z" />
        <path
          fill="#f0f0f0"
          d="m99.822 160.624-4.123 12.684H82.363l10.791 7.835-4.123 12.683 10.791-7.835 10.784 7.835-4.122-12.683 10.791-7.835h-13.337zM103.938 219.08l-4.116-12.683-4.123 12.683H82.363l10.791 7.836-4.123 12.683 10.791-7.836 10.784 7.836-4.122-12.683 10.791-7.836zM47.577 219.08l-4.117-12.683-4.123 12.683H26.001l10.791 7.836-4.123 12.683 10.791-7.836 10.785 7.836-4.122-12.683 10.789-7.836zM43.46 160.624l-4.123 12.684H26.001l10.791 7.835-4.123 12.683 10.791-7.835 10.785 7.835-4.122-12.683 10.789-7.835H47.577zM99.822 114.85l-4.123 12.685H82.363l10.791 7.836-4.123 12.683 10.791-7.836 10.784 7.836-4.122-12.683 10.791-7.836h-13.337zM43.46 114.85l-4.123 12.685H26.001l10.791 7.836-4.123 12.683 10.791-7.836 10.785 7.836-4.122-12.683 10.789-7.836H47.577zM156.183 160.624l-4.122 12.684h-13.336l10.79 7.835-4.121 12.683 10.789-7.835 10.786 7.835-4.123-12.683 10.791-7.835h-13.336zM160.301 219.08l-4.118-12.683-4.122 12.683h-13.336l10.79 7.836-4.121 12.683 10.789-7.836 10.786 7.836-4.123-12.683 10.791-7.836zM216.663 219.08l-4.117-12.683-4.123 12.683h-13.335l10.789 7.836-4.122 12.683 10.791-7.836 10.785 7.836-4.123-12.683 10.791-7.836zM212.546 160.624l-4.123 12.684h-13.335l10.789 7.835-4.122 12.683 10.791-7.835 10.785 7.835-4.123-12.683 10.791-7.835h-13.336zM156.183 114.85l-4.122 12.685h-13.336l10.79 7.836-4.121 12.683 10.789-7.836 10.786 7.836-4.123-12.683 10.791-7.836h-13.336zM212.546 114.85l-4.123 12.685h-13.335l10.789 7.836-4.122 12.683 10.791-7.836 10.785 7.836-4.123-12.683 10.791-7.836h-13.336z"
        />
      </svg>
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
          {[
            { pair: "AUD", icon: audIcon },
            { pair: "CAD", icon: cadIcon },
            { pair: "CHF", icon: chfIcon },
            { pair: "EUR", icon: eurIcon },
            { pair: "GBP", icon: gbpIcon },
            { pair: "NZD", icon: nzdIcon },
            { pair: "JPY", icon: jpyIcon },
            { pair: "USD", icon: usdIcon },
          ].map((text, index) => (
            <Link
              style={{ color: "grey", textDecoration: "none" }}
              key={text.pair}
              to={`/${text.pair}`}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>{text.icon}</ListItemIcon>
                  <ListItemText primary={text.pair} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
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
