import * as React from "react";
import ImageContainer from "../components/Containers/ImagesContainer/ImagesContainer";
import useFetchSession from "../services/useFetchSession";

export default function SelectionPage() {
  const session = useFetchSession("635b1a9fb8f6178bdddc4a09");
  let previewPics = {};
  if (session.data) {
    previewPics = session.data.previewPics;
    return <ImageContainer previewPics={previewPics} loaded={true} />;
  }

  return <ImageContainer loaded={false} />;
}
