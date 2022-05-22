import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import AddDepartment from '../modals/add-department';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createDepartment } from '../../store/department/create-slice';

//form validation with use form hook && yup
const schema = yup
  .object({
    CODE_DEPT: yup.string().required(),
    LIBELLE_DEPT: yup.string().required(),
    DATE_CR: yup.date().required(),
    DATE_DERNIER_MODIF: yup.date().required(),
  })
  .required();

const DepartmentForm = ({ handleClose, show }) => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.createDepartment);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const newDepartment = {
      id: Number(Math.floor(Math.random * 10)),
      CODE_DEPT: data.CODE_DEPT,
      LIBELLE_DEPT: data.LIBELLE_DEPT,
      DATE_CR: new Date(data.DATE_CR).toLocaleDateString('en-En'),
      DATE_DERNIER_MODIF: new Date(data.DATE_DERNIER_MODIF).toLocaleDateString(
        'en-EN'
      ),
    };
    dispatch(createDepartment(newDepartment));
    if (success) {
      handleClose();
      reset();
    }
  };

  return (
    <AddDepartment
      handleClose={handleClose}
      show={show}
      title='Ajouter une Department'
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Code Departement</Form.Label>
          <Form.Control
            type='text'
            placeholder='Code Departement'
            {...register('CODE_DEPT')}
            className={errors.CODE_DEPT?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.CODE_DEPT?.message}</p>
        </Form.Group>
        <Form.Group>
          <Form.Label>Date de creation</Form.Label>
          <Form.Control
            type='date'
            {...register('DATE_CR')}
            className={errors.DATE_CR?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.DATE_CR?.message}</p>
        </Form.Group>
        <Form.Group>
          <Form.Label>Date dernier Modification</Form.Label>
          <Form.Control
            type='date'
            {...register('DATE_DERNIER_MODIF')}
            className={errors.DATE_DERNIER_MODIF?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>
            {errors.DATE_DERNIER_MODIF?.message}
          </p>
        </Form.Group>
        <Form.Group>
          <Form.Label>libelle Departement</Form.Label>
          <Form.Control
            type='text'
            placeholder='libelle Departement'
            {...register('LIBELLE_DEPT')}
            className={errors.LIBELLE_DEPT?.message && 'is-invalid'}
          />
          <p className='invalid-feedback'>{errors.LIBELLE_DEPT?.message}</p>
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

export default DepartmentForm;
