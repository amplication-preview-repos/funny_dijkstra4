import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CAMERA_TITLE_FIELD } from "../camera/CameraTitle";
import { FACEANALYSIS_TITLE_FIELD } from "./FaceAnalysisTitle";

export const FaceAnalysisShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="age" source="age" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="emotions" source="emotions" />
        <TextField label="eyeColor" source="eyeColor" />
        <TextField label="faceShape" source="faceShape" />
        <TextField label="gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="imageUrl" source="imageUrl" />
        <TextField label="skinTone" source="skinTone" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="FaceDetectionEvent"
          target="faceAnalysisId"
          label="FaceDetectionEvents"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="camera"
              source="camera.id"
              reference="Camera"
            >
              <TextField source={CAMERA_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="faceAnalysis"
              source="faceanalysis.id"
              reference="FaceAnalysis"
            >
              <TextField source={FACEANALYSIS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
