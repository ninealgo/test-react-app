import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button } from "reactstrap";
import { userListApi, userDeleteApi } from "../../apis/api";

function UserContainer() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const getUserListApi = async () => {
        const userData = await userListApi();
        setUsers(userData)
    }

    useEffect(() => {
        getUserListApi();
    }, []);

    const onDelete = async (id) => {
        const deleteApiResult = await userDeleteApi(id);
        getUserListApi();
    }

    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th> # </th>
                        <th> Name </th>
                        <th> Email </th>
                        <th> Age </th>
                        <th> Operation </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, idx) => {
                        return (
                            <tr>
                                <th scope="row"> {idx + 1} </th>
                                <td> {user.name} </td>
                                <td> {user.email} </td>
                                <td> {user.age} </td>
                                <td>
                                    <Button onClick={() => navigate(`/users/${user.id}`)}>View Details</Button> &nbsp;
                                    <Button onClick={() => navigate(`/users/edit/${user.id}`)}>Edit Details</Button> &nbsp;
                                    <Button onClick={() => onDelete(user.id)}>Delete</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div >
    )
}

export default UserContainer;