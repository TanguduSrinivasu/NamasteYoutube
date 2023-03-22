import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Config";
import { searchResults } from "../utils/resultSlice";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector(store => store.search);

  const navigate = useNavigate();

  //console.log(searchCache)


/*

searchCache = {
  "ip" : [iphone, iphone13, iphone14]
}

searchQuery = "ip"

*/

  useEffect(() => {
    //console.log(searchQuery);

    // const timer = setTimeout(() => getSearchSuggestions(), 200);
    // //make API call after every keypress
    // //but if the difference between two keystrokes is < 200ms then decline the call
    
    const timer = setTimeout(() => {
    
    if(searchCache[searchQuery])
    {
      setSuggestions(searchCache[searchQuery]);
    }
    else{
      getSearchSuggestions();
    }
  }
    , 200);
    

    return () => {
      clearTimeout(timer); //destroy the timer before the next re-render starts (if the keystrokes gap is <200msec)
    };
  }, [searchQuery]);

  const dispatch = useDispatch();

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);

    //store the data in the cache
    dispatch(cacheResults({
      [searchQuery] : json[1]
    }));
  };


  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const searchHandler = (searchQuery) => {
    if (searchQuery === "") return null;
    //dispatch(searchResults(searchQuery));
    navigate('/results?search_query='+searchQuery);
    console.log(searchQuery);
  };

  const searchListHandler = (sugg) => {
    if(sugg === '') return null;
    //dispatch(searchResults(sugg));
    navigate('/results?search_query='+sugg);
    console.log(sugg  + ' In Head');

  }


  return (
    <div className="flex flex-row flex-nowrap p-3 shadow-lg bg-white w-[94rem] fixed">
      <div className="flex">
        <img
          className="h-8  cursor-pointer"
          alt="Handburger-Menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          onClick={() => toggleMenuHandler()}
        />

        <Link to="/">
          <img
            className="h-8 ml-3"
            alt="Youtube-Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </Link>
      </div>
      <div>
        <div>
          <input
            className="border border-gray-500 p-1 ml-60 pl-5 rounded-l-full w-[32rem]"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            //onBlur={() => setShowSuggestions(false)}
          ></input>
          <button
            className="border border-gray-500 px-5 py-1 rounded-r-full bg-gray-200"
            onClick={() => searchHandler(searchQuery)}
          >
            🔍
          </button>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className="fixed bg-white mx-60 my-1 py-2 px-2 w-[33rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((sugg) => (
                <li
                  key={sugg}
                  className="hover:bg-gray-100 py-1"
                  onClick={() => {
                   searchListHandler(sugg);
                   setShowSuggestions(false);
                  }}
                >
                  🔍 {sugg}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="ml-44">
        <Link to='form'>
        <img
          className="h-8"
          alt="userIcon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        </Link>
      </div>
    </div>
  );
};

export default Head;
