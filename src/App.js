import React from 'react';
import TopBar from './TopBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <p>
        For the state in functional components, it is a little bit different.
        Before the end of 2018, developers were not able to access state in functional
        components at all. Functional components were therefore just used for returning
        JSX logic. However, with the introduction of React Hooks, this has changed.
        Now we can set and access state in functional components, and for newer code,
        they are often preferred over class components. You will be exposed to both kinds
        of components on the job, requiring us to be very familiar with both. The
        way React hooks work is the topic of one of the following lectures, so don’t
        worry about it too much right now. We are setting you up to say “Hey! I remember
        that” when it’s introduced.
        </p>
    </div>
  );
}

export default App;
