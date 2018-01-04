import React from 'react';
import { render } from 'react-dom';

// const ce = React.createElement;

const MyTitle = function(props) {
  // return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
  return (
    <div>
      <h1 style={{ color: props.color }}>{props.title}</h1>
    </div>
  );
};

const MyFirstComponent = function() {
  // return ce(
  //   'div',
  //   { id: 'my-first-component' },
  //   ce(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
  //   ce(MyTitle, { title: 'Stranger Things', color: 'GreenYellow' }),
  //   ce(MyTitle, { title: 'Rick and Morty', color: 'LimeGreen' }),
  //   ce(MyTitle, { title: 'Silicon Valley', color: 'peru' })
  // );

  return (
    <div id="my-first-component">
      <MyTitle title="Game of Thrones" color="YellowGreen" />
      <MyTitle title="Stranger Things" color="GreenYellow" />
      <MyTitle title="Rick and Morty" color="LimeGreen" />
      <MyTitle title="Silicon Valley" color="peru" />
    </div>
  );
};

render(<MyFirstComponent />, document.getElementById('app'));
