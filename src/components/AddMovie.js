import { Modal, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { addMovie } from '../services';
export const AddMovie = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onUpload = (e) => {
    console.log(e.target);
  };

  const onSubmit = (payload) => {
    payload.genre = payload?.genre?.split(',');
    payload.releaseDate = 'asdad';
    payload.fileKey = payload.fileKey[0];
    console.log(payload);
    const formData = new FormData();

    for (const field in payload) {
      formData.append(field, payload[field]);
    }

    addMovie(formData)
      .then(() => {
        toast('Movie added successfully');
        reset();
        props.onHide();
      })
      .catch((error) => {
        toast(error.response?.data?.message || 'Something went wrong');
      });
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="movie-modal">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Add movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate onSubmit={handleSubmit(onSubmit)} className="mb-2">
          <Form.Group controlId="name">
            <Form.Label>Movie name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              className={errors.name ? 'border border-danger' : ''}
              {...register('name', { required: true })}
            />
            {errors.name && (
              <span className="text-danger d-block mt-1">Name is required</span>
            )}
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description"
              className={errors.description ? 'border border-danger' : ''}
              {...register('description', {
                required: true
              })}
            />
            {errors.description && (
              <span className="text-danger d-block mt-1">
                Description is required
              </span>
            )}
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Release Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Password"
              className={errors.releaseDate ? 'border border-danger' : ''}
              {...register('releaseDate', { required: true })}
            />
            {errors.releaseDate && (
              <span className="text-danger d-block mt-1">
                Release date is required
              </span>
            )}
          </Form.Group>
          <Form.Group controlId="formBasicRange">
            <Form.Label>Rating (between 1 and 5)</Form.Label>
            <Form.Control
              type="range"
              min="1"
              max="5"
              {...register('rating', { required: true })}
            />
            {errors.rating && (
              <span className="text-danger d-block mt-1">
                Rating is required
              </span>
            )}
          </Form.Group>

          <Form.Group controlId="genre">
            <Form.Label>Genre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter genre as comma separated"
              className={errors.genre ? 'border border-danger' : ''}
              {...register('genre', {
                required: true
              })}
            />
            {errors.genre && (
              <span className="text-danger d-block mt-1">
                Genre is required
              </span>
            )}
          </Form.Group>
          <Form.Group controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Country"
              className={errors.genre ? 'border border-danger' : ''}
              {...register('country', {
                required: true
              })}
            />
            {errors.country && (
              <span className="text-danger d-block mt-1">
                country is required
              </span>
            )}
          </Form.Group>
          <Form.Group controlId="ticketPrice">
            <Form.Label>Ticket Price</Form.Label>
            <Form.Control
              type="Number"
              placeholder="Enter ticket price"
              className={errors.ticketPrice ? 'border border-danger' : ''}
              {...register('ticketPrice', {
                required: true
              })}
            />
            {errors.ticketPrice && (
              <span className="text-danger d-block mt-1">
                Ticket price is required
              </span>
            )}
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Upload image</Form.Label>
            <Form.File
              name="fileKey"
              label="File"
              onChange={onUpload}
              {...register('fileKey', {
                required: true
              })}
            />
            {errors.fileKey && (
              <span className="text-danger d-block mt-1">File is required</span>
            )}
          </Form.Group>
          <Button variant="primary" type="submit" className="text-capitalize">
            Add movie
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
