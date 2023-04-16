import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import React from 'react';
import addReviewApi from '../../api/addReview';

const Reviews = () => {
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);

  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId;

  useEffect(async () => {
    const singleMovie = await getSingleMovieApi(movieId);
    setMovie(singleMovie);
    setReviews(singleMovie.reviews);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;

    const body = { reviewBody: rev.value, imdbId: movieId };

    addReviewApi(body);

    const updatedReviews = [...reviews, { body: rev.value }];

    rev.value = '';

    setReviews(updatedReviews);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} alt="" />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    handleSubmit={addReview}
                    revText={revText}
                    labelText="Write a Review?"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviews?.map((r) => {
            return (
              <>
                <Row>
                  <Col>{r.body}</Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
