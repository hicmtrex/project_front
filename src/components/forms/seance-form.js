import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import AddDepartment from '../modals/add-department';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createSeance } from '../../store/seance/create-slice';

//form validation with use form hook && yup
const schema = yup
  .object({
    classesCibles: yup.string().required(),
    dateSeance: yup.string().required(),
    jour: yup.string().required(),
    hDeb: yup.string().required(),
    sessions: yup.string().required(),
    seance: yup.string().required(),
  })
  .required();

const SeanceForm = ({ handleClose, show }) => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.createSeance);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(createSeance({ ...data, id: Math.floor(Math.random() * 100) }));
    if (success) {
      handleClose();
      reset();
    }
  };

  return (
    <AddDepartment
      handleClose={handleClose}
      show={show}
      title='Ajouter une Séance'
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Form.Label>Date Seance</Form.Label>
          <Form.Control
            type='text'
            placeholder='Code Departement'
            {...register('dateSeance')}
            className={errors.dateSeance?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.dateSeance?.message}</p>
        </Form.Group>

        <Form.Group>
          <Form.Label>Hdeb</Form.Label>
          <Form.Control
            type='text'
            placeholder='hDeb'
            {...register('hDeb')}
            className={errors.hDeb?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.hDeb?.message}</p>
        </Form.Group>

        <Form.Group>
          <Form.Label>Jour</Form.Label>
          <Form.Control
            type='text'
            placeholder='jour'
            {...register('jour')}
            className={errors.jour?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.jour?.message}</p>
        </Form.Group>

        <Form.Group>
          <Form.Label>Sessions</Form.Label>
          <Form.Control
            type='text'
            placeholder='Code Departement'
            {...register('sessions')}
            className={errors.sessions?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.sessions?.message}</p>
        </Form.Group>

        <Form.Group>
          <Form.Label>Seance</Form.Label>
          <Form.Control
            type='text'
            placeholder='Code Departement'
            {...register('seance')}
            className={errors.seance?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.seance?.message}</p>
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

export default SeanceForm;
