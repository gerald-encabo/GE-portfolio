import Moment from 'moment';
import '@/styles/resume.scss';
import Title from '@/components/Title'
import Header from '@/components/Header'
import { ImHtmlFive } from 'react-icons/im'
import { IoLogoCss3, IoLogoApple } from 'react-icons/io'
import { BiNotepad } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { DiDotnet, DiCodeBadge, DiGoogleAnalytics } from 'react-icons/di'
import { FaChrome, FaFirefox, FaInternetExplorer, FaDatabase, FaNodeJs, FaTrello, FaJava } from 'react-icons/fa'
import { SiJson, SiTypescript, SiPhp, SiMysql, SiBootstrap, SiReact, SiSass, SiJquery, 
         SiJavascript, SiWindows, SiVisualstudio, SiAtom, SiSublimetext, SiMongodb, SiMicrosoftsqlserver,
         SiRedux, SiAndroidstudio, SiFirebase, SiHeroku, SiVercel, SiAdobedreamweaver, SiAdobexd,
         SiAdobephotoshop, SiMicrosoftword, SiMicrosoftexcel, SiMicrosoftoutlook, SiMicrosoftteams, 
         SiMicrosoftpowerpoint, SiOpera, SiSafari, SiMicrosoftedge, SiExpress } from 'react-icons/si'

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
                                            <p className='college'><span>2022 - 2023</span> Grand & Toy</p>
                                            <h4 className='program'>Front-End UI Developer</h4>
                                            <p className='desc'>
                                                <ul>
                                                    <li>	Built and develop reusable components based on WCAG guidelines and UI design </li>
                                                    <li>	Developed and maintain code in repositories to ensure code is centrally monitored and managed </li>
                                                    <li>	Architected and implement component structure in Headless CMS Contentstack </li>
                                                    <li>	Assisted back-end team in building User Interfaces components for clients </li>
                                                    <li>	Works with QA tester to get new pages and components to be tested and address if any issues identified </li>
                                                    <li>	Collaborated with stakeholders to achieve customer requirements and business goals </li>
                                                    <li>	Converted mockup homepage design from Figma into prototype homepage that separated from different components </li>
                                                    <li>	Conducted changes required to existing system (e.g., upgrade new version libraries, optimization) </li>
                                                    <li>	Ensure user experience and feasibility determine design choices </li>
                                                    <li>	Run extensive testing to ensure consistency, identify issues and improve UI across all devices and different browsers </li>
                                                    <li>	Worked collaboratively in an agile environment with daily and weekly stand-ups along with the IT team and stakeholders </li>
                                                    <li>	Used Monetate software for quick webpage updates primarily used for adding marketing content including monthly sales items, limited free shipping for specific products, etc. </li>
                                                    <li>	Performed A/B testing using Adobe Target on the e-commerce site to maximize the user experience and increase conversion rates optimization </li>
                                                    <li>	Task tracking assigned projects and UI tickets issues using Trello software </li>
                                                    <li>	Participated in team code reviews for product release </li>
                                                    <li>	Project Technology Stack: HTML5, CSS3, JavaScript (Vanilla & ES6), Bootstrap5, Sass, jQuery, React, JEST, JSON, Redux, ASP.NET (Razor), GitHub, Visual Studio, Figma, Monetate, Google Analytics, Contentstack (CMS) </li>
                                                </ul>
                                            </p>
                                        </div>
                                        <div className='education-info-layer-three'>
                                            <p className='college'><span>2018 - 2022</span> Seneca College</p>
                                            <h4 className='program'>Multi-Media Specialist & UI Web Developer</h4>
                                            <p className='desc'>
                                                <ul>
                                                    <li>	Front-End experience in building, designing, and maintaining responsive web applications using CMS platform Adobe Experience Manager (AEM) </li>
                                                    <li>	Work with Front-End technologies, components, and templates using modern technology </li>
                                                    <li>	Led the homepage redesign project along with key stakeholders (UX designer and Marketing) </li>
                                                    <li>	Followed the standard guideline of Web Content Accessibility Guideline (WCAG) and Accessibility for Ontarians with Disabilities Act (AODA) when creating and developing web pages </li>
                                                    <li>	Performed quality assurance for code testing and accessibility checks using SiteImprove technology for fixing issues like bugs, broken links, typographical errors, and etc. </li>
                                                    <li>	Adobe Photoshop is used for cropping and compressing the size of the image to improve web page performance specifically for mobile and tablet devices </li>
                                                    <li>	Used Google technologies including Analytics for tracking website traffic, Maps API for displaying campus map, and Font API for importing new fonts style </li>
                                                    <li>	Collaborated in Agile development team using Scrum methodologies when performing task assignment </li>
                                                    <li>	Maintained and updated existing codes, and web content such as banner images, links, videos, and files attachment </li>
                                                    <li>	Project Technology Stack: HTML5, CSS3, JavaScript (ES6), Bootstrap5, jQuery, Sass, React, Redux, ASP.NET, GitHub, Visual Studio, Figma, Adobe Experience Manager (CMS), OpenCMS, Adobe Target, Adobe Tagging, Adobe Photoshop, Adobe Analytics, Google Analytics, Gloo Maps, SiteImprove (Web Accessibility Checker & QA testing) </li>
                                                </ul>
                                            </p>
                                        </div>
                                        <div className='education-info-layer-three'>
                                            <p className='college'><span>2017</span> Seneca College</p>
                                            <h4 className='program'>Web Specialist (co-op)</h4>
                                            <p className='desc'>
                                            <ul>
                                                <li>	Created and updated web space and landing pages using build-in widgets in Intranet Software - Axero Solutions </li>
                                                <li>	Collaborated with clients about the structure of web space and page content for specific departments and faculties </li>
                                                <li>	Provided direct assistance and tutorial with the page administrator on developing and updating their respective web space and landing page </li>
                                                <li>	Maintained and updated existing web space and content including images, videos, links, and file attachment </li>
                                                <li>	Track web performance and workflow using the build-in Analytics data feature in Axero Solutions Technology </li>
                                                <li>	Used of Front-End languages and frameworks such as HTML, CSS, JavaScript, and Bootstrap for webpage design, and layout </li>
                                                <li>	Architected website structure templates using GlooMaps, and presented a UX design for the home page using Figma </li>
                                                <li>	Project Technology Stack: HTML5, CSS3, JavaScript (ES6), Bootstrap5, jQuery, JSON, GitHub, Visual Studio, Figma, Axero Solution Technology (CMS) </li>
                                            </ul>
                                            </p>
                                        </div>
                                        <div className='education-info-layer-three'>
                                            <p className='work'><span>2013</span> CIBC Bank</p>
                                            <h4 className='position'>Application Developer (co-op)</h4>
                                            <p className='desc'>
                                                <ul>
                                                    <li>Conducted regression testing, analyzed results, and submitted observations to the Application team</li>
                                                    <li>Gathered data on integration issues and vulnerabilities, and reported all the findings</li>
                                                    <li>Coordinated effectively with stakeholders, developers, and technical resources to gather requirements for application development</li>
                                                    <li>Participated in the technical design, development, and integration of applications system in multiple platforms</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='resume-section-one-right'>
                                <Title title={'Education'}/>
                                <div className='education-info-layer-one'>
                                    <div className='education-info-layer-two'>
                                        <div className='education-info-layer-three'>
                                            <p className='college'><span>2016 - 2018</span> Seneca College</p>
                                            <h4 className='program'>Honours Bachelor of Technology - Software Development</h4>
                                            <p className='desc'>
                                                <ul>
                                                    <li>Excelled in User Experience and User Interfaces</li>
                                                    <li>Wrote a programming code that used to maneuver a robotic arm</li>
                                                    <li>Wrote a column on the future of the IoT (Internet of Things) for a research paper</li>
                                                    <li>Landed a co-op job related to Front-End Development which later became full-time</li>
                                                </ul>
                                            </p>                                    
                                        </div>
                                        <div className='education-info-layer-three'>
                                            <p className='college'><span>2012 - 2015</span> Seneca College</p>
                                            <h4 className='program'>Computer Programming & Analysis</h4>
                                            <p className='desc'>
                                                <ul>
                                                    <li>Followed my passion in a core of web development</li>
                                                    <li>Build my first a website and android mobile app as part of my final project</li>
                                                    <li>Code and design database structure which later used for registration and sign-in webpage</li>
                                                    <li>Gained co-op experience as Application Developer with one of the biggest banks in Canada</li>
                                                    <li>An earned diploma is used as to pathway to pursue an honorable bachelor's degree</li>
                                                </ul>
                                            </p>                                    
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
                                    <div className="skills-icon"><SiPhp className="logo-size"/>PHP</div>
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
                                    <div className="skills-icon"><SiAndroidstudio className="logo-size"/>Android Studio</div>
                            </div> 
                            </div>
                        </div>
                        <div className='resume-section-two'>
                            <div className='resume-section-two-left'>
                                <Title title={'Software'}/>
                                <div className="skills-container">
                                    <div className="skills-icon"><DiGoogleAnalytics className="logo-size"/>Google Analytics</div>
                                    <div className="skills-icon"><BsGithub className="logo-size"/>Github</div>
                                    <div className="skills-icon"><FaTrello  className="logo-size"/>Trello</div>
                                    <div className="skills-icon"><SiFirebase className="logo-size"/>Firebase</div>
                                    <div className="skills-icon"><SiHeroku className="logo-size"/>Heroku</div>
                                    <div className="skills-icon"><SiVercel  className="logo-size"/>Vercel</div>
                            </div> 
                            </div>
                            <div className='resume-section-two-right'>
                                <Title title={'Web Browsers'}/>
                                <div className="skills-container">
                                    <div className="skills-icon"><FaChrome className="logo-size"/>Chrome</div>
                                    <div className="skills-icon"><FaFirefox className="logo-size"/>Firefox</div>
                                    <div className="skills-icon"><FaInternetExplorer  className="logo-size"/>Internet Explorer</div>
                                    <div className="skills-icon"><SiOpera className="logo-size"/>Opera</div>
                                    <div className="skills-icon"><SiSafari className="logo-size"/>Safari</div>
                                    <div className="skills-icon"><SiMicrosoftedge  className="logo-size"/>Microsoft Edge</div>
                            </div> 
                            </div>
                        </div>
                        <div className='resume-section-two'>
                            <div className='resume-section-two-left'>        
                                <Title title={'Adobe & Microsoft Office '}/>
                                <div className="skills-container">
                                    <div className="skills-icon"><SiMicrosoftword className="logo-size"/>Word</div>
                                    <div className="skills-icon"><SiMicrosoftexcel className="logo-size"/>Excel</div>
                                    <div className="skills-icon"><SiMicrosoftoutlook  className="logo-size"/>Outlook</div>
                                    <div className="skills-icon"><SiMicrosoftpowerpoint className="logo-size"/>PowerPoint</div>
                                    <div className="skills-icon"><SiMicrosoftteams  className="logo-size"/>Teams</div>
                                    <div className="skills-icon"><SiAdobedreamweaver className="logo-size"/>Dreamweaver</div>
                                    <div className="skills-icon"><SiAdobephotoshop className="logo-size"/>Photoshop</div>
                                    <div className="skills-icon"><SiAdobexd className="logo-size"/>XD</div>
                            </div> 
                            </div>
                            <div className='resume-section-two-right'>
                                <Title title={'Operating Systems'}/>
                                <div className="skills-container">
                                    <div className="skills-icon"><SiWindows className="logo-size"/>Windows</div>
                                    <div className="skills-icon"><IoLogoApple className="logo-size"/>MacOS</div>
                                </div>    
                            </div>
                        </div>      
                    </div>
            </div>
        </div>
    )
}