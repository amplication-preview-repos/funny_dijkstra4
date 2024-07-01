import { FaceDetectionEventListRelationFilter } from "../faceDetectionEvent/FaceDetectionEventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CameraWhereInput = {
  faceDetectionEvents?: FaceDetectionEventListRelationFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
};
