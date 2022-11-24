import { Avatar, Box, ButtonBase, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Button from "@mui/material/Button";
import "./ProfileDropZone.css";

export function ProfileDropZone({ setFieldValue, fieldName }) {
  console.log(fieldName);
  const [files, setFiles] = useState([]);
  const { getRootProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
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

  let thumb = {
    display: "inline-flex",
    marginBottom: 8,
    marginRight: 8,
    width: "100%",
    height: 100,
    padding: 4,
    boxSizing: "border-box",
  };

  const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    height: "100px",
    maxWidth: "600px",
    width: "auto",
  };

  const thumbInner = {
    display: "flex",
  };

  const img = {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const thumbs = files.map((file) => (
    <div
      style={{ ...thumb, borderRadius: fieldName === "profilePic" ? "50%" : "2px" }}
      key={file.name}
    >
      <div style={thumbInner} className="profileDropZone">
        {fieldName === "profilePic" ? (
          <Avatar
            src={file.preview}
            variant="circular"
            style={{ ...img, aspectRatio: fieldName === "profilePic" ? "1/1" : "1/1" }}
            // Revoke data uri after image is loaded
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
          />
        ) : (
          <img
            src={file.preview}
            style={{ ...img, aspectRatio: fieldName === "profilePic" ? "1/1" : "16/1" }}
            // Revoke data uri after image is loaded
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
          />
        )}
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <>
      <Box {...getRootProps({ className: "profileDropZone" })}>
        <Container
          style={{
            ...thumbsContainer,
            border: fieldName === "profilePic" ? "none" : "1px dashed #DDDAD6",
          }}
        >
          {thumbs}
        </Container>
      </Box>
      <Button name="Seleccionar" variant="text" onClick={open}>
        Seleccionar
      </Button>
    </>
  );
}
