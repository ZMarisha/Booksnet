import React from "react";
import { useAppSelector } from "../../hook";


const Error:React.FC = () => {

    const error = useAppSelector(state => state.bookListSlice.error)

    return (
        <h2>{error}</h2>
    )
    
}

export default Error;