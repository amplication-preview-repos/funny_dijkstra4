import { FaceAnalysisWhereInput } from "./FaceAnalysisWhereInput";
import { FaceAnalysisOrderByInput } from "./FaceAnalysisOrderByInput";

export type FaceAnalysisFindManyArgs = {
  where?: FaceAnalysisWhereInput;
  orderBy?: Array<FaceAnalysisOrderByInput>;
  skip?: number;
  take?: number;
};
