import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from "./pages/userList";
import User from "./pages/user";

const App = () => {
    return(
        <div className="app">
            <Router>
                <Switch>
                    <Route path={"/"} exact component={UserList} />
                    <Route path={"/user/:id"} component={User} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;