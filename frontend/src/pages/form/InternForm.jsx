import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import CV from './CV';

const InternForm = () => {
    const navigate = useNavigate();

    const [currentComponent, setCurrentComponent] = useState(1);

    const nextClicked = () => {
        setCurrentComponent((prevComponent) => (prevComponent % 6) + 1);
    };

    const prevClicked = () => {
        setCurrentComponent((prevComponent) => (prevComponent - 2 + 6) % 6 + 1);
    };


    const renderCurrentComponent = () => {
        switch (currentComponent) {
            case 1:
                return <Step1 />;
            case 2:
                return <Step2 />;
            case 3:
                return <Step3 />;
            case 4:
                return <Step4 />;
            case 5:
                return <Step5 />;
            case 6:
                return <CV />;
            default:
                return null;
        }
    };


    return (
        <section>
            <div className="container" style={{ height: '100vh' }}>
                <div className="main">
                    {
                        renderCurrentComponent()
                    }

                    <div className="button but">
                        {currentComponent !== 1 && (
                            < button className='prev' onClick={prevClicked}>
                                Previous
                            </button>
                        )}

                        {currentComponent !== 6 && (
                            <button className='next' onClick={nextClicked}>
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default InternForm;

