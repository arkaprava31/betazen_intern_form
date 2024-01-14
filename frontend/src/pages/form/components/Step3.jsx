import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from './TextInput';

const Step3 = () => {
    const [other, setOther] = useState(false);

    const otherClicked = () => {
        setOther(state => !state);
    }

    const navigate = useNavigate();
    const prevClicked = () => {
        navigate('/step-2');
    }
    const nextClicked = () => {
        navigate('/step-4');
    }

    const revClicked = () => {
        navigate('/review');
    }
    
    return (
        <section>
            <div className="container" style={{ height: '100vh' }}>
                <div className="main">
                    <div>
                        <div className="main-div">
                            <div className="left">
                                <div className='sec'>Personal details</div>
                                <div className='sec'>Your Address</div>
                                <div className='sec active'>Educational Details</div>
                                <div className='sec'>Work Experience Details</div>
                                <div className='sec'>Other Details</div>
                                <button className="rev-btn" onClick={revClicked}>
                                    Check review
                                </button>
                            </div>
                            <div className="right">
                                <form className='main-scroll'>

                                    <TextInput type="text" field="input10" placeholder="Name of your college" label="Your College Name:" />


                                    <TextInput type="text" field="input11" placeholder="Department" label="Department:" />

                                    {/* <div className="info-box">
                                        <label for="year">Study year:</label>
                                        <span>Academic Session 2023-24</span>
                                        <div className='chk'>
                                            <div className='opt'>
                                                <input type="checkbox" id="firstYear" value="1st Year" />
                                                <div>1st Year</div>
                                            </div>

                                            <div className='opt'>
                                                <input type="checkbox" id="secondYear" value="2nd Year" />
                                                <div>2nd Year</div>
                                            </div>

                                            <div className='opt'>
                                                <input type="checkbox" id="thirdYear" value="3rd Year" />
                                                <div>3rd Year</div>
                                            </div>

                                            <div className='opt'>
                                                <input type="checkbox" id="fourthYear" value="4th Year" />
                                                <div>4th Year</div>
                                            </div>

                                            <div className='opt'>
                                                <input type="checkbox" id="passedOut" value="Passed Out" />
                                                <div>Passed out</div>
                                            </div>

                                            <div className='opt'>
                                                <input type="checkbox" id="other" value="Other"
                                                    onClick={otherClicked} />
                                                <div>Other</div>
                                                <input type="text" style={other ? { display: 'block' } : { display: 'none' }} />
                                            </div>
                                        </div>
                                    </div> */}

                                    <TextInput type="text" field="input12" placeholder="Enter your study year (e.g. 1st year)" label="Study year (Academic Session 2023-24):" />

                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="button but">
                        <button className='prev' onClick={prevClicked}>
                            Previous
                        </button>
                        <button className='next' onClick={nextClicked}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Step3;
