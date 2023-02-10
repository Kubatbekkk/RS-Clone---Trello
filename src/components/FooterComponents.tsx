import React from 'react';

function Footer() {
  return (
    <footer className="page-footer bg-secondary font-small blue pt-4 mt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase text-info">RS Trello</h5>
            <p className='text-light'>A simple clone of Trello for RSClone Task.</p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-info">Developers</h5>
            <ul className="list-unstyled">
              <li><a href="https://github.com/elMP" className='link-light' target='_blank' rel="noreferrer">Elena</a></li>
              <li><a href="https://github.com/Kubatbekkk" className='link-light' target='_blank' rel="noreferrer">Kubat</a></li>
              <li><a href="https://github.com/meloknaasfalte" className='link-light' target='_blank' rel="noreferrer">Nurlan</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-info">Task</h5>
            <ul className="list-unstyled">
              <li><a href="https://github.com/rolling-scopes-school/tasks/blob/master/tasks/rsclone/rsclone.md" className='link-light' target='_blank' rel="noreferrer">RSClone</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3 text-info">
        © 2023 Copyright:
        {' '}
        <a href="https://rs.school/" className='link-light link-unstyled' target='_blank' rel="noreferrer">

          RsSchool
        </a>
      </div>

    </footer>
  );
}

export default Footer;
