import * as React from "react";
import ImageContainer from "../components/Containers/ImagesContainer/ImagesContainer";
import useFetchSession from "../services/useFetchSession";
import { useParams } from "react-router-dom";

export default function SelectionPage() {
  const params = useParams();
  const sessionId = params.id;

  console.log(sessionId);
  const session = useFetchSession(sessionId);
  let previewPics = {};
  if (session.data) {
    previewPics = session.data.previewPics;
    return <ImageContainer previewPics={previewPics} loaded={true} sessionId={sessionId} />;
  }

  return <ImageContainer loaded={false} />;
}
