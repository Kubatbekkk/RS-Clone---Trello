import React from 'react';
import useTitle from 'src/hooks/useTitle';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HomePage() {
  useTitle('HomePage');
  return (
    <Container className='mt-4 '>
      <header style={{ paddingLeft: 0, minHeight: '65vh' }}>
        <div
          className='p-5 text-center bg-image'
          style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 500 }}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-3'>RS Trello</h1>
                <h4 className='mb-3'>A simple clone of Trello for RSClone Task.</h4>
                <div className='d-flex justify-content-center gap-5 mt-5'>
                  <Link className='btn btn-outline-success btn-lg' to='/signup' role='button'>
                    Sign Up
                  </Link>
                  <Link className='btn btn-outline-warning btn-lg' to='/login' role='button'>
                    Log In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Container>
  );
}
