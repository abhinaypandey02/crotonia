import React from "react";
import { Container } from "react-bootstrap";
import SignUpForm from "./signupForm";
import "./signup.scss";
export default function SignupPage() {
    return (
        <Container className="signup">
            <div className="display-4 text-center heading">Register</div>
            <div>
                <SignUpForm />
            </div>
        </Container>
    );
}
