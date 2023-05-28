import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import {ReactComponent as WhatsAppIcon} from '../../assets/icons/whatsAppIcon.svg'
import {ReactComponent as MessageIcon} from '../../assets/icons/messageIcon.svg'
import { emailConnect, whtsAppConnect } from '../../utils/features'
function Footer() {
  return (
    <footer>
        <Container className={`${styles['footer__container']}`}>
            <Row>
                <Col sm='3' xs='12' className={styles['footer__section-wrapper']}>
                    <h3 className={styles["footer__section-title"]}>
                        MORE
                    </h3>
                    <ul className={styles["footer__links-ul"]}>
                        <li className={styles["footer__links-li"]}>
                            <Link to='/about' className={styles["footer__links-link"]}>Home</Link>
                        </li>
                        <li className={styles["footer__links-li"]}>
                            <Link to='/login' className={styles["footer__links-link"]}>Login</Link>
                        </li>
                        <li className={styles["footer__links-li"]}>
                            <Link to='/register' className={styles["footer__links-link"]}>Register</Link>
                        </li>
                        <li className={styles["footer__links-li"]}>
                            <Link to='/about' className={styles["footer__links-link"]}>About</Link>
                        </li>
                        {/* <li className={styles["footer__links-li"]}>
                            <Link to='/about' className={styles["footer__links-link"]}>Privacy Policy</Link>
                        </li> */}
                        <li className={styles["footer__links-li"]}>
                            <Link to='/terms' className={styles["footer__links-link"]}>Terms And Conditions</Link>
                        </li>
                    </ul>
                </Col>
                <Col sm='5' xs='6' className="text-sm-start text-center d-none d-sm-flex">
                    <div className={styles["footer__links-cont"]}>
                        <h4 className={styles["footer__section-title"]}>About Us</h4>
                        <p className={styles["footer__description"]}>
                            At Gold, we're passionate about movies and dedicated to bringing you the best cinematic experience. As a premier movie website, we strive to provide you with a comprehensive platform that caters to all your entertainment needs. Whether you're a film enthusiast, a casual viewer, or someone looking for the latest blockbusters, we've got you covered.   
                        </p>
                        <p className={styles["footer__description"]}>
                            Discover a world of cinematic wonders as we take you on an extraordinary journey through the silver screen.
                        </p>
                    </div>
                </Col>
                <Col sm='4' xs='12' className="text-sm-start text-center d-none d-sm-flex">
                    <div className={`${styles['footer__links-cont']} `} >
                        <h3 className={styles["footer__section-title"]}>
                            Contact Info
                        </h3>
                        <ul className={styles['footer__section-list']}>
                            <li className={styles['footer__section-item']} >
                                <a href={emailConnect('gold@movies.com')} className={styles['footer__section-item-link']}>
                                    <MessageIcon className={styles['footer__section-icon']}/>
                                    <span className={styles['footer__section-text']}>Gold@movies.com</span>
                                </a>
                            </li>
                            <li className={styles['footer__section-item']} >
                                <a href={whtsAppConnect('+491776669577')} target='_blank'  className={styles['footer__section-item-link']}>
                                    <WhatsAppIcon className={styles['footer__section-icon']}/>
                                    <span className={styles['footer__section-text']}>+49 177 6669577</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
        <div className={styles["footer__copyright"]}>
            <p className={styles['footer__text']}>Powerd by
                <a href='#' target='_blank' className={styles['footer__logo-link']}>
                    <FontAwesomeIcon icon={faVideoSlash} className={styles['footer__logo']}/>
                    Gold
                </a>
            </p>
        </div>
    </footer>
  )
}

export default Footer