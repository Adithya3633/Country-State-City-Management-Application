function StateList(props) {
  var country = props.country;
  var onEditState = props.onEditState;
  var onDeleteState = props.onDeleteState;
  var onAddCity = props.onAddCity;
  var onDeleteCity = props.onDeleteCity;

  if (!country.states.length) {
    return React.createElement('p', { className: 'hint' }, 'No states available under this country.');
  }

  return React.createElement(
    'div',
    { className: 'state-list' },
    country.states.map(function (state) {
      return React.createElement(
        'div',
        { key: state.id, className: 'state-card' },
        React.createElement(
          'div',
          { className: 'state-header' },
          React.createElement('div', { className: 'state-title' }, state.name),
          React.createElement(
            'div',
            { className: 'button-row' },
            React.createElement('button', { className: 'small-button edit', onClick: function () { return onEditState(country.id, state.id); } }, 'Edit'),
            React.createElement('button', { className: 'small-button delete', onClick: function () { return onDeleteState(country.id, state.id); } }, 'Delete'),
            React.createElement('button', { className: 'small-button add', onClick: function () { return onAddCity(country.id, state.id); } }, '+ City')
          )
        ),
        React.createElement(CityList, { state: state, countryId: country.id, onDeleteCity: onDeleteCity })
      );
    })
  );
}

window.StateList = StateList;
