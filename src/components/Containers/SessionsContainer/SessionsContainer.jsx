import React from "react";
import "./SessionsContainer.css";
import SessionCard from "../../Cards/SessionCard/SessionCard";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import useFetchMySessions from "../../../services/FetchServices/useFetchMySessions";

export default function SessionsContainer({ id }) {
  var mySessions = useFetchMySessions();

  return (
    <Container className="sessions-container">
      <Grid>
        {mySessions.data &&
          mySessions.data.map((session, index) => {
            return (
              <Grid item>
                <SessionCard key={`${index}index${session._id}`} data={session} />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}
