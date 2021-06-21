import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./pages/loginForm";
import NavigationBar from "./components/navigation_bar";

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <LoginForm />
        </div>
    );
}

export default App;
