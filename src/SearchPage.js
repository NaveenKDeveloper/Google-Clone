import React from "react";
import { useStateValue } from './StateProvider'
function SearchPage() {

    const [{term}, dispatch] = useStateValue();
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
