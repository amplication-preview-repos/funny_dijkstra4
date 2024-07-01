import { JsonValue } from "type-fest";
import { FaceDetectionEvent } from "../faceDetectionEvent/FaceDetectionEvent";

export type FaceAnalysis = {
  age: number | null;
  createdAt: Date;
  emotions: JsonValue;
  eyeColor?: "Option1" | null;
  faceDetectionEvents?: Array<FaceDetectionEvent>;
  faceShape?: "Option1" | null;
  gender?: "Option1" | null;
  id: string;
  imageUrl: JsonValue;
  skinTone?: "Option1" | null;
  timestamp: Date | null;
  updatedAt: Date;
};
