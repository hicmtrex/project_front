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
          <Form.Label>anneeDeb</Form.Label>
          <Form.Control
            type='date'
            placeholder='anneeDeb'
            {...register('anneeDeb')}
            className={errors.anneeDeb?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.anneeDeb?.message}</p>
        </Form.Group>

        <Form.Group>
          <Form.Label>anneeFin</Form.Label>
          <Form.Control
            type='date'
            placeholder='anneeFin'
            {...register('anneeFin')}
            className={errors.classesCibles?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.anneeFin?.message}</p>
        </Form.Group>

        <Form.Group>
          <Form.Label>ClassesCibles</Form.Label>
          <Form.Control
            type='text'
            placeholder='ClassesCibles'
            {...register('classesCibles')}
            className={errors.classesCibles?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.classesCibles?.message}</p>
        </Form.Group>

        <Form.Group>
          <Form.Label>sessions</Form.Label>
          <Form.Control
            type='text'
            placeholder='sessions'
            {...register('sessions')}
            className={errors.sessions?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.sessions?.message}</p>
        </Form.Group>

        <Form.Group>
          <Form.Label>semestre</Form.Label>
          <Form.Control
            type='text'
            placeholder='semestre'
            {...register('semestre')}
            className={errors.semestre?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.semestre?.message}</p>
        </Form.Group>

        <Form.Group>
          <Form.Label>periode</Form.Label>
          <Form.Control
            type='text'
            placeholder='periode'
            {...register('periode')}
            className={errors.periode?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.periode?.message}</p>
        </Form.Group>

        <Form.Group>
          <Form.Label>classesClibles</Form.Label>
          <Form.Control
            type='text'
            placeholder='classesClibles'
            {...register('classesClibles')}
            className={errors.classesClibles?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.classesClibles?.message}</p>
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
          Submit
        </Button>
      </Form>
    </AddDepartment>
  );
};

export default SessionForm;
