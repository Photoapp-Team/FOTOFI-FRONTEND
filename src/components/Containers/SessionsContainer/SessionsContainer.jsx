import React from "react";
import "./SessionsContainer.css";
import SessionCard from "../../Cards/SessionCard/SessionCard";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import useFetchMySessions from "../../../services/useFetchMySessions";

export default function SessionsContainer({ id }) {
  var mySessions = useFetchMySessions();
  console.log(mySessions);

  return (
    <Container className="sessions-container">
      <Grid>
        {mySessions.data &&
          mySessions.data.map((session, index) => {
            return (
              <>
                <SessionCard key={`${index}index${session._id}`} data={session} />
              </>
            );
          })}
      </Grid>
    </Container>
  );
}
