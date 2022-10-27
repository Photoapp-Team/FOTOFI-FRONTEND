import "./SessionCard.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import { List, ListItemText, ListItem } from "@mui/material";
import Divider from "@mui/material/Divider";
import useFetchUser from "../../../services/useFetchUser";

export default function SessionCard({ data }) {
  const { REACT_APP_API_ENDPOINT } = process.env;

  //   const fetchUser = useFetchUser(`${REACT_APP_API_ENDPOINT}/users/${userId}`);
  //   const fetchPhotographer = useFetchUser(
  //     `${REACT_APP_API_ENDPOINT}/users/${userId}`
  //   );

  const isLoaded = true;
  return (
    <>
      <Card
        className="sessionCard"
        sx={{ maxWidth: 450, borderRadius: 2, minWidth: 202, margin: 2 }}
        elevation={4}
      >
        <CardHeader
          className="cardHeader"
          font
          sx={{ p: 0.75 }}
          avatar={
            isLoaded ? (
              <Avatar alt={`Sesion: ${data._id}`} src={"userData.profilePic"} />
            ) : (
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            )
          }
          title={
            isLoaded ? (
              `Sesion: ${data._id}`
            ) : (
              <Skeleton variant="text" width="60%" sx={{ fontSize: ".9rem" }} />
            )
          }
          subheader={
            isLoaded ? (
              "location"
            ) : (
              <Skeleton variant="text" width="40%" sx={{ fontSize: ".9rem" }} />
            )
          }
        />

        <CardActionArea sx={{ maxWidth: 300, padding: ".5rem" }}>
          {isLoaded ? (
            <Typography
              className="cardTitle"
              variant="h5"
              component="div"
              children={"el servicio aqui"}
              align="center"
              boxSizing="content-box"
            />
          ) : (
            <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
          )}

          <CardContent sx={{ pb: 0 }}>
            <List>
              <ListItem>
                <ListItemText
                  primary={
                    isLoaded ? (
                      `para usuario ${data.userId[0]}`
                    ) : (
                      <Skeleton
                        variant="text"
                        width="60%"
                        sx={{ fontSize: ".9rem" }}
                      />
                    )
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    isLoaded ? (
                      `Del fotografo ${data.photographerId[0]}`
                    ) : (
                      <Skeleton
                        variant="text"
                        width="60%"
                        sx={{ fontSize: ".9rem" }}
                      />
                    )
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    isLoaded ? (
                      `Texto`
                    ) : (
                      <Skeleton
                        variant="text"
                        width="60%"
                        sx={{ fontSize: ".9rem" }}
                      />
                    )
                  }
                />
              </ListItem>
            </List>

            {isLoaded ? (
              <Typography
                className="cardTitle"
                variant="h5"
                component="div"
                children={`creada el ${data.starDate}`}
                align="center"
                boxSizing="content-box"
              />
            ) : (
              <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
