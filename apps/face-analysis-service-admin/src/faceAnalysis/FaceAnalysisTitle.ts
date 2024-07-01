import { FaceAnalysis as TFaceAnalysis } from "../api/faceAnalysis/FaceAnalysis";

export const FACEANALYSIS_TITLE_FIELD = "id";

export const FaceAnalysisTitle = (record: TFaceAnalysis): string => {
  return record.id?.toString() || String(record.id);
};
