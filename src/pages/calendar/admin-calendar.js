import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layouts/dashboard-layout';
import './admin-calendar.css';
const AdminCalendar = () => {
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
      </div>

      <Card className='shadow mt-5'>
        <Card.Body>
          <div className='timetable-img text-center'>
            <img src='img/content/timetable.png' alt='' />
          </div>
          <div className='table-responsive'>
            <table className='table table-bordered text-center'>
              <thead>
                <tr className='bg-light-gray'>
                  <th className='text-uppercase'>Time</th>
                  <th className='text-uppercase'>Monday</th>
                  <th className='text-uppercase'>Tuesday</th>
                  <th className='text-uppercase'>Wednesday</th>
                  <th className='text-uppercase'>Thursday</th>
                  <th className='text-uppercase'>Friday</th>
                  <th className='text-uppercase'>Saturday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='align-middle'>08:15</td>
                  <td>
                    <span className='bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13'>
                      Dance
                    </span>
                    <div className='margin-10px-top font-size14'>
                      9:00-10:00
                    </div>
                    <div className='font-size13 text-light-gray'>
                      Ivana Wong
                    </div>
                  </td>
                  <td>
                    <span className='bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13'>
                      Yoga
                    </span>
                    <div className='margin-10px-top font-size14'>
                      9:00-10:00
                    </div>
                    <div className='font-size13 text-light-gray'>
                      Marta Healy
                    </div>
                  </td>
                  <td>
                    <span className='bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13'>
                      Music
                    </span>
                    <div className='margin-10px-top font-size14'>
                      9:00-10:00
                    </div>
                    <div className='font-size13 text-light-gray'>
                      Ivana Wong
                    </div>
                  </td>
                  <td>
                    <span className='bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13'>
                      Dance
                    </span>
                    <div className='margin-10px-top font-size14'>
                      9:00-10:00
                    </div>
                    <div className='font-size13 text-light-gray'>
                      Ivana Wong
                    </div>
                  </td>
                  <td>
                    <span className='bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13'>
                      Art
                    </span>
                    <div className='margin-10px-top font-size14'>
                      9:00-10:00
                    </div>
                    <div className='font-size13 text-light-gray'>
                      Kate Alley
                    </div>
                  </td>
                  <td>
                    <span className='bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13'>
                      English
                    </span>
                    <div className='margin-10px-top font-size14'>
                      9:00-10:00
                    </div>
                    <div className='font-size13 text-light-gray'>
                      James Smith
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='align-middle'>10:30</td>
                  <td>
                    <span className='bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13'>
                      Music
                    </span>
                    <div className='margin-10px-top font-size14'>
                      10:00-11:00
                    </div>
                    <div className='font-size13 text-light-gray'>
                      Ivana Wong
                    </div>
                  </td>
                  <td className='bg-light-gray'></td>
                  <td>
                    <span className='bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13'>
                      Art
                    </span>
                    <div className='margin-10px-top font-size14'>
                      10:00-11:00
                    </div>
                    <div className='font-size13 text-light-gray'>
                      Kate Alley
                    </div>
                  </td>
                  <td>
                    <span className='bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13'>
                      Yoga
                    </span>
                    <div className='margin-10px-top font-size14'>
                      10:00-11:00
                    </div>
                    <div className='font-size13 text-light-gray'>
                      Marta Healy
                    </div>
                  </td>
                  <td>
                    <span className='bg-pink padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13'>
                      English
                    </span>
                    <div className='margin-10px-top font-size14'>
                      10:00-11:00
                    </div>
                    <div className='font-size13 text-light-gray'>
                      James Smith
                    </div>
                  </td>
                  <td className='bg-light-gray'></td>
                </tr>
                <tr>
                  <td className='align-middle'>12:45</td>
                  <td>
                    <span className='bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13'>
                      Break
                    </span>
                    <div className='margin-10px-top font-size14'>
                      11:00-12:00
                    </div>
                  </td>
                  <td>
                    <span className='bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13'>
                      Break
                    </span>
                    <div className='margin-10px-top font-size14'>
                      11:00-12:00
                    </div>
                  </td>
                  <td>
                    <span className='bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13'>
                      Break
                    </span>
                    <div className='margin-10px-top font-size14'>
                      11:00-12:00
                    </div>
                  </td>
                  <td>
                    <span className='bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13'>
                      Break
                    </span>
                    <div className='margin-10px-top font-size14'>
                      11:00-12:00
                    </div>
                  </td>
                  <td>
                    <span className='bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13'>
                      Break
                    </span>
                    <div className='margin-10px-top font-size14'>
                      11:00-12:00
                    </div>
                  </td>
                  <td>
                    <span className='bg-lightred padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13'>
                      Break
                    </span>
                    <div className='margin-10px-top font-size14'>
                      11:00-12:00
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='align-middle'>15:00</td>
                  <td className='bg-light-gray'></td>
                  <td>
                    <span className='bg-purple padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13'>
                      Art
                    </span>
                    <div className='margin-10px-top font-size14'>
                      12:00-1:00
                    </div>
                    <div className='font-size13 text-light-gray'>
                      Kate Alley
                    </div>
                  </td>
                  <td>
                    <span className='bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13'>
                      Dance
                    </span>
                    <div className='margin-10px-top font-size14'>
                      12:00-1:00
                    </div>
                    <div className='font-size13 text-light-gray'>
                      Ivana Wong
                    </div>
                  </td>
                  <td>
                    <span className='bg-yellow padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13'>
                      Music
                    </span>
                    <div className='margin-10px-top font-size14'>
                      12:00-1:00
                    </div>
                    <div className='font-size13 text-light-gray'>
                      Ivana Wong
                    </div>
                  </td>
                  <td className='bg-light-gray'></td>
                  <td>
                    <span className='bg-green padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16  xs-font-size13'>
                      Yoga
                    </span>
                    <div className='margin-10px-top font-size14'>
                      12:00-1:00
                    </div>
                    <div className='font-size13 text-light-gray'>
                      Marta Healy
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </DashboardLayout>
  );
};

export default AdminCalendar;
