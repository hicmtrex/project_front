import React from 'react';
import Sidebar from './sidebar';
import Topbar from './topbar';
import { Container } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import Loader from '../UI/loader';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const DashboardLayout = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) return <Loader />;
  //if (error) return <Alert variant='danger'>{error.message}</Alert>;

  return (
    <div className='d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary'>
      <Sidebar />
      <div className='h-screen flex-grow-1 overflow-y-lg-auto'>
        <Topbar />
        <main className='py-6 bg-surface-secondary'>
          <Container fluid>{children}</Container>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
