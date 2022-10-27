import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./NavigationTabs.css";
import ServicesSection from "../ServicesSection/ServicesSection";
import { styled } from "@mui/material/styles";
import SessionsContainer from "../../SessionsContainer";

export default function NavigationTabs({ id }) {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
        },
      }}
      className="profile-main-box"
    >
      <TabContext value={value}>
        <Box>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Servicios" value="1" sx={{ fontSize: 16 }} />
              <Tab label="Sesiones" value="2" sx={{ fontSize: 16 }} />
              <Tab label="Galeria" value="3" sx={{ fontSize: 16 }} />
            </TabList>
          </Box>
          <TabPanel
            value="1"
            sx={{
              display: "flex",
              flexdirection: "row",
              justifyContent: "space-around",
            }}
          >
            <ServicesSection id={id} />
          </TabPanel>
          <TabPanel value="2">
            <SessionsContainer id={id} />
          </TabPanel>
          <TabPanel value="3">Galeria</TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
}
