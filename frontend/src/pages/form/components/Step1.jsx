import React, { useState } from 'react';
import TextInput from './TextInput';

const Step1 = () => {

    return (
        <div className="main-div">
            <div className="left">
                <div className='sec active'>Personal details</div>
                <div className='sec'>Your Address</div>
                <div className='sec'>Educational Details</div>
                <div className='sec'>Work Experience Details</div>
                <div className='sec'>Other Details</div>
                <div className='sec'>Resume / CV</div>
            </div>
            <div className="right">
                <form className='main-scroll'>
                    <TextInput type="text" field="input1" placeholder="Enter your name" label="Name:" />

                    <TextInput type="email" field="input2" placeholder="Enter your email address" label="Email:" />

                    <TextInput type="tel" field="input3" placeholder="Enter your phone number" label="Contact Phone Number:" />

                    <TextInput type="tel" field="input4" placeholder="Enter your whatsapp number" label="Whatsapp Number:" />

                </form>
            </div>
        </div>
    );
};

export default Step1;
