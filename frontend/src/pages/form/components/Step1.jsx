import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from './TextInput';

const Step1 = () => {
    const navigate = useNavigate();
    const nextClicked = () => {
        navigate('/step-2');
    }

    const revClicked = () => {
        navigate('/review');
    }

    return (
        <section>
            <div className="container" style={{ height: '100vh' }}>
                <div className="main">
                    <div className="main-div">
                        <div className="left">
                            <div className='sec active'>Personal details</div>
                            <div className='sec'>Your Address</div>
                            <div className='sec'>Educational Details</div>
                            <div className='sec'>Work Experience Details</div>
                            <div className='sec'>Other Details</div>
                            <div className='sec'>Resume / CV</div>
                            <button className="rev-btn" onClick={revClicked}>
                                Check review
                            </button>
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
                    <div className="button but">
                        <button className='next' onClick={nextClicked}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Step1;
