import React from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from './TextInput';
import { useAppStateContext } from '../Reducers/AppStateContext';

const Step4 = () => {
    const navigate = useNavigate();
    const prevClicked = () => {
        navigate('/step-3');
    }
    const nextClicked = () => {
        navigate('/step-5');
    }

    const revClicked = () => {
        navigate('/review');
    }

    const {
        dropdowns, setDropdownOption, checkboxStates, toggleCheckbox,
    } = useAppStateContext();

    const handleDropdownChange = (dropdownName, e) => {
        setDropdownOption(dropdownName, e.target.value);
    };

    return (
        <section>
            <div className="container" style={{ height: '100vh' }}>
                <div className="main">
                    <div className="main-div">
                        <div className="left">
                            <div className='sec'>Personal details</div>
                            <div className='sec'>Your Address</div>
                            <div className='sec'>Educational Details</div>
                            <div className='sec active'>Work Experience Details</div>
                            <div className='sec'>Other Details</div>
                            <div className='sec'>Resume / CV</div>
                            <button className="rev-btn" onClick={revClicked}>
                                Check review
                            </button>
                        </div>
                        <div className="right">
                            <form className='main-scroll'>

                                <TextInput type="text" field="input13" placeholder="You can choose more than one" label="Preferred Coding Language:" />

                                <div className="info-box">
                                    <label for="lang">Strength of your choosen language:</label>
                                    <select value={dropdowns.dropdown1} onChange={(e) => handleDropdownChange('dropdown1', e)}>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Advanced">Advanced</option>
                                    </select>
                                </div>

                                <div className="info-box">
                                    <label>Applied for:</label>
                                    <span>You can chose more then one field</span>
                                    <div className='chk scroll mob'>
                                        <div className='opt'>
                                            <input type="checkbox" value="React Developer" 
                                            checked={checkboxStates.checkbox1}
                                            onChange={() => toggleCheckbox('checkbox1')}/>
                                            <div>React Developer</div>
                                        </div>

                                        <div className='opt'>
                                            <input type="checkbox" value="WordPress Developer" 
                                            checked={checkboxStates.checkbox2}
                                            onChange={() => toggleCheckbox('checkbox2')}/>
                                            <div>WordPress Developer</div>
                                        </div>

                                        <div className='opt'>
                                            <input type="checkbox" value="Node.js Developer" 
                                            checked={checkboxStates.checkbox3}
                                            onChange={() => toggleCheckbox('checkbox3')}/>
                                            <div>Node.js Developer</div>
                                        </div>

                                        <div className='opt'>
                                            <input type="checkbox" value="Flutter Developer" 
                                            checked={checkboxStates.checkbox4}
                                            onChange={() => toggleCheckbox('checkbox4')}/>
                                            <div>Flutter Developer</div>
                                        </div>

                                        <div className='opt'>
                                            <input type="checkbox" value="Android Developer" 
                                            checked={checkboxStates.checkbox5}
                                            onChange={() => toggleCheckbox('checkbox5')}/>
                                            <div>Android Developer</div>
                                        </div>

                                        <div className='opt'>
                                            <input type="checkbox" value="IOS Developer" 
                                            checked={checkboxStates.checkbox6}
                                            onChange={() => toggleCheckbox('checkbox6')}/>
                                            <div>IOS Developer</div>
                                        </div>

                                        <div className='opt'>
                                            <input type="checkbox" value="UI/UX Designer" 
                                            checked={checkboxStates.checkbox7}
                                            onChange={() => toggleCheckbox('checkbox7')}/>
                                            <div>UI/UX Designer</div>
                                        </div>

                                        <div className='opt'>
                                            <input type="checkbox" value="Graphics Developer" 
                                            checked={checkboxStates.checkbox8}
                                            onChange={() => toggleCheckbox('checkbox8')}/>
                                            <div>Graphics Designer</div>
                                        </div>

                                        <div className='opt'>
                                            <input type="checkbox" value="Blog Writing" 
                                            checked={checkboxStates.checkbox9}
                                            onChange={() => toggleCheckbox('checkbox9')}/>
                                            <div>Blog Writing</div>
                                        </div>

                                        <div className='opt'>
                                            <input type="checkbox" value="Data Collection" 
                                            checked={checkboxStates.checkbox10}
                                            onChange={() => toggleCheckbox('checkbox10')}/>
                                            <div>Data Collection</div>
                                        </div>

                                    </div>
                                </div>

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

export default Step4;
