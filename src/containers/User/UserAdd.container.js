import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Form, FormGroup, Label, Button, FormText, Alert } from "reactstrap";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { userAddApi, getSingleUserById, userUpdateApi } from "../../apis/api";


const UserAddSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    age: yup.number().min(18).max(60).required()
});

function UserAddContainer(props) {
    const params = useParams();
    const [singleUser, setSingleUser] = useState({});

    // const redirect = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const form = useForm({ resolver: yupResolver(UserAddSchema) });
    const onSubmit = async (values) => {

        if (params.userId) {
            const newUserData = await userUpdateApi(params.userId, values);
            if (newUserData.id) {
                // alert("User created successfully....");
                // redirect("/users");
                setShowAlert(true);

                form.reset();
            }
        } else {
            const newUserData = await userAddApi(values);
            if (newUserData.id) {
                // alert("User created successfully....");
                // redirect("/users");
                setShowAlert(true);

                form.reset();
            }
        }
    }

    useEffect(() => {
        if (showAlert) {
            setTimeout(function () {
                setShowAlert(false);
            }, 5000);
        }
    }, [showAlert]);


    const getSingleUserApi = async (userId) => {
        const userData = await getSingleUserById(userId);
        setSingleUser(userData)
    }

    useEffect(() => {
        if (params.userId) {
            getSingleUserApi(params.userId)
        }
    }, [params.userId])

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
                        value={singleUser?.name}
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
                        value={singleUser?.email}
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
                        value={singleUser?.age}
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