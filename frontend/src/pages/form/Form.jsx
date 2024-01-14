import React from 'react';
import { useNavigate } from 'react-router-dom';


const Form = () => {
    const navigate = useNavigate();
    const applyClicked = () => {
        navigate("/step-1");
    };

    return (
        <section>
            <div className="container">
                <div className='main'>
                    <div className='heading'>
                        <h1>BetaZen InfoTech Interns Selection Form</h1>
                    </div>
                    <div className='info'>
                        <div className="jd">
                            <h3>Job Description</h3>
                        </div>

                        <div className='box'>
                            <h3>🌟 Join BetaZen InfoTech Internship Program! 🌟</h3>
                            <p>
                                Are you ready to embark on an incredible journey in the world of application development? Look no further, because BetaZen InfoTech is offering an exciting internship opportunity that will set your career in motion!
                            </p>
                        </div>

                        <div className='box'>
                            <h3>🔍 About BetaZen InfoTech Pvt. Ltd.:</h3>
                            <p>
                                BetaZen InfoTech is a dynamic and innovative software company committed to creating groundbreaking solutions. We specialize in developing cutting-edge applications and providing top-notch products to our diverse user groups. With our talented team of experts and a culture that fosters growth and creativity, we are proud to be at the forefront of the industry.
                            </p>
                        </div>

                        <div className='box'>
                            <h3>🌟 Internship Program Overview:</h3>
                            <p>
                                Our internship program is designed to provide you with hands-on experience and exposure to real-world projects. As an intern at BetaZen InfoTech, you will have the opportunity to work alongside our skilled professionals, learn from industry leaders, and contribute to exciting software development initiatives. We believe in empowering our interns and helping them unleash their full potential.
                            </p>
                        </div>

                        <div className='box'>
                            <h3>📌 Internship Details:</h3>
                            <ul>
                                <li><span>Duration:</span> 8-12 weeks (flexible start date)</li>
                                <li><span>Location:</span> Remote (depending on the current situation)</li>
                                <li><span>Mentorship:</span> You will be paired with experienced mentors who will guide and support you throughout your internship.</li>
                                <li><span>Projects:</span> You will work on real projects, making meaningful contributions to our software solutions and gaining valuable experience in the process.</li>
                                <li><span>Team Collaboration:</span> You'll collaborate with cross-functional teams, fostering a spirit of teamwork and innovation.</li>
                            </ul>
                        </div>

                        <div className='box'>
                            <h3>🎯 Available Posts:</h3>
                            <ul className='pos'>
                                <li>- Flutter Developer</li>
                                <li>- React Developer</li>
                                <li>- Backend Developer</li>
                                <li>- UI/UX Designer</li>
                                <li>- Graphics Designer</li>
                            </ul>
                        </div>

                        <div className='box'>
                            <h3>📚 Desired Qualifications:</h3>
                            <ul>
                                <li>- Currently pursuing a degree in Computer Science, Software Engineering, or a related field.</li>
                                <li>- Strong passion for software development and eagerness to learn.</li>
                                <li>- Solid understanding of programming languages (Java, Python, C++, etc.) and development frameworks.</li>
                                <li>- Good problem-solving and analytical skills.</li>
                                <li>- Excellent communication and teamwork abilities.</li>
                            </ul>
                        </div>

                        <div className='box'>
                            <h3>💼 What We Offer:</h3>
                            <ul>
                                <li>- A dynamic and inclusive work environment that promotes growth and collaboration.</li>
                                <li>- The opportunity to work on exciting projects and gain certification and hands-on experience.</li>
                                <li>- Mentorship from experienced professionals in the industry.</li>
                                <li>- Networking opportunities with industry leaders and professionals.</li>
                                <li>- A chance to showcase your skills and work on real-world software solutions.</li>
                            </ul>
                        </div>

                        <div className='box'>
                            <h3>📝 How to Apply:</h3>
                            <p>
                                Ready to take the next step? To apply for BetaZen InfoTech Internship Program, please fill this form carefully and truthfully.  Below are a few basic questions to see if you'd be a good fit for the team, after which we will get back to you with more details by email. So what are you waiting for? Fill in the form!
                            </p>
                        </div>

                        <div className='box'>
                            <p>
                                Don't miss out on this fantastic opportunity to kick-start your career in software development. Join BetaZen InfoTech and become part of a team that is shaping the future of technology! Apply today and let your talent shine!
                            </p>
                        </div>
                    </div>

                    <div className='button' onClick={applyClicked}>
                        <button>
                            Apply now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form;
