import React from 'react';
import DashboardLayout from '../../../components/layouts/dashboard-layout';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Card, Form, Col, Row, Button } from 'react-bootstrap';
import { myAxios } from '../../../utils/axios';
import toast from 'react-hot-toast';
import { setError } from '../../../utils/help-api';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const schema = yup
  .object({
    anneeDeb: yup.date().required(),
    anneeFin: yup.date().required(),
    sessions: yup.number().required(),
    semestre: yup.number().required(),
    periode: yup.number().required(),
    libelleSession: yup.string().required(),
  })
  .required();

const SessionUpdate = () => {
  const { id } = useParams();
  const { sessions } = useSelector((state) => state.listSession);
  const epreuve = sessions.find((e) => e.id == id);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onUpdate = (epreuve) => {
    myAxios
      .put(`/cexSessions/${epreuve.id}`, epreuve)
      .then((res) => {
        toast.success('epreuves has been updated');
        navigate('/session');
      })
      .catch((e) => toast.error(setError(e)));
  };

  const onSubmit = (data) => {
    onUpdate({
      ...data,
      id: epreuve?.id,
      anneeDeb: Math.floor(Math.random() * 100),
      anneeFin: Math.floor(Math.random() * 100),
    });
  };

  return (
    <DashboardLayout>
      <Row className='justify-content-md-center mt-5 pt-5  '>
        <Col md={6} lg={6} xl={4} sm={12}>
          <Card className='shadow p-5'>
            <h1 className='text-center'> Modifier Session</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId='anneeDeb'>
                <Form.Label>anneeDeb</Form.Label>
                <Form.Control
                  type='date'
                  {...register('anneeDeb', {
                    value: epreuve?.anneeDeb,
                  })}
                  className={errors.anneeDeb?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.anneeDeb?.message}</p>
              </Form.Group>

              <Form.Group controlId='anneeFin'>
                <Form.Label>anneeFin</Form.Label>
                <Form.Control
                  type='date'
                  {...register('anneeFin', {
                    value: epreuve?.anneeFin,
                  })}
                  className={errors.anneeFin?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.anneeFin?.message}</p>
              </Form.Group>

              <Form.Group controlId='sessions'>
                <Form.Label>sessions</Form.Label>
                <Form.Control
                  placeholder='sessions'
                  {...register('sessions', {
                    value: epreuve?.sessions,
                  })}
                  className={errors.sessions?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.sessions?.message}</p>
              </Form.Group>
              <Form.Group controlId='semestre'>
                <Form.Label>semestre</Form.Label>
                <Form.Control
                  placeholder='semestre'
                  {...register('semestre', {
                    value: epreuve?.semestre,
                  })}
                  className={errors.semestre?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.semestre?.message}</p>
              </Form.Group>
              <Form.Group controlId='periode'>
                <Form.Label>periode</Form.Label>
                <Form.Control
                  placeholder='periode'
                  {...register('periode', {
                    value: epreuve?.periode,
                  })}
                  className={errors.periode?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.periode?.message}</p>
              </Form.Group>

              <Form.Group controlId='libelleSession'>
                <Form.Label>libelleSession</Form.Label>
                <Form.Control
                  placeholder='libelleSession'
                  {...register('libelleSession', {
                    value: epreuve?.libelleSession,
                  })}
                  className={errors.libelleSession?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>
                  {errors.libelleSession?.message}
                </p>
              </Form.Group>
              <Form.Group className='mt-3'>
                <Button type='submit' className='w-full' variant='danger'>
                  modifier
                </Button>
              </Form.Group>
            </Form>
          </Card>
        </Col>
      </Row>
    </DashboardLayout>
  );
};

export default SessionUpdate;
