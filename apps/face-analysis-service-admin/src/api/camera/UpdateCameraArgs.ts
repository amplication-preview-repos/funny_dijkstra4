import { CameraWhereUniqueInput } from "./CameraWhereUniqueInput";
import { CameraUpdateInput } from "./CameraUpdateInput";

export type UpdateCameraArgs = {
  where: CameraWhereUniqueInput;
  data: CameraUpdateInput;
};
