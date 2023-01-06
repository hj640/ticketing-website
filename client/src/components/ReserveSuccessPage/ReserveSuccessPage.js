import React from 'react'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function ReserveSuccessPage() {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate("/");
    }

    return (
        <div className="reserveSuccessPage">
            <span>🥳</span>
            <h1>THANK YOU FOR YOUR RESERVATION</h1>
            <h2>Your Reservation Has Been Successful</h2>
            <h3>Reminded that the outcome of the reservation would be released on May 23, 2023. 
               <br/>You have to replay our email within 3 days.</h3>
            <div className="mainPage-btn">
                <button onClick={onClickHandler}>To Main Page</button>
            </div>
        </div>
    )
}

export default ReserveSuccessPage;