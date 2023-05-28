import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import React from 'react';
import addReviewApi from '../../api/addReview';
import getSingleMovieApi from '../../api/getSingleMovie';
import Rate from 'rc-rate';
import './Reviews.css';

const Reviews = () => {
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    async function fetchData() {
      const singleMovie = await getSingleMovieApi(movieId);
      console.log(singleMovie, 'singleMovie');
      setMovie(singleMovie);
      setReviews(singleMovie.reviews);
    }
    fetchData();
  }, []);

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;

    const body = { reviewBody: rev.value, imdbId: movieId };

    setIsSubmitting(true);
    const addingStatus = await addReviewApi(body);
    setIsSubmitting(false);
    if (addingStatus !== false) {
      const updatedReviews = [...reviews, { body: rev.value }];

      rev.value = '';

      setReviews(updatedReviews);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3 className="review-title">Reviews</h3>
        </Col>
      </Row>

      <Row className="my-2">
        <Col>
          <img
            src={movie?.poster}
            alt="movie-poster"
            className="review-image"
          />
          {movie?.genres?.map((genre) => (
            <Badge bg="warning" className="review-movie-genre">
              {genre}
            </Badge>
          ))}
        </Col>
        <Col>
          <ReviewForm
            handleSubmit={addReview}
            isSubmitting={isSubmitting}
            revText={revText}
            labelText="Write a Review?"
          />
        </Col>
      </Row>
      <Row>
        <hr className='mt-4'/>
        {reviews?.map((review) => {
          return (
            <>
              <Row>
                <Col>{review?.body}</Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          );
        })}
      </Row>


      {/* <Row>
        <Col>
          <Rate value={Number(movie?.rating)} />
        </Col>
      </Row> */}
    </Container>
  );
};

export default Reviews;
