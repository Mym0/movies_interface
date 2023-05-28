import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './AboutUs.module.css'
function AboutUs() {
  return (
    <header className={styles['header']}>
        <Container className='h-100'>
          <div className={styles['header__content-wrapper']}>
              <h1 className={styles['header__title']}>Who We Are</h1>
              <h2 className={`${styles['header__sub-title']} `} >
                At Gold, we're passionate about movies and dedicated to bringing you the best cinematic experience. As a premier movie website, we strive to provide you with a comprehensive platform that caters to all your entertainment needs. Whether you're a film enthusiast, a casual viewer, or someone looking for the latest blockbusters, we've got you covered.
              </h2>
              <h2 className={`${styles['header__sub-title']} `} >
              Discover a world of cinematic wonders as we take you on an extraordinary journey through the silver screen. Our website is a treasure trove of information, offering a rich collection of movie reviews, trailers, behind-the-scenes insights, and much more. We understand the importance of informed choices, and we're here to guide you in selecting the perfect movie for your mood.
              </h2>
              <h2 className={`${styles['header__sub-title']} `} >
              With Gold, you can explore an extensive database of films spanning various genres, including action, drama, romance, sci-fi, comedy, and everything in between. Our team of passionate movie buffs handpicks the best movies, ensuring that every recommendation on our website is a gem worth your time. Whether you're looking for timeless classics or the latest releases, Gold is your trusted source for quality cinema.
              </h2>
              <h2 className={`${styles['header__sub-title']} `} >
              But we're more than just a movie website. We believe that movies are a universal language that brings people together. That's why we've created a vibrant community of film lovers, where you can connect with like-minded individuals, share your thoughts, and engage in discussions about your favorite films. Join us in celebrating the art of storytelling and the magic of the big screen.
              </h2>
              <h2 className={`${styles['header__sub-title']} `} >
              Gold also understands the importance of convenience and accessibility. Our user-friendly interface allows you to easily navigate through our website, search for movies based on your preferences, and find all the information you need with just a few clicks. Whether you're accessing Gold from your computer, tablet, or smartphone, we ensure a seamless and enjoyable browsing experience across all devices.
              </h2>
              <h2 className={`${styles['header__sub-title']} `} >
              Stay up to date with the latest news from the world of movies through our regularly updated blog and news section. From exclusive interviews with industry insiders to in-depth analysis of upcoming releases, we bring you the inside scoop on all things cinema.
              </h2>
              <h2 className={`${styles['header__sub-title']} `} >
              At Gold, we're committed to delivering a superior movie-watching experience. That's why we partner with reputable streaming platforms and theaters, allowing you to conveniently book tickets or stream your favorite movies directly through our website. Sit back, relax, and let us be your trusted guide in the world of cinema.
              </h2>
              <h2 className={`${styles['header__sub-title']} `} >
              Thank you for choosing Gold as your go-to movie website. We're excited to embark on this cinematic journey with you and bring you the very best of what the silver screen has to offer. Let the magic unfold at Gold!
              </h2>
          </div>
        </Container>
    </header>
  )
}

export default AboutUs