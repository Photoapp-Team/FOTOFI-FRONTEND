import Button from "../Button/Button";
import { useDropzone } from "react-dropzone";
import Dropzone from 'react-dropzone'

const AddNewService = () => {
  return (
    <>
      <Dropzone>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        )}
      </Dropzone>
    </>
  );
};

export default AddNewService;
