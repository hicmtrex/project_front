import React from 'react';
import { Button, Form } from 'react-bootstrap';
import AddDepartment from '../modals/add-department';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { myAxios } from '../../utils/axios';
import toast from 'react-hot-toast';
import { setError } from '../../utils/help-api';
import { useNavigate } from 'react-router-dom';

//form validation with use form hook && yup
const schema = yup
  .object({
    // anneeDeb: yup.string().required(),
    // anneeFin: yup.string().required(),
    codeCl: yup.string().required(),
    codeModule: yup.string().required(),
    dsex: yup.string().required(),
    codeSalle1: yup.string().required(),
    codeSalle2: yup.string().required(),
    idSeance: yup.string().required(),
    idSession: yup.string().required(),
    surv11: yup.string().required(),
    surv12: yup.string().required(),
    surv21: yup.string().required(),
    surv22: yup.string().required(),
    typeEpreuve: yup.string().required(),
  })
  .required();

const EpreuveForm = ({ handleClose, show, setRefresh }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onUpdate = (epreuve) => {
    myAxios
      .post(`/cexEpreuves`, epreuve)
      .then((res) => {
        toast.success('epreuves has been created');
        handleClose();
        reset();
        navigate('/epreuves');
        setRefresh((prev) => (prev = !prev));
      })
      .catch((e) => toast.error(setError(e)));
  };

  const onSubmit = (data) => {
    onUpdate({
      ...data,
      id: Math.floor(Math.random() * 100),
      anneeDeb: Math.floor(Math.random() * 100).toString(),
      anneeFin: Math.floor(Math.random() * 100).toString(),
    });
  };
  return (
    <AddDepartment
      handleClose={handleClose}
      show={show}
      title='Ajouter une Department'
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId='codeCl'>
          <Form.Label>codeCl</Form.Label>
          <Form.Control
            {...register('codeCl')}
            className={errors.codeCl?.message && 'is-invalid'}
          />

          <p className='invalid-feedback'>{errors.codeCl?.message}</p>
        </Form.Group>

        <Form.Group controlId='codeModule'>
          <Form.Label>codeModule</Form.Label>
          <Form.Control
            {...register('codeModule')}
            className={errors.codeModule?.message && 'is-invalid'}
          />

          <p className='invalid-feedback'>{errors.codeModule?.message}</p>
        </Form.Group>

        <Form.Group controlId='codeModule'>
          <Form.Label>dsex</Form.Label>
          <Form.Control
            {...register('dsex')}
            className={errors.dsex?.message && 'is-invalid'}
          />

          <p className='invalid-feedback'>{errors.dsex?.message}</p>
        </Form.Group>
        <Form.Group controlId='codeSalle1'>
          <Form.Label>codeSalle1</Form.Label>
          <Form.Control
            {...register('codeSalle1')}
            className={errors.codeSalle1?.message && 'is-invalid'}
          />

          <p className='invalid-feedback'>{errors.codeSalle1?.message}</p>
        </Form.Group>

        <Form.Group controlId='codeSalle2'>
          <Form.Label>codeSalle2</Form.Label>
          <Form.Control
            {...register('codeSalle2')}
            className={errors.codeSalle2?.message && 'is-invalid'}
          />

          <p className='invalid-feedback'>{errors.codeSalle2?.message}</p>
        </Form.Group>

        <Form.Group controlId='idSeance'>
          <Form.Label>idSeance</Form.Label>
          <Form.Control
            {...register('idSeance')}
            className={errors.idSeance?.message && 'is-invalid'}
          />

          <p className='invalid-feedback'>{errors.idSeance?.message}</p>
        </Form.Group>

        <Form.Group controlId='idSession'>
          <Form.Label>idSession</Form.Label>
          <Form.Control
            {...register('idSession')}
            className={errors.idSession?.message && 'is-invalid'}
          />

          <p className='invalid-feedback'>{errors.idSession?.message}</p>
        </Form.Group>

        <Form.Group controlId='surv11'>
          <Form.Label>surv11</Form.Label>
          <Form.Control
            {...register('surv11')}
            className={errors.surv11?.message && 'is-invalid'}
          />

          <p className='invalid-feedback'>{errors.surv11?.message}</p>
        </Form.Group>
        <Form.Group controlId='surv12'>
          <Form.Label>surv12</Form.Label>
          <Form.Control
            {...register('surv12')}
            className={errors.surv12?.message && 'is-invalid'}
          />

          <p className='invalid-feedback'>{errors.surv12?.message}</p>
        </Form.Group>
        <Form.Group controlId='surv21'>
          <Form.Label>surv21</Form.Label>
          <Form.Control
            {...register('surv21')}
            className={errors.surv21?.message && 'is-invalid'}
          />

          <p className='invalid-feedback'>{errors.surv21?.message}</p>
        </Form.Group>
        <Form.Group controlId='surv22'>
          <Form.Label>surv22</Form.Label>
          <Form.Control
            {...register('surv22')}
            className={errors.surv22?.message && 'is-invalid'}
          />

          <p className='invalid-feedback'>{errors.surv22?.message}</p>
        </Form.Group>

        <Form.Group controlId='typeEpreuve'>
          <Form.Label>typeEpreuve</Form.Label>
          <Form.Control
            {...register('typeEpreuve')}
            className={errors.typeEpreuve?.message && 'is-invalid'}
          />

          <p className='invalid-feedback'>{errors.typeEpreuve?.message}</p>
        </Form.Group>
        <Form.Group className='mt-3'>
          <Button type='submit' className='w-full' variant='danger'>
            Ajouter
          </Button>
        </Form.Group>
      </Form>
    </AddDepartment>
  );
};

export default EpreuveForm;
