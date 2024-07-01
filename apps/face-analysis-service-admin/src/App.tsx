import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CameraList } from "./camera/CameraList";
import { CameraCreate } from "./camera/CameraCreate";
import { CameraEdit } from "./camera/CameraEdit";
import { CameraShow } from "./camera/CameraShow";
import { FaceAnalysisList } from "./faceAnalysis/FaceAnalysisList";
import { FaceAnalysisCreate } from "./faceAnalysis/FaceAnalysisCreate";
import { FaceAnalysisEdit } from "./faceAnalysis/FaceAnalysisEdit";
import { FaceAnalysisShow } from "./faceAnalysis/FaceAnalysisShow";
import { FaceDetectionEventList } from "./faceDetectionEvent/FaceDetectionEventList";
import { FaceDetectionEventCreate } from "./faceDetectionEvent/FaceDetectionEventCreate";
import { FaceDetectionEventEdit } from "./faceDetectionEvent/FaceDetectionEventEdit";
import { FaceDetectionEventShow } from "./faceDetectionEvent/FaceDetectionEventShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FaceAnalysisService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Camera"
          list={CameraList}
          edit={CameraEdit}
          create={CameraCreate}
          show={CameraShow}
        />
        <Resource
          name="FaceAnalysis"
          list={FaceAnalysisList}
          edit={FaceAnalysisEdit}
          create={FaceAnalysisCreate}
          show={FaceAnalysisShow}
        />
        <Resource
          name="FaceDetectionEvent"
          list={FaceDetectionEventList}
          edit={FaceDetectionEventEdit}
          create={FaceDetectionEventCreate}
          show={FaceDetectionEventShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
