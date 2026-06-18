function CountryList(props) {
  var countries = props.countries;
  var onEditCountry = props.onEditCountry;
  var onDeleteCountry = props.onDeleteCountry;
  var onAddState = props.onAddState;
  var onEditState = props.onEditState;
  var onDeleteState = props.onDeleteState;
  var onAddCity = props.onAddCity;
  var onDeleteCity = props.onDeleteCity;

  if (!countries.length) {
    return React.createElement('p', { className: 'empty-state' }, 'No countries available. Add a country to begin.');
  }

  return React.createElement(
    'div',
    { className: 'country-list' },
    countries.map(function (country) {
      return React.createElement(
        'div',
        { key: country.id, className: 'country-card' },
        React.createElement(
          'div',
          { className: 'country-header' },
          React.createElement('div', { className: 'country-title' }, country.name),
          React.createElement(
            'div',
            { className: 'button-row' },
            React.createElement('button', { className: 'small-button edit', onClick: function () { return onEditCountry(country.id); } }, 'Edit'),
            React.createElement('button', { className: 'small-button delete', onClick: function () { return onDeleteCountry(country.id); } }, 'Delete'),
            React.createElement('button', { className: 'small-button add', onClick: function () { return onAddState(country.id); } }, '+ State')
          )
        ),
        React.createElement(StateList, { country: country, onEditState: onEditState, onDeleteState: onDeleteState, onAddCity: onAddCity, onDeleteCity: onDeleteCity })
      );
    })
  );
}

window.CountryList = CountryList;
