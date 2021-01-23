import React from "react";
import BreadCrumbs from "share/components/molecules/bread-crumbs";
import { withRouter } from "react-router";

const BreadCrumbsExample = (props) => {
  return (
    <div>
        <BreadCrumbs subroutesList={props.subRoutesList} routesList={props.routesList} history={props.history}/>

    </div>
  );
};

export default withRouter(BreadCrumbsExample);
