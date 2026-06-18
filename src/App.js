const { useState } = React;

function App() {
  const [countries, setCountries] = useState([
    {
      id: 1,
      name: "India",
      states: [
        {
          id: 1,
          name: "Karnataka",
          cities: [{ id: 1, name: "Bangalore" }],
        },
      ],
    },
  ]);

  const [nextIds, setNextIds] = useState({ country: 2, state: 2, city: 2 });

  const getValidatedName = (value) => {
    if (value === null) return null;
    const trimmed = value.trim();
    return trimmed.length === 0 ? null : trimmed;
  };

  const addCountry = () => {
    const name = getValidatedName(prompt("Enter country name"));
    if (!name) return;

    setCountries((prev) => [
      ...prev,
      { id: nextIds.country, name, states: [] },
    ]);
    setNextIds((prev) => ({ ...prev, country: prev.country + 1 }));
  };

  const editCountry = (countryId) => {
    const country = countries.find((item) => item.id === countryId);
    if (!country) return;
    const confirmed = confirm("Are you sure you want to edit this country?");
    if (!confirmed) return;

    const name = getValidatedName(prompt("Enter new country name", country.name));
    if (!name) return;

    setCountries((prev) =>
      prev.map((item) =>
        item.id === countryId ? { ...item, name } : item
      )
    );
  };

  const deleteCountry = (countryId) => {
    const confirmed = confirm("Are you sure you want to delete this country?");
    if (!confirmed) return;

    setCountries((prev) => prev.filter((item) => item.id !== countryId));
  };

  const addState = (countryId) => {
    const name = getValidatedName(prompt("Enter state name"));
    if (!name) return;

    setCountries((prev) =>
      prev.map((country) =>
        country.id === countryId
          ? {
              ...country,
              states: [
                ...country.states,
                { id: nextIds.state, name, cities: [] },
              ],
            }
          : country
      )
    );
    setNextIds((prev) => ({ ...prev, state: prev.state + 1 }));
  };

  const editState = (countryId, stateId) => {
    const country = countries.find((item) => item.id === countryId);
    if (!country) return;
    const state = country.states.find((item) => item.id === stateId);
    if (!state) return;

    const confirmed = confirm("Are you sure you want to edit this state?");
    if (!confirmed) return;

    const name = getValidatedName(prompt("Enter new state name", state.name));
    if (!name) return;

    setCountries((prev) =>
      prev.map((countryItem) =>
        countryItem.id === countryId
          ? {
              ...countryItem,
              states: countryItem.states.map((item) =>
                item.id === stateId ? { ...item, name } : item
              ),
            }
          : countryItem
      )
    );
  };

  const deleteState = (countryId, stateId) => {
    const confirmed = confirm("Are you sure you want to delete this state?");
    if (!confirmed) return;

    setCountries((prev) =>
      prev.map((country) =>
        country.id === countryId
          ? {
              ...country,
              states: country.states.filter((item) => item.id !== stateId),
            }
          : country
      )
    );
  };

  const addCity = (countryId, stateId) => {
    const name = getValidatedName(prompt("Enter city name"));
    if (!name) return;

    setCountries((prev) =>
      prev.map((country) =>
        country.id === countryId
          ? {
              ...country,
              states: country.states.map((state) =>
                state.id === stateId
                  ? {
                      ...state,
                      cities: [
                        ...state.cities,
                        { id: nextIds.city, name },
                      ],
                    }
                  : state
              ),
            }
          : country
      )
    );
    setNextIds((prev) => ({ ...prev, city: prev.city + 1 }));
  };

  const deleteCity = (countryId, stateId, cityId) => {
    const confirmed = confirm("Are you sure you want to delete this city?");
    if (!confirmed) return;

    setCountries((prev) =>
      prev.map((country) =>
        country.id === countryId
          ? {
              ...country,
              states: country.states.map((state) =>
                state.id === stateId
                  ? {
                      ...state,
                      cities: state.cities.filter((item) => item.id !== cityId),
                    }
                  : state
              ),
            }
          : country
      )
    );
  };

  return React.createElement(
    'div',
    { className: 'app-root' },
    React.createElement(
      'header',
      { className: 'top-section' },
      React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'Country, State & City Management')
      ),
      React.createElement('button', { className: 'primary-button', onClick: addCountry }, '+ Add country')
    ),
    React.createElement(CountryList, {
      countries: countries,
      onEditCountry: editCountry,
      onDeleteCountry: deleteCountry,
      onAddState: addState,
      onEditState: editState,
      onDeleteState: deleteState,
      onAddCity: addCity,
      onDeleteCity: deleteCity,
    })
  );
}

window.App = App;
