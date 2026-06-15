function StateList({ country, onEditState, onDeleteState, onAddCity, onDeleteCity }) {
  if (!country.states.length) {
    return <p className="hint">No states available under this country.</p>;
  }

  return (
    <div className="state-list">
      {country.states.map((state) => (
        <div key={state.id} className="state-card">
          <div className="state-header">
            <div className="state-title">{state.name}</div>
            <div className="button-row">
              <button className="small-button edit" onClick={() => onEditState(country.id, state.id)}>
                Edit
              </button>
              <button className="small-button delete" onClick={() => onDeleteState(country.id, state.id)}>
                Delete
              </button>
              <button className="small-button add" onClick={() => onAddCity(country.id, state.id)}>
                + City
              </button>
            </div>
          </div>

          <CityList state={state} countryId={country.id} onDeleteCity={onDeleteCity} />
        </div>
      ))}
    </div>
  );
}

window.StateList = StateList;
