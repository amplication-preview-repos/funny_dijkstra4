import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { CameraTitle } from "../camera/CameraTitle";
import { FaceAnalysisTitle } from "../faceAnalysis/FaceAnalysisTitle";

export const FaceDetectionEventEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="camera.id" reference="Camera" label="camera">
          <SelectInput optionText={CameraTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="faceAnalysis.id"
          reference="FaceAnalysis"
          label="faceAnalysis"
        >
          <SelectInput optionText={FaceAnalysisTitle} />
        </ReferenceInput>
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Edit>
  );
};
