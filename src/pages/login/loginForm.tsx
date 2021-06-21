import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { signInWithEmailPassword } from "../../utils/firebase/auth";
import {useState} from 'react';

let ERROR_MESSAGES: any = {
    required: "This field is required",
    pattern: "Invalid email address",
    minLength: "Incorrect email or password",
    "auth/user-not-found": "Incorrect email or password",
    "auth/wrong-password": "Incorrect email or password",
};

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();
    const [loading,setLoading]=useState(false);
    function onSubmit(data: any) {
        setLoading(true);
        signInWithEmailPassword(data.email, data.password).catch((error) => {
            if (!ERROR_MESSAGES[error.code]) {
                ERROR_MESSAGES[error.code] = error.message;
            }
            console.log(error.code);
            let field = "password";
            switch (error.code) {
                case "auth/user-not-found": {
                    field = "email";
                    break;
                }
            }
            setError(field, { type: error.code, message: error.message });
            setLoading(false);
        }).then(()=>{
            setLoading(false);
        });
    }

    return (
        <Form noValidate={true} onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="m-2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    {...register("email", {
                        required: true,
                        pattern:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                />
                <Form.Text className="text-danger small">
                    {errors.email && ERROR_MESSAGES[errors.email.type]}
                </Form.Text>
            </Form.Group>
            <Form.Group className="m-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    {...register("password", { required: true, minLength: 6 })}
                />
                <Form.Text className="text-danger small">
                    {errors.password && ERROR_MESSAGES[errors.password.type]}
                </Form.Text>
            </Form.Group>
            <Form.Group className="m-2">
                <Button disabled={loading} type="submit">{loading?"Loading...":"Login"}</Button>
            </Form.Group>
        </Form>
    );
}
