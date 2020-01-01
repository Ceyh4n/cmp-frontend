import React from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps, Route, Switch } from "react-router";

import { moduleNames as experimentsNames } from "../../reducers/MainReducer";
import { AppState } from "reducers/GlobalReducer";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { ExperimentVariable } from "models/Experiment";
import { getVarsById } from "modules/experimentsRepository/selectors";
import { loadExperimentVars } from "modules/experimentsRepository/actions";
import Pager from "components/Pager";
import { history } from "Application";
import { Link } from "react-router-dom";
import VarDataPage from "./VarDataPage";

interface Props extends RouteComponentProps {
  variables: ExperimentVariable[];
  loadVariables: Function;
}

interface State {}

class ExperimentVarsPage extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { loadVariables, match, variables } = this.props;
    !variables && loadVariables((match.params as any).experimentId);
  }

  render() {
    const { match, variables } = this.props;
    return (
      <>
        <BreadcrumbsItem
          to={`/${experimentsNames.url}/repository/detail/${
            (match.params as any).experimentId
          }/variables`}
        >
          Experiment variables
        </BreadcrumbsItem>
        <Switch>
          <Route
            path={`/${experimentsNames.url}/repository/detail/:experimentId/variables/:variableId/data`}
            component={VarDataPage}
          />

          <Route
            render={() => (
              <section className="section p-b-0">
                <div className="container">
                  <Pager countOnPage={5}>
                    {variables &&
                      variables.map((item, i) => (
                        <div className="box variable-item" key={`note-${i}`}>
                          <strong>{item.name}</strong>
                          <span>({item.code})</span>
                          <span> | {item.type}</span>
                          <Link
                            className="button is-primary"
                            to={`/${experimentsNames.url}/repository/detail/${
                              (match.params as any).experimentId
                            }/variables/${item.id}/data`}
                          >
                            View data
                          </Link>
                        </div>
                      ))}
                  </Pager>
                </div>
              </section>
            )}
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps) => {
  return {
    variables: getVarsById(state, ownProps.match.params.experimentId)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadVariables: bindActionCreators(loadExperimentVars, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ExperimentVarsPage);
