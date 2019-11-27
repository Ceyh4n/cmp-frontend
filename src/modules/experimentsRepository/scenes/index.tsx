import React from "react";

import { Route, Switch } from "react-router-dom";
import { moduleNames as experimentsNames } from "../reducers/MainReducer";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";

import PrivateRoute from "components/PrivateRoute";
import ExperimentsMainPage from "./MainPage";
import ExperimentsRepository from "./ExperimentsPage"

class ExperimentsScenes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BreadcrumbsItem to={`/${experimentsNames.url}`}>Experiments Repository</BreadcrumbsItem>
        <Switch>
          <Route
              path={`/${experimentsNames.url}/repository`}
              component={ExperimentsRepository}
          />
          <Route component={ExperimentsMainPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default ExperimentsScenes;
