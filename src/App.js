import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import store from "./utils/store";
import VideoContainer from "./components/VideoContainer";
import SearchResultContainer from "./components/SearchResultContainer";
import UserForm from "./components/UserForm";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Head/>
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer/>,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/results",
        element: <SearchResultContainer/>
      },
      {
        path: "/form",
        element: <UserForm/>
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <h1 className='text-3xl font-bold text-red-400'>Namaste React</h1> */}
        <RouterProvider router={appRouter} />
        {/*App will behave according to the appRouter Routing should be done only inside the body leaving head common for anything */}
      </div>
    </Provider>
  );
}

export default App;
