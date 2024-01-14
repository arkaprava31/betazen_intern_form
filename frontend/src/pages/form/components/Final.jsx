import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCommonContext } from '../../Contexts/CommonContext';
import { useAppStateContext } from '../Reducers/AppStateContext';
import axios from 'axios';

const Final = () => {
    const navigate = useNavigate();

    const { state } = useCommonContext();

    const [tru, setTru] = useState(false);

    const prevClicked = () => {
        navigate('/step-5');
    }

    const editClicked = () => {
        navigate('/step-1');
    }

    const editClicked1 = () => {
        navigate('/step-2');
    }

    const editClicked2 = () => {
        navigate('/step-3');
    }

    const editClicked3 = () => {
        navigate('/step-4');
    }

    const editClicked4 = () => {
        navigate('/step-5');
    }

    const { dropdowns, checkboxStates } = useAppStateContext();

    const [submitting, setSubmitting] = useState(false);

    const nextClicked = async () => {
        if (submitting) {
            return;
        }

        setSubmitting(true);

        try {
            const response = await axios.post('http://localhost:5050/api/sendData', {
                personalDetails: {
                    name: state.input1,
                    email: state.input2,
                    phone: state.input3,
                    whatsapp: state.input4,
                },
                addressDetails: {
                    address: state.input6,
                    state: state.input7,
                    country: state.input8,
                    pin: state.input9,
                },
                educationDetails: {
                    college: state.input10,
                    dept: state.input11,
                    year: state.input12,
                },
                workDetails: {
                    codinglang: state.input13,
                    level: dropdowns.dropdown1,
                    ReactDeveloper: checkboxStates.checkbox1,
                    WordPressDeveloper: checkboxStates.checkbox2,
                    NodejsDeveloper: checkboxStates.checkbox3,
                    FlutterDeveloper: checkboxStates.checkbox4,
                    AndroidDeveloper: checkboxStates.checkbox5,
                    IOSDeveloper: checkboxStates.checkbox6,
                    UIUXDesigner: checkboxStates.checkbox7,
                    GraphicsDesigner: checkboxStates.checkbox8,
                    BlogWritingDataCollection: checkboxStates.checkbox9,
                    DataCollection: checkboxStates.checkbox10,
                },
                otherDetails: {
                    expectations: state.input14,
                    dailyTime: state.input15,
                    startingDate: state.input16,
                    whyYou: state.input17,
                    linkdin: state.input18,
                    github: state.input19,
                    drive: state.input20,
                    msgForUs: state.input21,
                }
            });

            console.log(response.data);


            navigate('/');

            window.location.reload(false);

        } catch (error) {
            console.error('Error submitting data:', error);
        } finally {
            setSubmitting(false);
        }

        if (state.input1 && state.input2 && state.input3 && state.input4 && state.input5 && state.input6 && state.input7 && state.input8 && state.input9 && state.input10 && state.input11 && state.input12 && state.input13 && state.input14 && state.input15 && state.input16 && state.input17 && state.input18 && state.input19 && state.input20 && state.input21) {
            setTru(true);
        }
    };

    return (
        <section>
            <div className="container" style={{ height: '100vh' }}>
                <div className="main">
                    <div className="ans final">

                        <div className='box-info'>
                            <div className="info-head">
                                <div className="head-field">Personal details</div>
                                <div className="icon" onClick={editClicked}>Edit</div>
                            </div>

                            <div className='ans-boxes'>
                                <div className="info1">
                                    <div className="field">Name:</div>
                                    {
                                        state.input1 ?
                                            <div className="data">{state.input1}</div> :
                                            <div className="data void">Field is empty!</div>
                                    }
                                </div>
                                <div className="info1">
                                    <div className="field">Email:</div>
                                    {
                                        state.input2 ?
                                            <div className="data">{state.input2}</div> :
                                            <div className="data void">Field is empty!</div>
                                    }
                                </div>
                                <div className="info1">
                                    <div className="field">Phone Number:</div>
                                    {
                                        state.input3 ?
                                            <div className="data">{state.input3}</div> :
                                            <div className="data void">Field is empty!</div>
                                    }
                                </div>
                                <div className="info1">
                                    <div className="field">Whatsapp Number:</div>
                                    {
                                        state.input4 ?
                                            <div className="data">{state.input4}</div> :
                                            <div className="data void">Field is empty!</div>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='box-info'>
                            <div className="info-head">
                                <div className="head-field">Address details</div>
                                <div className="icon" onClick={editClicked1}>Edit</div>
                            </div>

                            <div className='ans-boxes'>
                                <div className="info1">
                                    <div className="field">Address:</div>
                                    {
                                        state.input6 ?
                                            <div className="data">{state.input6}</div> :
                                            <div className="data void">Field is empty!</div>
                                    }
                                </div>
                                <div className="info1">
                                    <div className="field">State:</div>
                                    {
                                        state.input7 ?
                                            <div className="data">{state.input7}</div> :
                                            <div className="data void">Field is empty!</div>
                                    }
                                </div>
                                <div className="info1">
                                    <div className="field">Country:</div>
                                    {
                                        state.input8 ?
                                            <div className="data">{state.input8}</div> :
                                            <div className="data void">Field is empty!</div>
                                    }
                                </div>
                                <div className="info1">
                                    <div className="field">Postal Code:</div>
                                    {
                                        state.input9 ?
                                            <div className="data">{state.input9}</div> :
                                            <div className="data void">Field is empty!</div>
                                    }
                                </div>

                            </div>
                        </div>

                        <div className='box-info'>
                            <div className="info-head">
                                <div className="head-field">Educational Details</div>
                                <div className="icon" onClick={editClicked2}>Edit</div>
                            </div>
                            <div className='ans-boxes'>
                                <div className="info1">
                                    <div className="field">College Name:</div>
                                    {
                                        state.input10 ?
                                            <div className="data">{state.input10}</div> :
                                            <div className="data void">Field is empty!</div>
                                    }
                                </div>

                                <div className="info1">
                                    <div className="field">Department:</div>
                                    {
                                        state.input11 ?
                                            <div className="data">{state.input11}</div> :
                                            <div className="data void">Field is empty!</div>
                                    }
                                </div>

                                <div className="info1">
                                    <div className="field">Study year:</div>
                                    {
                                        state.input12 ?
                                            <div className="data">{state.input12}</div> :
                                            <div className="data void">Field is empty!</div>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='box-info'>
                            <div className="info-head">
                                <div className="head-field">Work Experience Details</div>
                                <div className="icon" onClick={editClicked3}>Edit</div>
                            </div>

                            <div className="ans-boxes">
                                <div className="info1">
                                    <div className="field">Preferred Coding Language:</div>
                                    {
                                        state.input13 ?
                                            <div className="data">{state.input13}</div> :
                                            <div className="data void">Field is empty!</div>
                                    }
                                </div>

                                <div className="info1">
                                    <div className="field">Strength of your choosen language:</div>
                                    <div className="data">
                                        {dropdowns.dropdown1 == 'Advanced' ? "Advanced" : (dropdowns.dropdown1 == 'Intermediate' ? "Intermediate" : "Beginner")}
                                    </div>
                                </div>

                                <div className="info1">
                                    <div className="field">Applied for:</div>
                                    <div className="data col">
                                        <div className={checkboxStates.checkbox1 ? 'mb-2' : 'hidden'}>React Developer</div>
                                        <div className={checkboxStates.checkbox2 ? 'mb-2' : 'hidden'}>WordPress Developer</div>
                                        <div className={checkboxStates.checkbox3 ? 'mb-2' : 'hidden'}>Node.js Developer</div>
                                        <div className={checkboxStates.checkbox4 ? 'mb-2' : 'hidden'}>Flutter Developer</div>
                                        <div className={checkboxStates.checkbox5 ? 'mb-2' : 'hidden'}>Android Developer</div>
                                        <div className={checkboxStates.checkbox6 ? 'mb-2' : 'hidden'}>IOS Developer</div>
                                        <div className={checkboxStates.checkbox7 ? 'mb-2' : 'hidden'}>UI/UX Designer</div>
                                        <div className={checkboxStates.checkbox8 ? 'mb-2' : 'hidden'}>Graphics Designer</div>
                                        <div className={checkboxStates.checkbox9 ? 'mb-2' : 'hidden'}>Blog Writing</div>
                                        <div className={checkboxStates.checkbox10 ? 'my-0' : 'hidden'}>Data Collection</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='box-info'>
                            <div className="info-head">
                                <div className="head-field">Other Details</div>
                                <div className="icon" onClick={editClicked4}>Edit</div>
                            </div>

                            <div className="ans-boxes">
                                <div className="info1 colans">
                                    <div className="field">What are your expectations from this internship?</div>
                                    {
                                        state.input14 ?
                                            <div className="data">{state.input14}</div> :
                                            <div className="data void">Field is empty!</div>
                                    }
                                </div>

                                <div className="info1 rows">
                                    <div className="field">How much time can you devote for this internship on daily basis?</div>
                                    {
                                        state.input15 ?
                                            <div className="data">{state.input15}</div> :
                                            <div className="data void">Field is empty!</div>
                                    }
                                </div>

                                <div className="info1 rows">
                                    <div className="field">If selected, when are you available to start/join?</div>
                                    {
                                        state.input16 ?
                                            <div className="data">{state.input16}</div> :
                                            <div className="data void">Field is empty!</div>
                                    }
                                </div>

                                <div className="info1 colans">
                                    <div className="field">Why should we select you?</div>
                                    {
                                        state.input17 ?
                                            <div className="data">{state.input17}</div> :
                                            <div className="data void">Field is empty!</div>
                                    }
                                </div>

                                <div className="info1 rows">
                                    <div className="field">Linkedin Profile:</div>
                                    {
                                        state.input18 ?
                                            <div className="data">{state.input18}</div> :
                                            <div className="data void">Field is empty!</div>
                                    }
                                </div>

                                <div className="info1 rows">
                                    <div className="field">GitHub Profile:</div>
                                    {
                                        state.input19 ?
                                            <div className="data">{state.input19}</div> :
                                            <div className="data void">Field is empty!</div>
                                    }
                                </div>

                                <div className="info1 rows">
                                    <div className="field">Drive link:</div>
                                    {
                                        state.input20 ?
                                            <div className="data">{state.input20}</div> :
                                            <div className="data void">Field is empty!</div>
                                    }
                                </div>

                                <div className="info1 colans">
                                    <div className="field">Any Message For Us:</div>
                                    {
                                        state.input21 ?
                                            <div className="data">{state.input21}</div> :
                                            <div className="data void">Field is empty!</div>
                                    }
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="button but">
                        <button className='prev' onClick={prevClicked}>
                            Previous
                        </button>

                        <button className='next' style={{ background: '#008631' }} onClick={nextClicked}>
                            Submit
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Final;
