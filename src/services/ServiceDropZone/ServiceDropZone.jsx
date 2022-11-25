import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./ServiceDropZone.css";

export function ServiceDropZone({ setFieldValue, fieldName }) {
  const [files, setFiles] = useState([]);
  const { getRootProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    accept: {
      "image/*": [],
    },
    maxFiles: 8,
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
    borderRadius: "2px",
    marginBottom: 8,
    marginRight: 8,
    width: "auto",
    height: 100,
    padding: 4,
    boxSizing: "border-box",
  };

  const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  };

  const img = {
    display: "block",
    width: "auto",
    height: "100%",
  };

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner} className="profileDropZone">
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
    <div className="container">
      <aside style={thumbsContainer}>{thumbs}</aside>
      <div {...getRootProps({ className: "serviceDropZone" })}>
        <Button
          type="button"
          variant="text"
          name="Seleccionar"
          children="Seleccionar"
          onClick={open}
        />
      </div>
    </div>
  );
}
