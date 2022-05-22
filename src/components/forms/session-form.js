import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import AddDepartment from '../modals/add-department';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createSession } from '../../store/sessions/create-slice';

//form validation with use form hook && yup
const schema = yup
  .object({
    anneeDeb: yup.date().required(),
    anneeFin: yup.date().required(),
    sessions: yup.string().required(),
    semestre: yup.string().required(),
    periode: yup.string().required(),
    classesClibles: yup.string().required(),
    libelleSession: yup.string().required(),
  })
  .required();

const SessionForm = ({ handleClose, show }) => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.createSession);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(createSession({ ...data, id: Math.floor(Math.random() * 100) }));
    if (success) {
      handleClose();
      reset();
    }
  };

  return (
    <AddDepartment
      handleClose={handleClose}
      show={show}
      title='Ajouter une Session'
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>date debut</Form.Label>
          <Form.Control
            type='date'
            placeholder='anneeDeb'
            {...register('anneeDeb')}
            className={errors.anneeDeb?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.anneeDeb?.message}</p>
        </Form.Group>

        <Form.Group>
          <Form.Label>date fin</Form.Label>
          <Form.Control
            type='date'
            placeholder='anneeFin'
            {...register('anneeFin')}
            className={errors.classesCibles?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.anneeFin?.message}</p>
        </Form.Group>

        <Form.Group>
          <Form.Label>sessions</Form.Label>
          <Form.Select
            {...register('sessions')}
            className={errors.sessions?.message && 'is-invalid'}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
          </Form.Select>
          <p className='invalid-feedback'>{errors.sessions?.message}</p>
        </Form.Group>

        <Form.Group>
          <Form.Label>semestre</Form.Label>
          <Form.Select
            {...register('semestre')}
            className={errors.semestre?.message && 'is-invalid'}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
          </Form.Select>
          <p className='invalid-feedback'>{errors.semestre?.message}</p>
        </Form.Group>

        <Form.Group>
          <Form.Label>periode</Form.Label>
          <Form.Select
            {...register('periode')}
            className={errors.periode?.message && 'is-invalid'}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
          </Form.Select>
          <p className='invalid-feedback'>{errors.periode?.message}</p>
        </Form.Group>
        <Form.Group>
          <Form.Label>libelleSession</Form.Label>
          <Form.Control
            type='text'
            placeholder='libelleSession'
            {...register('libelleSession')}
            className={errors.libelleSession?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.libelleSession?.message}</p>
        </Form.Group>

        <Button
          type='submit'
          className='mt-3 w-full  bg-red-600 text-white'
          variant=''
        >
          Ajouter
        </Button>
      </Form>
    </AddDepartment>
  );
};

export default SessionForm;
