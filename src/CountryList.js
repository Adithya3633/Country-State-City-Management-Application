function CountryList({
  countries,
  onEditCountry,
  onDeleteCountry,
  onAddState,
  onEditState,
  onDeleteState,
  onAddCity,
  onDeleteCity,
}) {
  if (!countries.length) {
    return <p className="empty-state">No countries available. Add a country to begin.</p>;
  }

  return (
    <div className="country-list">
      {countries.map((country) => (
        <div key={country.id} className="country-card">
          <div className="country-header">
            <div className="country-title">{country.name}</div>
            <div className="button-row">
              <button className="small-button edit" onClick={() => onEditCountry(country.id)}>
                Edit
              </button>
              <button className="small-button delete" onClick={() => onDeleteCountry(country.id)}>
                Delete
              </button>
              <button className="small-button add" onClick={() => onAddState(country.id)}>
                + State
              </button>
            </div>
          </div>

          <StateList
            country={country}
            onEditState={onEditState}
            onDeleteState={onDeleteState}
            onAddCity={onAddCity}
            onDeleteCity={onDeleteCity}
          />
        </div>
      ))}
    </div>
  );
}

window.CountryList = CountryList;
