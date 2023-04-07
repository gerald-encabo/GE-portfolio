import React from 'react';
import Moment from 'moment';
import '@/styles/footer.scss';

const Footer = () => {

    return (
        <div className='footer'>
            <div className='footer-wrapper'>
                <div className='footer-container container'>
                    <div className='footer-item-left'>
                        <ul>
                            <li className='footer-item-list'><a className='footer-social-media' title="Facebook" href='https://www.facebook.com/gerald.encabo.5/' target='_blank' rel='noreferrer'>Facebook</a></li>
                            <li className='footer-item-list'><a className='footer-social-media' title="Instagram" href='https://www.instagram.com/imgeeerald/' target='_blank' rel='noreferrer'>Instagram</a></li>
                            <li className='footer-item-list'><a className='footer-social-media' title="LinkedIn" href='https://www.linkedin.com/in/gerald-encabo/' target='_blank' rel='noreferrer'>LinkedIn</a></li>
                            <li className='footer-item-list'><a className='footer-social-media' title="Github" href='https://github.com/gerald-encabo' target='_blank' rel='noreferrer'>Github</a></li>
                        </ul>
                    </div>
                    <div className='footer-item-right'>
                            <p>&#169; { Moment(new Date()).format("YYYY") } All Rights Reserved by Gerald Encabo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer