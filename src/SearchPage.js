import React from "react";
import { useStateValue } from './StateProvider'
import useGoogleSearch  from './useGoogleSearch'
import './SearchPage.css'
import { Link } from "react-router-dom";
import Search from './Search'
import SearchIcon from '@mui/icons-material/Search'
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";


function SearchPage() {

    const [{term}, dispatch] = useStateValue();
    const {data} = useGoogleSearch(term)

    console.log(data)
  return (
    <div className="searchPage">
      <div className="searchPage__header">
       <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
      

      <div className="searchPage__headerbody">
          <Search hide />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__options">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
      </div>
      </div>

      <div className="searchPage__results"></div>
    </div> </div>
  );
}

export default SearchPage;
