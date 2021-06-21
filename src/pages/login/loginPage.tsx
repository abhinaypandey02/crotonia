import React from "react";
import LoginForm from "./loginForm";
import { Container } from "react-bootstrap";
import "./login.scss";
export default function LoginPage() {
    return (
        <Container className="login">
            <div className="display-4 text-center heading ">Login</div>
            <div>
                <LoginForm />
            </div>
        </Container>
    );
}
