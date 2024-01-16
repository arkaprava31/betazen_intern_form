import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from './TextInput';

const Step3 = () => {

    return (
        <div className="main-div">
            <div className="left">
                <div className='sec'>Personal details</div>
                <div className='sec'>Your Address</div>
                <div className='sec active'>Educational Details</div>
                <div className='sec'>Work Experience Details</div>
                <div className='sec'>Other Details</div>
                <div className='sec'>Resume / CV</div>
            </div>
            <div className="right">
                <form className='main-scroll'>

                    <TextInput type="text" field="input10" placeholder="Name of your college" label="Your College Name:" />


                    <TextInput type="text" field="input11" placeholder="Department" label="Department:" />

                    <TextInput type="text" field="input12" placeholder="Enter your study year (e.g. 1st year)" label="Study year (Academic Session 2023-24):" />

                </form>
            </div>
        </div>
    );
};

export default Step3;
