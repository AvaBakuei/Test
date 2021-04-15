import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from "./pages/userList";
import User from "./pages/user";
import Loading from './utils/helpers/Loading';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       setLoading(false);
    }, []);

    return(
        <div className="app">
            {loading ? <Loading/> : (
                <Router>
                    <Switch>
                        <Route path={"/"} exact component={UserList} />
                        <Route path={"/user/:id"} component={User} />
                    </Switch>
                </Router>
            )}
        </div>
    )
}

export default App;