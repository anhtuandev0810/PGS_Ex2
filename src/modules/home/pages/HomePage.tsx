import React from 'react';
import { Route } from 'react-router-dom';

interface Props {}

const HomePage = (props: Props) => {
  
  return (
    <>
      <div>This is base HomePage</div>
      <div 
        className = "row justify-content-md-center" 
        style = {{ margin: '16px 0' }}
      >
        <div className = "col-md-auto">
          <Route render={({ history }) => (
            <button
              className = "btn btn-primary"
              style = {{ minWidth: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
              type='button'
              onClick={() => { history.push('/contact') }}
            >
              Switch to ContactPage!
            </button>
          )}/>
        </div>
      </div>
    </>
  );
};

export default HomePage;
