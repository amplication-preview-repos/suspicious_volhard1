import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { IphoneList } from "./iphone/IphoneList";
import { IphoneCreate } from "./iphone/IphoneCreate";
import { IphoneEdit } from "./iphone/IphoneEdit";
import { IphoneShow } from "./iphone/IphoneShow";
import { LogList } from "./log/LogList";
import { LogCreate } from "./log/LogCreate";
import { LogEdit } from "./log/LogEdit";
import { LogShow } from "./log/LogShow";
import { TextMessageList } from "./textMessage/TextMessageList";
import { TextMessageCreate } from "./textMessage/TextMessageCreate";
import { TextMessageEdit } from "./textMessage/TextMessageEdit";
import { TextMessageShow } from "./textMessage/TextMessageShow";
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
        title={"TextTransferService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Iphone"
          list={IphoneList}
          edit={IphoneEdit}
          create={IphoneCreate}
          show={IphoneShow}
        />
        <Resource
          name="Log"
          list={LogList}
          edit={LogEdit}
          create={LogCreate}
          show={LogShow}
        />
        <Resource
          name="TextMessage"
          list={TextMessageList}
          edit={TextMessageEdit}
          create={TextMessageCreate}
          show={TextMessageShow}
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
