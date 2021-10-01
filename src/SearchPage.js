import React from "react";
import { useStateValue } from './StateProvider'
import { useGoogleSearch}  from './useGoogleSearch'

function SearchPage() {

    const [{term}, dispatch] = useStateValue();
    const {data} = useGoogleSearch(term)

    console.log(data)
  return (
    <div ClassName="searchPage">
      <div ClassName="searchPage__header">
          <h1>{term}</h1>
      </div>

      <div ClassName="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
