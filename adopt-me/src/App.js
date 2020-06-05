const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement('div', { id: 'something-important' }, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Lord Byron',
      animal: 'Cat pupper',
      breed: 'GA Maine Coon',
    }),
    React.createElement(Pet, {
      name: 'Kitty Mane',
      animal: 'Tough Cat',
      breed: 'GA Maine Coon',
    }),
    React.createElement(Pet, {
      name: 'SDF1',
      animal: 'Spaceship',
      breed: 'GA Maine Coon',
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
