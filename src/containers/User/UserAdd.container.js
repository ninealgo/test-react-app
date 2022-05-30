import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Button, FormText, Alert } from "reactstrap";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { userAddApi } from "../../apis/api";


const UserAddSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    age: yup.number().min(18).max(60).required()
});

function UserAddContainer() {
    // const redirect = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const form = useForm({ resolver: yupResolver(UserAddSchema) });
    const onSubmit = async (values) => {
        const newUserData = await userAddApi(values);
        if (newUserData.id) {
            // alert("User created successfully....");
            // redirect("/users");
            setShowAlert(true);

            form.reset();
        }
    }

    useEffect(() => {
        if (showAlert) {
            setTimeout(function () {
                setShowAlert(false);
            }, 5000);
        }
    }, [showAlert]);

    return (
        <div className="container">

            {showAlert && <Alert color="success" >
                User Created successfully.
            </Alert>}

            <Form onSubmit={form.handleSubmit(onSubmit)}>
                <FormGroup>
                    <Label for="name">
                        Name
                    </Label>
                    <input
                        {...form.register("name")}
                        id="name"
                        placeholder="Enter your name"
                        type="text"
                    />
                    <br />
                    {form?.formState?.errors?.name?.message && <FormText>{form.formState.errors.name.message}</FormText>}
                </FormGroup>
                <FormGroup>
                    <Label for="email">
                        Email
                    </Label>
                    <input
                        {...form.register("email")}
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                    />
                    <br />
                    {form?.formState?.errors?.email?.message && <FormText>{form.formState.errors.email.message}</FormText>}
                </FormGroup>

                <FormGroup>
                    <Label for="age">
                        Age
                    </Label>
                    <input
                        {...form.register("age")}
                        id="age"
                        placeholder="Enter your age"
                        type="number"
                    />
                    <br />
                    {form?.formState?.errors?.age?.message && <FormText>{form.formState.errors.age.message}</FormText>}
                </FormGroup>


                <Button type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default UserAddContainer