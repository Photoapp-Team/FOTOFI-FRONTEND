import { Box, Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import AddServiceForm from "../../components/Forms/AddServiceForm/AddServiceForm";
import { useUser } from "../../contexts/UserContext";
import ErrorPage from "../ErrorPage/ErrorPage";
import "./AddServicePage.css";

const AddServicePage = () => {
  const params = useParams();
  const { id } = params;
  const { userId } = useUser();

  if (userId === id) {
    return (
      <Grid item xs={12} md={12} sx={{ py: 5 }} className="addServicePage">
        <AddServiceForm />
      </Grid>
    );
  } else {
    return (
      <Box sx={{ backgroundColor: "lightgray", height: "auto", maxHeight: "100%" }}>
        <ErrorPage />
      </Box>
    );
  }
};

export default AddServicePage;
