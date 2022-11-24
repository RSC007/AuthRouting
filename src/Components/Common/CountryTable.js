import React from "react";
import { useGetCountriesQuery } from "../../Redux/countrySlice";

const CountryTable = () => {
    const { data: userData, isLoading } = useGetCountriesQuery({ endpoint: "all" })
  return (
    <>
    {isLoading ? "Loading" : 
    <div className="country-table">
      <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Country Name</th>
            <th scope="col">Capital</th>
            <th scope="col">Currency Name</th>
          </tr>
        </thead>
        <tbody>
            { 
              userData?.length ? userData.map((data, index) => 
              <tr key={index}>
                <th>{data.name}</th>
                <td>{data.capital}</td>
                <td> {data?.currencies?.length ? `${data?.currencies[0].symbol}- ${data?.currencies[0].name}` : ""}</td>
              </tr>) : null
            }
        </tbody>
      </table>
      </div>  
    </div>}
    </>
    );
};

export default CountryTable;
