import React from 'react';
import { Route } from 'react-router-dom';


interface Props {}

const ContactPage = (props: Props) => {
  return (
    <div>
      <div>This is Contact Page</div>
      <div 
        className = "row justify-content-md-center" 
        style = {{ margin: '16px 0' }}
      >
        <div 
          className = "col-md-auto"
        >
        <Route render={({ history }) => (
            <button
              className = "btn btn-primary"
              style = {{ minWidth: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
              type='button'
              onClick={() => { history.push('/home') }}
            >
              Switch to HomePage!
            </button>
          )}/>

        </div>
      </div>
    </div>
  )
};

export default ContactPage;
