import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CameraTitle } from "../camera/CameraTitle";
import { FaceAnalysisTitle } from "../faceAnalysis/FaceAnalysisTitle";

export const FaceDetectionEventCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
