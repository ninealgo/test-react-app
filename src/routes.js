import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";


import HomeContainer from "./containers/Home/Home.container";
import TodoContainer from "./containers/Todo/Todo.container";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route element={<HomeContainer />} path="/" />
                <Route element={<TodoContainer />} path="/todos" />
            </Routes>
        </BrowserRouter>
    );
}