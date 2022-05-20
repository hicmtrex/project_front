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

const EprevueUpdate = () => {
  const { id } = useParams();
  const { epreuves } = useSelector((state) => state.epreuvesList);
  const epreuve = epreuves.find((e) => e.id == id);
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
      .put(`/cexEpreuves/${epreuve.id}`, epreuve)
      .then((res) => {
        toast.success('epreuves has been updated');
        navigate('/epreuves');
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
            <h1 className='text-center'> Modifier Epreuve</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId='codeCl'>
                <Form.Label>codeCl</Form.Label>
                <Form.Control
                  {...register('codeCl', {
                    value: epreuve?.codeCl,
                  })}
                  className={errors.codeCl?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.codeCl?.message}</p>
              </Form.Group>

              <Form.Group controlId='codeModule'>
                <Form.Label>codeModule</Form.Label>
                <Form.Control
                  {...register('codeModule', {
                    value: epreuve?.codeModule,
                  })}
                  className={errors.codeModule?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.codeModule?.message}</p>
              </Form.Group>

              <Form.Group controlId='codeModule'>
                <Form.Label>dsex</Form.Label>
                <Form.Control
                  {...register('dsex', {
                    value: epreuve?.dsex,
                  })}
                  className={errors.dsex?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.dsex?.message}</p>
              </Form.Group>
              <Form.Group controlId='codeSalle1'>
                <Form.Label>codeSalle1</Form.Label>
                <Form.Control
                  {...register('codeSalle1', {
                    value: epreuve?.codeSalle1,
                  })}
                  className={errors.codeSalle1?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.codeSalle1?.message}</p>
              </Form.Group>

              <Form.Group controlId='codeSalle2'>
                <Form.Label>codeSalle2</Form.Label>
                <Form.Control
                  {...register('codeSalle2', {
                    value: epreuve?.codeSalle2,
                  })}
                  className={errors.codeSalle2?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.codeSalle2?.message}</p>
              </Form.Group>

              <Form.Group controlId='idSeance'>
                <Form.Label>idSeance</Form.Label>
                <Form.Control
                  {...register('idSeance', {
                    value: epreuve?.idSeance,
                  })}
                  className={errors.idSeance?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.idSeance?.message}</p>
              </Form.Group>

              <Form.Group controlId='idSession'>
                <Form.Label>idSession</Form.Label>
                <Form.Control
                  {...register('idSession', {
                    value: epreuve?.idSession,
                  })}
                  className={errors.idSession?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.idSession?.message}</p>
              </Form.Group>

              <Form.Group controlId='surv11'>
                <Form.Label>surv11</Form.Label>
                <Form.Control
                  {...register('surv11', {
                    value: epreuve?.surv11,
                  })}
                  className={errors.surv11?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.surv11?.message}</p>
              </Form.Group>
              <Form.Group controlId='surv12'>
                <Form.Label>surv12</Form.Label>
                <Form.Control
                  {...register('surv12', {
                    value: epreuve?.surv12,
                  })}
                  className={errors.surv12?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.surv12?.message}</p>
              </Form.Group>
              <Form.Group controlId='surv21'>
                <Form.Label>surv21</Form.Label>
                <Form.Control
                  {...register('surv21', {
                    value: epreuve?.surv21,
                  })}
                  className={errors.surv21?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.surv21?.message}</p>
              </Form.Group>
              <Form.Group controlId='surv22'>
                <Form.Label>surv22</Form.Label>
                <Form.Control
                  {...register('surv22', {
                    value: epreuve?.surv22,
                  })}
                  className={errors.surv22?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.surv22?.message}</p>
              </Form.Group>

              <Form.Group controlId='typeEpreuve'>
                <Form.Label>typeEpreuve</Form.Label>
                <Form.Control
                  {...register('typeEpreuve', {
                    value: epreuve?.typeEpreuve,
                  })}
                  className={errors.typeEpreuve?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>
                  {errors.typeEpreuve?.message}
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

export default EprevueUpdate;
