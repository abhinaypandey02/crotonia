import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useUser } from "../../contexts/userContext";
import { defaultUser } from "../../interfaces/userInterface";
import { signUpWithEmailPassword } from "../../utils/firebase/auth";
import { setUserFirestore } from "../../utils/firebase/firestore";

const ERROR_MESSAGES: any = {
    required: "This field is required",
    pattern: "Invalid email address",
    minLength: "The password must be atleast 6 characters",
    validate: "Passwords do not match",
};

export default function SignUpForm() {
    const [, setUser] = useUser();
    const [loading,setLoading]=useState(false);
    const {
        register,
        handleSubmit,
        getValues,
        setError,
        formState: { errors },
    } = useForm();
    function onSubmit(data: any) {
        setLoading(true);
        const newUser = { ...defaultUser, name: data.name, email: data.email };
        signUpWithEmailPassword(data.email, data.password)
            .then(async () => {
                await setUserFirestore(newUser);
                await setUser(newUser);
                setLoading(false);
                
            })
            .catch((error) => {
                if (!ERROR_MESSAGES[error.code]) {
                    ERROR_MESSAGES[error.code] = error.message;
                }
                let field = "confirmPassword";
                switch (error.code) {
                    case "auth/user-not-found": {
                        field = "email";
                        break;
                    }
                }
                setError(field, { type: error.code, message: error.message });
                setLoading(false);
            });
    }

    return (
        <Form noValidate={true} onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="m-2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    placeholder="Enter Name"
                    {...register("name", { required: true })}
                />
                <Form.Text className="text-danger small">
                    {errors.name && ERROR_MESSAGES[errors.name.type]}
                </Form.Text>
            </Form.Group>
            <Form.Group className="m-2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    placeholder="Enter Email"
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
                    placeholder="Enter Password"
                    type="password"
                    {...register("password", { required: true, minLength: 6 })}
                />
                <Form.Text className="text-danger small">
                    {errors.password && ERROR_MESSAGES[errors.password.type]}
                </Form.Text>
            </Form.Group>
            <Form.Group className="m-2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    placeholder="Renter Password"
                    type="password"
                    {...register("confirmPassword", {
                        required: true,
                        minLength: 6,
                        validate: (v) => v === getValues("password"),
                    })}
                />
                <Form.Text className="text-danger small">
                    {errors.confirmPassword &&
                        ERROR_MESSAGES[errors.confirmPassword.type]}
                </Form.Text>
            </Form.Group>
            <Form.Group className="m-2">
                <Button disabled={loading} type="submit">{loading?"Loading...":"Sign Up"}</Button>
            </Form.Group>
        </Form>
    );
}
