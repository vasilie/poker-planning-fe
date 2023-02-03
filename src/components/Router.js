import React, { useContext, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import Room from "../pages/Room";
import identify from "../lib/uniq";
import { SocketContext } from "../contexts/SocketContext";

const GenericNotFound = () => <div>Not Found</div>;


const Router = () => {
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    identify();
  }, []);
  
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Room} />
      </Switch>
    </>
  );
};

export default Router;