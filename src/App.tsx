import React from "react";
import "./App.css";
import LoginPage from "./pages/login/loginPage";
import Home from "./pages/home/home";
import NavigationBar from "./components/navigationBar/navigationBar";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import SignupPage from "./pages/signup/signupPage";
import { useUser } from "./contexts/userContext";
import LoadingScreen from "./components/loadingScreen/loadingScreen";
function App() {
    const [user] = useUser();
    if (user === undefined) {
        return <LoadingScreen />;
    }
    return (
        <div className="App">
            <NavigationBar />
            <HashRouter>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/login" exact>
                        {user ? <Redirect to="/" /> : <LoginPage />}
                    </Route>
                    <Route path="/signup" exact>
                        {user ? <Redirect to="/" /> : <SignupPage />}
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
