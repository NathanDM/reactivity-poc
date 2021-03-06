import React from 'react';
import Header from './header/header.react';
import Dashboard from './content/dashboard.react';

function Core() {
  return (
    <div className="core">
      <Header/>
      <Dashboard
        addSticky={() => {
          const req = new XMLHttpRequest();
          req.open('POST', 'http://localhost:8080/sse/artifacts', false);
          req.send(null);
        }}
        updateSticky={() => {
          const xhr = new XMLHttpRequest();
          xhr.open('PUT', 'http://localhost/update', true);
          xhr.send();
        }}
        removeSticky={() => {
          const xhr = new XMLHttpRequest();
          xhr.open('DELETE', 'http://localhost/delete', true);
          xhr.send();
        }}
      />
    </div>
  );
}

export default Core;
