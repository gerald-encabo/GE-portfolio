import { useRef, useEffect } from 'react';
import '@/styles/about.scss';
import { NavLink } from 'react-router-dom';
import { init } from 'ityped';
import Title from '@/components/Title'; 
import { GrFacebook } from 'react-icons/gr';
import { SiInstagram, SiLinkedin } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import Moment from 'moment';
import { motion } from "framer-motion";

export const About = () =>  {

    const textRef = useRef<any>();
    const currentYear:string = Moment(new Date()).format("YYYY");
    const yearExp:number = +currentYear - 2018;

    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            backSpeed: 60,
            showCursor: true,
            strings: ['UI Developer', 'AEM Developer', 'Web Specialist']
        })
    }, [])

    return (
        <div className='about'>
            <div className='about-wrapper container'>
                <div className='about-container'>

                    <div className='about-section-one'>
                        <div className='about-section-one-left'>
                            <motion.div 
                                className='logo'
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 3 }}
                                variants={{
                                    hidden: { opacity: 0, x: -100 },
                                    visible: { opacity: 1, x: 0},
                                }}
                            >
                                <img src={'/images/me.png'}  alt='Gerald F Encabo'/>
                            </motion.div>
                        </div>
                        <div className='about-section-one-right'>
                            <h4>Hi there, I'm</h4>
                            <h1>Gerald Encabo</h1>
                            <h3>Front-End <span ref={ textRef }></span></h3>
                            <p>Web developer with {yearExp}+  years of experience building and maintaining responsive websites across diverse industries. Proven of experience within web development basics, modern libraries, and the latest frameworks. Knowledgeable in creating user interfaces, writing & testing codes, troubleshooting issues & vulnerabilities, and implementing new features based on stakeholder feedback. Self-motivated toward learning new skills and adapting modern technologies.</p>
                            <NavLink to='/contact'>
                                <button className='about-btn'>Contact</button>
                            </NavLink>
                        </div>
                    </div>
                    
                    <div className="about-section-two">
                        <Title title={'Social Media'}/>
                        <div className="about-section-two-info">
                            <a href="https://www.facebook.com/gerald.encabo.5/" title="Facebook" target="_blank" rel="noreferrer">
                                <div className="about-section-two-container">
                                    <GrFacebook className="logo-size"/>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/iamgeerald/" title="Instagram" target="_blank" rel="noreferrer">
                                <div className="about-section-two-container">
                                    <SiInstagram className="logo-size"/>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/gerald-encabo/" title="LinkedIn" target="_blank" rel="noreferrer">
                                <div className="about-section-two-container">
                                    <SiLinkedin className="logo-size"/>
                                </div>
                            </a>
                            <a href="https://github.com/gerald-encabo" title="Github" target="_blank" rel="noreferrer">
                                <div className="about-section-two-container">
                                    <FaGithub className="logo-size"/>
                                </div>                     
                            </a>                          
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}