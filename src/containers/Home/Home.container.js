import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const ValidationSchema = yup.object({
    name: yup.string().required(),
    age: yup.number().positive().integer().required().min(18).max(100)
});


function HomeContainer() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(ValidationSchema)
    });

    const onFormSubmit = () => {
        alert("i am submitted....");
    }


    console.log(register("name"))
    return (
        <div className="container">
            <h2>Todo Add Form</h2>

            <Form onSubmit={handleSubmit(onFormSubmit)}>
                <FormGroup>
                    <Label for="name">
                        Name
                    </Label>
                    <input {...register("name")} />

                    {errors?.name?.message}
                </FormGroup>
                <FormGroup>
                    <Label for="age">
                        Age
                    </Label>
                    <input {...register("age", { valueAsNumber: true })} />
                    {errors?.age?.message}
                </FormGroup>

                <Button type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default HomeContainer;