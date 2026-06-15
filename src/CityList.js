function CityList({ state, countryId, onDeleteCity }) {
  if (!state.cities.length) {
    return <p className="hint">No cities available under this state.</p>;
  }

  return (
    <div className="city-list">
      {state.cities.map((city) => (
        <div key={city.id} className="city-row">
          <span>{city.name}</span>
          <button className="small-button delete" onClick={() => onDeleteCity(countryId, state.id, city.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

window.CityList = CityList;
