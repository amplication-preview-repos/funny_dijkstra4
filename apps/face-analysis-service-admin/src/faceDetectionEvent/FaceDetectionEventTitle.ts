import { FaceDetectionEvent as TFaceDetectionEvent } from "../api/faceDetectionEvent/FaceDetectionEvent";

export const FACEDETECTIONEVENT_TITLE_FIELD = "id";

export const FaceDetectionEventTitle = (
  record: TFaceDetectionEvent
): string => {
  return record.id?.toString() || String(record.id);
};
