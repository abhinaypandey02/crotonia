import React from 'react'
import {Button, Form} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { signUpWithEmailPassword } from '../utils/firebase/auth';
export default function LoginForm() {
    const {register,handleSubmit}=useForm();

    function onSubmit(data:any){
        signUpWithEmailPassword(data.email,data.password)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control {...register("name",{required:true})} />
                    
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" {...register("email")} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" {...register("password")}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" {...register("confirmPassword")}/>
                </Form.Group>
                <Button type="submit">Sign Up</Button>
            </Form>
        </div>
    )
}
