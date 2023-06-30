import Moment from 'moment';
import '@/styles/resume.scss';
import Data from '@/assets/ResumeData';
import Accordion from '@/components/Accordion';
import Title from '@/components/Title'
import Header from '@/components/Header'
import { ImHtmlFive } from 'react-icons/im'
import { IoLogoCss3 } from 'react-icons/io'
import { BiNotepad } from 'react-icons/bi'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { DiDotnet } from 'react-icons/di'
import { FaDatabase, FaNodeJs, FaJava } from 'react-icons/fa'
import { SiJson, SiTypescript, SiMysql, SiBootstrap, SiReact, SiSass, SiJquery, 
         SiJavascript, SiVisualstudio, SiAtom, SiSublimetext, SiMongodb, SiMicrosoftsqlserver,
         SiRedux, SiExpress, } from 'react-icons/si'

export const Resume = () => {

    const currentYear:string = Moment(new Date()).format("YYYY");
    const yearExp:number = +currentYear - 2018;

    return (
        <div className='resume'>
            <div className='resume-wrapper container'>
                <Header title={'Resume'} desc={ yearExp+ '+ Years of Experience'} />
                    <div className='resume-container'>
                        <div className='resume-section-one'>
                            <div className='resume-section-one-left'>
                                <Title title={'Experience'}/>
                                <div className='education-info-layer-one'>
                                    <div className='education-info-layer-two'>
                                        <div className='education-info-layer-three'>
                                            <Accordion data={Data} type="experience" />
                                        </div>                                  
                                    </div>
                                </div>
                            </div>
                            <div className='resume-section-one-right'>
                                    <Title title={'Education'}/>
                                    <div className='education-info-layer-one'>
                                        <div className='education-info-layer-two'>
                                            <div className='education-info-layer-three'>
                                                <Accordion data={Data} type="education" />
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className='resume-section-two'>
                            <div className='resume-section-two-left'>
                                <Title title={'Programming/Languages'}/>
                                <div className="skills-container">
                                    <div className="skills-icon"><ImHtmlFive className="logo-size"/>HTML5</div>
                                    <div className="skills-icon"><IoLogoCss3 className="logo-size"/>CSS3</div>
                                    <div className="skills-icon"><SiSass className="logo-size"/>Sass</div>
                                    <div className="skills-icon"><SiJavascript className="logo-size"/>JavaScript</div>
                                    <div className="skills-icon"><SiTypescript className="logo-size"/>TypeScript</div>
                                    <div className="skills-icon"><SiJson className="logo-size"/>Json</div>
                                    <div className="skills-icon"><FaJava className="logo-size"/>Java</div>
                                </div>            
                            </div>
                            <div className='resume-section-two-right'>
                                <Title title={'Framework/Libraries'}/>
                                <div className="skills-container">
                                    <div className="skills-icon"><SiBootstrap className="logo-size"/>Bootstrap</div>
                                    <div className="skills-icon"><SiJquery className="logo-size"/>Jquery</div>
                                    <div className="skills-icon"><SiReact className="logo-size"/>React.js</div>
                                    <div className="skills-icon"><SiExpress className="logo-size"/>Express.js</div>
                                    <div className="skills-icon"><DiDotnet className="logo-size"/>ASP.Net</div>
                                    <div className="skills-icon"><SiRedux className="logo-size"/>Redux</div>
                            </div> 
                            </div>
                        </div>
                        <div className='resume-section-two'>
                            <div className='resume-section-two-left'>
                                <Title title={'Server Sides'}/>
                                <div className="skills-container">
                                    <div className="skills-icon"><AiOutlineConsoleSql className="logo-size"/>SQL</div>
                                    <div className="skills-icon"><SiMysql className="logo-size"/>MySQL</div>
                                    <div className="skills-icon"><SiMicrosoftsqlserver className="logo-size"/>SQL Server</div>
                                    <div className="skills-icon"><FaDatabase className="logo-size"/>NoSQL</div>
                                    <div className="skills-icon"><FaNodeJs className="logo-size"/>NodeJS</div>
                                    <div className="skills-icon"><SiMongodb className="logo-size"/>MongoDB</div>
                                </div>            
                            </div>
                            <div className='resume-section-two-right'>
                                <Title title={'Tools'}/>
                                <div className="skills-container">
                                    <div className="skills-icon"><SiVisualstudio className="logo-size"/>Visual Studio</div>
                                    <div className="skills-icon"><BiNotepad className="logo-size"/>Notepad++</div>
                                    <div className="skills-icon"><SiAtom className="logo-size"/>Atom</div>
                                    <div className="skills-icon"><SiSublimetext className="logo-size"/>Sublime Text</div>                        
                            </div> 
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}