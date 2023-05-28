import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import imgSrc from '../../assets/imgs/404.png'
import styles from './ErrorPage.module.css'
function ErrorPage() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
        <section className={styles['error']}  >
            <Container>
              <Row>
                <Col lg='6' className='order-2 order-lg-1'>
                  <div className={styles['error__content-wrapper']}>
                    <h1 className={styles['error__content-title']}>404</h1>
                    <h2 className={styles['error__content-second-title']}>Oops</h2>
                    <p className={styles['error__content-description']}>We Can't Find This Page You Are Looking For</p>
                    <Link to='/' className={styles['error__content-link']}>Home Page</Link>
                  </div>
                </Col>
                <Col lg='6' className='order-1 order-lg-2'>
                  <img src={imgSrc} className={styles['error__img']}/>
                </Col>
              </Row>
            </Container>
        </section>
    </>
  )
}

export default ErrorPage