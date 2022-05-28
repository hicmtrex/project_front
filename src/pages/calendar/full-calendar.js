import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DashboardLayout from '../../components/layouts/dashboard-layout';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setStaticEventById } from '../../store/events/list-slice';
import Loader from '../../components/UI/loader';
import moment from 'moment';
import 'moment-timezone';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

moment.tz.setDefault('Africa/Tunis');

const localizer = momentLocalizer(moment);

const FulCalendar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { staticEvents, loading, staticEventDetail } = useSelector(
    (state) => state.eventList
  );

  const { event, loading: loadingEvent } = useSelector(
    (state) => state.eventDetails
  );

  const { id } = useParams();

  const handleChange = (value) => {
    navigate(`/calendrier/${value}`);
  };

  useEffect(() => {
    dispatch(setStaticEventById(id));
  }, [dispatch, id]);

  if ((loading, loadingEvent)) return <Loader />;
  return (
    <DashboardLayout>
      <div id='topnavbar' className='d-flex justify-content-between'>
        <div className='topnav '>
          <div className='d-flex px-1 '>
            <Link to='/epreuves'>List des epreuves</Link>
            <Link to='/calendrier/1'>Calendrier</Link>
            <Link to='/admin-calendrier'>Admin-Calendrier</Link>
          </div>
        </div>
        <h1 className='text-red-600'>{staticEventDetail?.codeModule}</h1>
        <div className='shadow px-3 bg-white'>
          <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id='demo-simple-select-standard-label'>
              Class
            </InputLabel>
            <Select
              onChange={(event) => handleChange(event.target.value)}
              label='Class'
            >
              {staticEvents.map((ev) => (
                <MenuItem value={ev?.id} key={ev.id}>
                  {ev?.codeModule}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      {/* <div className='App'>
        <input
          type='text'
          placeholder='Add Title'
          style={{ width: '20%', marginRight: '10px' }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText='Start Date'
          style={{ marginRight: '10px' }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText='End Date'
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button stlye={{ marginTop: '10px' }} onClick={handleAddEvent}>
          Add Event
        </button>
      </div> */}
      <Card className='shadow mt-5'>
        <Card.Body>
          <Calendar
            culture='fr'
            localizer={localizer}
            events={staticEventDetail?.classes}
            startAccessor='start'
            endAccessor='end'
            style={{ height: 900 }}
          />
        </Card.Body>
      </Card>
    </DashboardLayout>
  );
};

export default FulCalendar;
