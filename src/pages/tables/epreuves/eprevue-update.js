import React from 'react';
import DashboardLayout from '../../../components/layouts/dashboard-layout';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Card, Form, Col, Row, Button } from 'react-bootstrap';

const schema = yup
  .object({
    anneeDeb: yup.string().required(),
    anneeFin: yup.string().required(),
    codeCl: yup.string().required(),
    codeModule: yup.string().required(),
  })
  .required();

const condidat = {};
const EprevueUpdate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {};
  return (
    <DashboardLayout>
      <Row className='justify-content-md-center mt-5 pt-5  '>
        <Col md={6} lg={6} xl={4} sm={12}>
          <Card className='shadow p-5'>
            <h1 className='text-center'> Condidat Epreuve</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId='firstName'>
                <Form.Label>codeCl</Form.Label>
                <Form.Control
                  {...register('codeCl', {
                    value: condidat?.firstName,
                  })}
                  className={errors.codeCl?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.codeCl?.message}</p>
              </Form.Group>

              <Form.Group controlId='codeModule'>
                <Form.Label>codeModule</Form.Label>
                <Form.Control
                  {...register('codeModule', {
                    value: condidat?.email,
                  })}
                  className={errors.codeModule?.message && 'is-invalid'}
                />

                <p className='invalid-feedback'>{errors.codeModule?.message}</p>
              </Form.Group>
              <Form.Group className='mt-3'>
                <Button type='submit' className='w-full' variant='danger'>
                  Edit
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
