import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import HomeContainer from "./containers/Home/Home.container";
import TodoContainer from "./containers/Todo/Todo.container";
import UserContainer from "./containers/User/User.container";
import UseraddContainer from "./containers/User/UserAdd.container";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route element={<HomeContainer />} path="/" />
                <Route element={<TodoContainer />} path="/todos" />
                <Route element={<UserContainer />} path="/users" />
                <Route element={<UseraddContainer />} path="/users/add" />
                <Route element={<UseraddContainer />} path="/users/edit/:userId" />
            </Routes>
        </BrowserRouter>
    );
}