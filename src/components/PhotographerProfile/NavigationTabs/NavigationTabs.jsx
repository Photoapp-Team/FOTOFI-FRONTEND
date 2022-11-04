import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./NavigationTabs.css";
import ServicesContainer from "../../Containers/ServicesContainerr/ServicesContainer";
import { styled } from "@mui/material/styles";
import SessionsContainer from "../../Containers/SessionsContainer";
import { useParams } from "react-router";

export default function NavigationTabs({ role }) {
  const [isOwner, setIsOwner] = useState(false);
  const [value, setValue] = useState("1");
  const params = useParams();
  const { id } = params;
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId === id) setIsOwner(true);
    else setIsOwner(false);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: "auto",
        },
      }}
    >
      <TabContext value={value}>
        <Box>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Servicios" value="1" sx={{ fontSize: 16 }} />
              {isOwner ? (
                <Tab label="Sesiones" value="2" sx={{ fontSize: 16 }} />
              ) : (
                <Tab label="Sesiones" disabled value="2" sx={{ fontSize: 16 }} />
              )}
              <Tab label="Galeria" value="3" sx={{ fontSize: 16 }} />
            </TabList>
          </Box>
          <TabPanel
            value="1"
            sx={{
              display: "flex",
              flexdirection: "row",
            }}
          >
            <ServicesContainer id={id} isOwner={isOwner} role={role} />
          </TabPanel>
          <TabPanel value="2">
            <SessionsContainer id={id} isOwner={isOwner} />
          </TabPanel>
          <TabPanel value="3">Galeria</TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
}
