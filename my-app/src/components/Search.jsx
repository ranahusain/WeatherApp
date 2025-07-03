import { AsyncPaginate } from "react-select-async-paginate";
import "../index.css";

const Search = ({ search, setSearch }) => {
  const loadOptions = async (inputValue) => {
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1&namePrefix=${inputValue}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "fc542eb148msha4105030bab4ea0p1b689bjsn27feefb3185b",
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();

      console.log(data);

      return {
        options: data.data.map((city) => ({
          label: `${city.city}, ${city.countryCode}`,
        })),
      };
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnChange = async (searchData) => {
    setSearch(searchData.label);
  };

  console.log("Hello ", search);
  return (
    <AsyncPaginate
      debounceTimeout={600}
      value={search}
      loadOptions={loadOptions}
      onChange={handleOnChange}
      className="async"
      placeholder={search}
    />
  );
};

export default Search;
