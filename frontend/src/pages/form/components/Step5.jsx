import React from 'react';
import { useNavigate } from 'react-router-dom';
import TextAreaInput from './TextAreaInput';
import TextInput from './TextInput';
import FileInputComponent from './FileInput';

const Step5 = () => {
    const navigate = useNavigate();
    const prevClicked = () => {
        navigate('/step-4');
    }
    const nextClicked = () => {
        navigate('/review');
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
                            <div className='sec'>Personal details</div>
                            <div className='sec'>Your Address</div>
                            <div className='sec'>Educational Details</div>
                            <div className='sec'>Work Experience Details</div>
                            <div className='sec active'>Other Details</div>
                            <button className="rev-btn" onClick={revClicked}>
                                Check review
                            </button>
                        </div>
                        <div className="right">
                            <form className="main-scroll">

                                <TextAreaInput field="input14" placeholder="Your answer" label="What are your expectations from this internship?" />

                                <TextInput type='text' field="input15" placeholder="Your answer" label="How much time can you devote for this internship on daily basis?" />

                                <TextInput type='date' field="input16" placeholder="Your answer" label="If selected, when are you available to start/join?" />

                                <TextAreaInput field="input17" placeholder="Your answer" label="Why should we select you?" />

                                <TextInput type='text' field="input18" placeholder="Your answer" label="Linkedin Profile:" />

                                <TextInput type='text' field="input19" placeholder="Your answer" label="GitHub Profile:" />

                                <TextInput type='text' field="input20" placeholder="Share your link" label="Share previous work/project via drive link:" />

                                <TextAreaInput field="input21" placeholder="Your answer" label="Any Message For Us:" />

                            </form>
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

export default Step5;
