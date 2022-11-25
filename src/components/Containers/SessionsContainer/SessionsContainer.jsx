import React from "react";
import "./SessionsContainer.css";
import SessionCard from "../../Cards/SessionCard/SessionCard";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import useFetchMySessions from "../../../services/FetchServices/useFetchMySessions";

export default function SessionsContainer({ id }) {
  var mySessions = useFetchMySessions();

  return (
    <Container>
      <Grid
        spacing={1}
        sx={{ display: "flex", flexWrap: "wrap", m: "auto" }}
        className="grid-container-sessioncard"
      >
        {mySessions.data &&
          mySessions.data.map((session, index) => {
            return (
              <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
                <SessionCard key={`${index}index${session._id}`} data={session} />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}
