import "./PackageDetailPage.css";
import React, { useState, useEffect } from "react";
import PackageContainer from "../../components/Containers/PackageContainer/PackageContainer";
import useFetchPackage from "../../services/FetchServices/useFetchPackage";
import { useParams } from "react-router-dom";

const PackageDetailPage = () => {
  const params = useParams();

  let packageData = useFetchPackage(params.id);
  if (packageData.data) {
    return <PackageContainer data={packageData}></PackageContainer>;
  }
};

export default PackageDetailPage;
