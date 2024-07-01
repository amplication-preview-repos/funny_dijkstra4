import { Camera as TCamera } from "../api/camera/Camera";

export const CAMERA_TITLE_FIELD = "name";

export const CameraTitle = (record: TCamera): string => {
  return record.name?.toString() || String(record.id);
};
