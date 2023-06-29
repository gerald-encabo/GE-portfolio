import Moment from 'moment';
import '@/styles/resume.scss';
import Title from '@/components/Title'
import Header from '@/components/Header'
import { ImHtmlFive } from 'react-icons/im'
import { IoLogoCss3, IoLogoApple } from 'react-icons/io'
import { BiNotepad } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { DiDotnet, DiGoogleAnalytics } from 'react-icons/di'
import { FaChrome, FaFirefox, FaInternetExplorer, FaDatabase, FaNodeJs, FaTrello, FaJava } from 'react-icons/fa'
import { SiJson, SiTypescript, SiPhp, SiMysql, SiBootstrap, SiReact, SiSass, SiJquery, 
         SiJavascript, SiWindows, SiVisualstudio, SiAtom, SiSublimetext, SiMongodb, SiMicrosoftsqlserver,
         SiRedux, SiHeroku, SiVercel, SiAdobedreamweaver, SiAdobexd, SiSafari, SiMicrosoftedge, SiExpress,
         SiAdobephotoshop, SiMicrosoftword, SiMicrosoftexcel, SiMicrosoftoutlook, SiMicrosoftteams, 
         SiMicrosoftpowerpoint, SiOpera } from 'react-icons/si'

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
                                                    <li> Build, designed, and developed reusable UI components using HTML5, CSS3, JavaScript (ES6), TypeScript, jQuery, Bootstrap5, and ReactJS that meet WCAG and AODA guidelines and web browsers standards for website </li>
                                                    <li> Converted wireframe (Adobe XD) and mockup (Figma) homepage design into an interactive prototype which later deployed into the official homepage </li>
                                                    <li> Applied optimization techniques to reduce page and image load times to enhance User Experience using Code-Splitting or Lazy loading </li>
                                                    <li> Used Headless CMS ContentStack for maintaining components, templates, and assets </li>
                                                    <li> Have worked on AWS for fetching pictures from AWS to the Image asset file </li>
                                                    <li> Worked on Bootstrap, Media Queries, CSS Grid & Flexbox to build responsive design to provide a rich User Interface (UI) experience </li>
                                                    <li> Implemented component design structure on CMS ContentStack and integrated with the client side using REST APIs </li>
                                                    <li> Performed A/B testing using Adobe Target on the e-commerce site to maximize the user experience and increase conversion rates optimization </li>
                                                    <li> Participated in team code reviews, and task tracking assigned projects and UI tickets issues using Trello software </li>
                                                    <li> Used Monetate software for quick webpage updates used for adding marketing content such as monthly sales items, limited free shipping for specific products, etc. </li>
                                                    <li> Updated product card component by adding CSS grid layout and styles for an efficient and responsive design for mobile and tablet view </li>
                                                    <li> Worked closely with the back-end team to display data using the custom components, library components, and redux </li>
                                                    <li> Implemented jQuery and React Slick carousel along with JavaScript libraries for the hero banner & carousel component </li>
                                                    <li> Updated search engine input by adding an on-click clear button for a better overall User Experience </li>
                                                    <li> Extensively used SASS (Syntactically Awesome Style Sheets) layout while styling with CSS3 </li>
                                                    <li> Experience implementing the Model-View-Controller (MVC) architecture with ASP.NET, and Adobe Launch for tracking customer activity including search products by brand, category, price, etc. </li>
                                                    <li> Worked on React Components, Forms, Events, Keys, Animations, Router, Icons, Bootstrap, Carousel & Redux concept </li>
                                                    <li> Implemented masking credit card for payment transactions & administrator tester page for security purposes </li>
                                                    <li> Extensively used Git for version controlling and regularly used Github for pushing and maintaining code in repositories </li>
                                                    <li> Participated in day-to-day stand-up meetings along with the IT team and stakeholders to keep track of the project status </li>
                                                    <li> Worked closely with the back-end team during product release to ensure smooth deployment in staging and production </li>
                                                    <li> Performed extensive unit tests using JEST for all components to ensure consistency, identify issues, and improve UI across all devices and different browsers </li>
                                                    <li> Technology used: HTML5, CSS3, JavaScript (ES6), TypeScript, Bootstrap5, SASS, jQuery, React, Redux, REST APIs, JEST, ASP.NET, GitHub, Visual Studio, Figma, Trello, AWS, Monetate, Adobe Launch, Contentstack (CMS)</li>
                                                </ul>
                                            </p>
                                        </div>
                                        <div className='education-info-layer-three'>
                                            <p className='college'><span>2018 - 2022</span> Seneca College</p>
                                            <h4 className='program'>AEM CQ5/Front-End UI Developer</h4>
                                            <p className='desc'>
                                                <ul>
                                                    <li> Built and developed templates, dialogs, widgets, bundles, and components using modern front-end technologies like HTML5, CSS3, JavaScript, AJAX, jQuery, Bootstrap5, and React </li>     
                                                    <li> Developed templates and components in Adobe CQ5 and Eclipse/CRXDE Lite </li>
                                                    <li> Involved in content migration from OpenCMS to AEM 6.2 </li>
                                                    <li> Administered components, templates, dialogs, and workflows in AEM </li>
                                                    <li> Maintained Content Management System (CMS) and provided support for the application in authoring and publishing environments </li>
                                                    <li> Collaborated with developers in migrating AEM 6.2 to 6.3 with a completely fresh code base using the latest technologies like React and SPA editor </li>
                                                    <li> Designed & developed various web pages using CQ5, HTML5, CSS3, JavaScript, AJAX, jQuery, Bootstrap5 & React </li>
                                                    <li> Familiar with Java, Servlets, JSP, XML and Apache Sling </li>
                                                    <li> Extensively used CQ5 tagging features in developing components and templates </li>
                                                    <li> Integrated AEM with marketing products tools like Adobe Tag, Target, Launch Data Layer, and Analytics </li>
                                                    <li> Used Git as a distributed revision control system for CQ5 </li>
                                                    <li> Involved Webpack as module bundler to preprocess and minify different files such as JavaScript and SASS files </li>
                                                    <li> Implemented responsive web UI and made better user experience using SASS </li>
                                                    <li> Implemented REST APIs on CRUD (create-read-update-delete) operations on assets and content using JSON and Postman for automation testing </li>
                                                    <li> Conducted changes required to an existing system including upgrading new version plugin libraries for jQuery, Carousel, and Bootstrap </li>
                                                    <li> Worked on landing pages and category landing pages using the content management system Adobe CQ5 for the consumer portal </li>
                                                    <li> Adobe Photoshop is used for cropping and compressing the size of the image to improve web page performance specifically for mobile and tablet devices </li>
                                                    <li> Followed the standard guideline of Web Content Accessibility Guideline (WCAG) (AA level) and Accessibility for Ontarians with Disabilities Act (AODA) when creating and developing web pages </li>
                                                    <li> Performed quality assurance for code testing and accessibility checks using SiteImprove technology for fixing issues like bugs, broken links, typographical errors, etc. </li>
                                                    <li> Maintained and update digital content (images, videos, files, etc.) on AEM DAM (Digital Asset Management) platform if its meeting business objectives and corporate standards </li>
                                                    <li> Provided feedback to content creators/authors and ask for clarifications whenever there are questions before publishing </li>
                                                    <li> Trained content creators/authors on how to use Adobe CQ5 to create, modify and publish content page </li>
                                                    <li> Published content, and pages to the Seneca College production site environment </li>
                                                    <li> Responsible for debugging, analyzing, and fixing all the code-related issues on the front end that arise out of the production systems </li>
                                                    <li> Tested code changes in Development, QA, and Stage environments thoroughly before going to production </li>
                                                    <li> Technology used: HTML5, CSS3, JavaScript (ES6), Bootstrap5, Ajax, jQuery, Sass, React, JSON, REST APIs, Agile (Scrum), Postman, Java, Servlets, JSP, XML, Apache Sling, Git, Visual Studio, Adobe Experience Manager (CMS), OpenCMS, Adobe (Target, Tag, Launch, Photoshop, Analytics) Google Analytics, SiteImprove (Web Accessibility & QA testing) </li> 
                                                </ul>
                                            </p>
                                        </div>
                                        <div className='education-info-layer-three'>
                                            <p className='college'><span>2017</span> Seneca College</p>
                                            <h4 className='program'>Web Specialist (co-op)</h4>
                                            <p className='desc'>
                                                <ul>
                                                    <li> Created and updated web space and landing pages using build-in widgets in Intranet Software - Axero Solutions </li>
                                                    <li> Collaborated with clients about the structure of landing page, and page content for specific departments and faculties </li>
                                                    <li> Provided direct assistance and tutorials with the page administrators on developing and updating their respective intranet spaces </li>
                                                    <li> Maintained and updated existing web spaces and contents including images, videos, links, file attachment, and marketing banners </li>
                                                    <li> Track web performance and workflow using the build-in Analytics data feature in Axero Solutions Technology </li>
                                                    <li> Used of Front-End languages and frameworks such as HTML, CSS, JavaScript, and Bootstrap for the intranet homepage and landing pages </li>
                                                    <li> Architected website structure templates using GlooMaps, and presented a UX design for the home page using Figma </li>
                                                    <li> Cropped and compressed the size of the images to improve load page performance for mobile and tablet devices </li>
                                                    <li> Granted access accounts to students and employees on specific web spaces and pages </li>
                                                    <li> Performed extensive testing to ensure content consistency and responsiveness across all devices and different browsers </li>
                                                    <li> Managed the intranet workflow queue for content publishing to the different environments (staging & production) </li>
                                                    <li> Validated and review all content that before goes to the publishing stage or live environment </li>
                                                    <li> Reviewed digital content (files, images, videos, etc.) on the asset platform to validate if it meets objectives & standards </li>
                                                    <li> Provided feedback to content creators / authors and ask for clarifications whenever there are questions prior to publishing </li>
                                                    <li> Technology used: HTML5, CSS3, JavaScript (ES6), Bootstrap5, jQuery, GitHub, Figma, GlooMaps, Axero Solution Technology (CMS) </li>
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