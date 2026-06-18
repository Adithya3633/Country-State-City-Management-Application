function CityList(props) {
  var state = props.state;
  var countryId = props.countryId;
  var onDeleteCity = props.onDeleteCity;

  if (!state.cities.length) {
    return React.createElement('p', { className: 'hint' }, 'No cities available under this state.');
  }

  return React.createElement(
    'div',
    { className: 'city-list' },
    state.cities.map(function (city) {
      return React.createElement(
        'div',
        { key: city.id, className: 'city-row' },
        React.createElement('span', null, city.name),
        React.createElement(
          'button',
          { className: 'small-button delete', onClick: function () { return onDeleteCity(countryId, state.id, city.id); } },
          'Delete'
        )
      );
    })
  );
}

window.CityList = CityList;
