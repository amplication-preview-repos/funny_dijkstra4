import { InputJsonValue } from "../../types";
import { FaceDetectionEventUpdateManyWithoutFaceAnalysesInput } from "./FaceDetectionEventUpdateManyWithoutFaceAnalysesInput";

export type FaceAnalysisUpdateInput = {
  age?: number | null;
  emotions?: InputJsonValue;
  eyeColor?: "Option1" | null;
  faceDetectionEvents?: FaceDetectionEventUpdateManyWithoutFaceAnalysesInput;
  faceShape?: "Option1" | null;
  gender?: "Option1" | null;
  imageUrl?: InputJsonValue;
  skinTone?: "Option1" | null;
  timestamp?: Date | null;
};
