import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CAMERA_TITLE_FIELD } from "./CameraTitle";
import { FACEANALYSIS_TITLE_FIELD } from "../faceAnalysis/FaceAnalysisTitle";

export const CameraShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="FaceDetectionEvent"
          target="cameraId"
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
