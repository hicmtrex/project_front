import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import DashboardLayout from '../../components/layouts/dashboard-layout';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: 'Big Meeting',
    allDay: true,
    start: new Date(2022, 6, 0),
    end: new Date(2022, 6, 0),
  },
  {
    title: 'Vacation',
    start: new Date(2022, 6, 7),
    end: new Date(2022, 6, 10),
  },
  {
    title: 'Conference',
    start: new Date(2022, 6, 20),
    end: new Date(2022, 6, 23),
  },
];
const FulCalendar = () => {
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [allEvents, setAllEvents] = useState(events);
  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <DashboardLayout>
      <div id='topnavbar'>
        <div className='topnav '>
          <div className='d-flex px-1 '>
            <Link to='/epreuves'>List des epreuves</Link>
            <Link to='/calendrier'>Calendrier</Link>
          </div>
        </div>
      </div>
      <div className='App'>
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
      </div>
      <Card className='shadow'>
        <Card.Body>
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor='start'
            endAccessor='end'
            style={{ height: 500 }}
          />
        </Card.Body>
      </Card>
    </DashboardLayout>
  );
};

export default FulCalendar;
