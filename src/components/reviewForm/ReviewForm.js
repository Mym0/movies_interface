import { Form } from 'react-bootstrap';
import './ReviewForm.css'
import ReactLoading from "react-loading";

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue,isSubmitting }) => {
  return (
    <Form className='review-form-wrapper'>
        <Form.Label className='review-form-title'>{labelText}</Form.Label>
        <Form.Control
          ref={revText}
          as="textarea"
          rows={3}
          defaultValue={defaultValue}
          className='review-form-input mb-3'
        />
      <button className='review-form-button d-flex align-items-center justify-content-center' disabled={isSubmitting} onClick={handleSubmit}>
      {
          !isSubmitting?'Submit'
          :<ReactLoading type={"spin"} color={'#ffffff'} height={20} width={20} />
        }
      </button>
    </Form>
  );
};

export default ReviewForm;
