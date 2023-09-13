import React from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";

const Layout:React.FC = () => {

    return (
        <>
            <SearchBar />
            <main className="container main__padding">
                <Outlet></Outlet>
            </main>
        </>
    )
}

export default Layout;