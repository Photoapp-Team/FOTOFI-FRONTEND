import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./NavigationTabs.css";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SessionCard from "../../Cards/SessionCard/SessionCard";
import useFetchMySessions from "../../../services/useFetchMySessions";

export default function NavigationTabs() {
  const [value, setValue] = useState("1");

  var mySessions = useFetchMySessions();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="profile-main-box">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            textColor="#42B7D0"
            indicatorColor="#42B7D0"
          >
            <Tab label="Servicios" value="1" />
            <Tab label="Sesiones" value="2" />
            <Tab label="Galeria" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Servicios</TabPanel>
        <TabPanel value="2">
          <Container className="mainContainer">
            <Grid>
              {mySessions.data &&
                mySessions.data.map((session, index) => {
                  return (
                    <>
                      <SessionCard
                        key={`${index}index${session._id}`}
                        data={session}
                      />
                    </>
                  );
                })}
            </Grid>
          </Container>
        </TabPanel>
        <TabPanel value="3">Galeria</TabPanel>
      </TabContext>
    </Box>
  );
}
