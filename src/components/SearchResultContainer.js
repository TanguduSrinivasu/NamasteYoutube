import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { SEARCH_RESULTS_API } from "../utils/Config";
import SearchVideoCard from "./SearchVideoCard";
import { openMenu } from "../utils/appSlice";
import ShimmerSearchVideoCard from "./ShimmerSearchVideoCard";


const SearchVideoContainer = () => {
  const [searchParams] = useSearchParams();
  //const [isCalled, setIsCalled] = useState(false);
  const [resultVideos, setResultVideos] = useState(null);

  //const {isSearched, searchQuery} = useSelector(store => store.results);

  const search = searchParams.get("search_query");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
    search && searchVideos();
  }, [search]);

  //console.log('isSearched ' + isSearched);

  const searchVideos = async () => {
    if (search.length > 0) {
      const data = await fetch(SEARCH_RESULTS_API + search);
      const json = await data.json();
      setResultVideos(json.items);
      //console.log(searchQuery + ' In Container');
      //console.log(searchQuery);
      //console.log(json.items);
      //setIsCalled(true);
    }
  };


    return resultVideos ? (
      <div className="flex flex-wrap justify-start pl-7 w-[82rem] ml-52 shadow-lg mb-2">
         { resultVideos.map((video) => {
            return (
              <Link to={"/watch?v=" + video.id.videoId} key={video.id.videoId}>
                <SearchVideoCard info={video} />
              </Link>
            );
          })}
        {/* <VideoCard info={videos[0]}/> */}
      </div>
    ) : <ShimmerSearchVideoCard/>
};

export default SearchVideoContainer;
