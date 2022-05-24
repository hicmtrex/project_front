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
    anneeDeb: yup.date().required(),
    anneeFin: yup.date().required(),
    codeCl: yup.string().required(),
    codeModule: yup.string().required(),
    dsex: yup.string().required(),
    codeSalle1: yup.string().required(),
    codeSalle2: yup.string().required(),
    idSeance: yup.number().required(),
    idSession: yup.number().required(),
    surv11: yup.string().required(),
    surv12: yup.string().required(),
    surv21: yup.string().required(),
    surv22: yup.string().required(),
    typeEpreuve: yup.string().required(),
  })
  .required();

const EpreuveForm = ({ handleCloseEp, showEp, setRefresh }) => {
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
        handleCloseEp();
        reset();
        navigate('/epreuves');
        setRefresh((prev) => (prev = !prev));
      })
      .catch((e) => toast.error(setError(e)));
  };

  const onSubmit = (data) => {
    onUpdate({
      ...data,
      idEpreuve: Math.floor(Math.random() * 100),
    });
  };
  return (
    <AddDepartment
      handleClose={handleCloseEp}
      show={showEp}
      title='Ajouter une Epreuve'
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId='anneeDeb'>
          <Form.Label>anneeDeb</Form.Label>
          <Form.Control
            type='date'
            {...register('anneeDeb')}
            className={errors.anneeDeb?.message && 'is-invalid'}
          />

          <p className='invalid-feedback'>{errors.anneeDeb?.message}</p>
        </Form.Group>
        <Form.Group controlId='anneeFin'>
          <Form.Label>anneeFin</Form.Label>
          <Form.Control
            type='date'
            {...register('anneeFin')}
            className={errors.anneeDeb?.message && 'is-invalid'}
          />

          <p className='invalid-feedback'>{errors.anneeFin?.message}</p>
        </Form.Group>
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
            type='number'
            {...register('idSeance')}
            className={errors.idSeance?.message && 'is-invalid'}
          />

          <p className='invalid-feedback'>{errors.idSeance?.message}</p>
        </Form.Group>

        <Form.Group controlId='idSession'>
          <Form.Label>idSession</Form.Label>
          <Form.Control
            type='number'
            {...register('idSession')}
            className={errors.idSession?.message && 'is-invalid'}
          />

          <p className='invalid-feedback'>{errors.idSession?.message}</p>
        </Form.Group>

        <Form.Group controlId='surv11'>
          <Form.Label>surveillant 1</Form.Label>
          <Form.Control
            {...register('surv11')}
            className={errors.surv11?.message && 'is-invalid'}
          />

          <p className='invalid-feedback'>{errors.surv11?.message}</p>
        </Form.Group>
        <Form.Group controlId='surv12'>
          <Form.Label>surveillant 2</Form.Label>
          <Form.Control
            {...register('surv12')}
            className={errors.surv12?.message && 'is-invalid'}
          />

          <p className='invalid-feedback'>{errors.surv12?.message}</p>
        </Form.Group>
        <Form.Group controlId='surv21'>
          <Form.Label>surveillant 3</Form.Label>
          <Form.Control
            {...register('surv21')}
            className={errors.surv21?.message && 'is-invalid'}
          />

          <p className='invalid-feedback'>{errors.surv21?.message}</p>
        </Form.Group>
        <Form.Group controlId='surv22'>
          <Form.Label>surveillant 4</Form.Label>
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
