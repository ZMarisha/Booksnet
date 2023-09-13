import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import arrow from '../../images/arrow.svg';


const BtnBack:React.FC = () => {

    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate(-1)} icon={arrow} disabled={false}>Back</Button>
    )
}


export default BtnBack;