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
    dateSeance: yup.date().required(),
    jour: yup.string().required(),
    hDeb: yup.string().required(),
    sessions: yup.string().required(),
    idSeance: yup.string().required(),
  })
  .required();

const SeanceUpdate = () => {
  const { id } = useParams();
  const { seances } = useSelector((state) => state.listSeance);
  const seance = seances.find((e) => e.id == id);
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
      .put(`/cexSeances/${epreuve.id}`, epreuve)
      .then((res) => {
        toast.success('seance has been updated');
        navigate('/seance');
      })
      .catch((e) => toast.error(setError(e)));
  };

  const onSubmit = (data) => {
    onUpdate({
      ...data,
      id: seance?.id,
    });
  };

  return (
    <DashboardLayout>
      <Row className='justify-content-md-center mt-5 pt-5  '>
        <Col md={6} lg={6} xl={4} sm={12}>
          <Card className='shadow p-5'>
            <h1 className='text-center'> Modifier Epreuve</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Label>Date Seance</Form.Label>
                <Form.Control
                  type='date'
                  placeholder='Date Seance'
                  {...register('dateSeance', {
                    value: seance?.dateSeance,
                  })}
                  className={errors.dateSeance?.message && 'is-invalid'}
                />
                <p className='invalid-feedback'>{errors.dateSeance?.message}</p>
              </Form.Group>

              <Form.Group>
                <Form.Label>Hdeb</Form.Label>
                <Form.Control
                  type='time'
                  placeholder='hDeb'
                  {...register('hDeb', {
                    value: seance?.hDeb,
                  })}
                  className={errors.hDeb?.message && 'is-invalid'}
                />
                <p className='invalid-feedback'>{errors.hDeb?.message}</p>
              </Form.Group>

              <Form.Group>
                <Form.Label>Jour</Form.Label>
                <Form.Select
                  def
                  defaultValue={seance?.jour}
                  {...register('jour', {
                    value: seance?.jour,
                  })}
                  className={errors.jour?.message && 'is-invalid'}
                >
                  <option value='lundi'>lundi</option>
                  <option value='mardi'>mardi</option>
                  <option value='mercredi'>mercredi</option>
                  <option value='jeudi'>jeudi</option>
                  <option value='vendredi'>vendredi</option>
                  <option value='samedi'>samedi</option>
                </Form.Select>
                <p className='invalid-feedback'>{errors.jour?.message}</p>
              </Form.Group>
              <Form.Group>
                <Form.Label>sessions</Form.Label>
                <Form.Select
                  {...register('sessions', {
                    value: seance?.sessions,
                  })}
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
                <Form.Label>Seance</Form.Label>
                <Form.Control
                  placeholder='Seance'
                  {...register('idSeance', {
                    value: seance?.idSeance,
                  })}
                  className={errors.idSeance?.message && 'is-invalid'}
                />
                <p className='invalid-feedback'>{errors.idSeance?.message}</p>
              </Form.Group>

              <Button
                type='submit'
                className='mt-3 w-full  bg-red-600 text-white'
                variant=''
              >
                Update
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </DashboardLayout>
  );
};

export default SeanceUpdate;
