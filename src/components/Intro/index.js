import React from 'react';

// functional component
const Intro = (props) => {
  return (
    <p className="App-intro">
      { props.message }
    </p>
  );
}

export default Intro;

// if only one argument, can get rid off () as the following:
// const Intro = props => {}
