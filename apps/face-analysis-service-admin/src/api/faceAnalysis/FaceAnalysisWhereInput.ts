import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FaceDetectionEventListRelationFilter } from "../faceDetectionEvent/FaceDetectionEventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type FaceAnalysisWhereInput = {
  age?: IntNullableFilter;
  emotions?: JsonFilter;
  eyeColor?: "Option1";
  faceDetectionEvents?: FaceDetectionEventListRelationFilter;
  faceShape?: "Option1";
  gender?: "Option1";
  id?: StringFilter;
  imageUrl?: JsonFilter;
  skinTone?: "Option1";
  timestamp?: DateTimeNullableFilter;
};
