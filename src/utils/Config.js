export const GOOGLE_API_KEY = 'AIzaSyAPLNh3yExuFcoVnx_ZaKXsT7Z8VOqA8lk';

export const YOUTUBE_VIDEO_API = 
'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = 
'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const SEARCH_RESULTS_API = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key='+GOOGLE_API_KEY+'&q=';