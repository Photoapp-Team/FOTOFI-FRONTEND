import { Box, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./ImageUpload.css";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
  justifyContent: "center",
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  marginLeft: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  width: "100%",
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "100%",
  height: "100%",
};

const ImageUpload = ({ phrase, classbox, classpaper, setFieldValue, fieldName }) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      setFieldValue(fieldName, acceptedFiles);
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <Box className={classbox} sx={{ borderRadius: "16px" }}>
      <Paper elevation={3} className={classpaper} sx={{ borderRadius: "16px" }}>
        <div className="dropzone">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <div>{phrase}</div>
          </div>
          <aside style={thumbsContainer}>{thumbs}</aside>
        </div>
      </Paper>
    </Box>
  );
};

export default ImageUpload;
