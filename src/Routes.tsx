import { useRoutes } from "react-router";
import AlbumView from "./pages/AlbumView";
import Home from "./pages/Home";
import PhotoView from "./pages/PhotoView";

const Routes = () => {
    return useRoutes([
        {path: '/', element: <Home/>},
        {path: '/album/:id', element: <AlbumView/>},
        {path: '/album/:id/photo/:id', element: <PhotoView/>}
    ]);
}

export default Routes;