import { useRoutes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AlbumView from "./pages/AlbumView/AlbumView";
import PhotoView from "./pages/PhotoView/PhotoView";
import NotFound from "./pages/NotFound";

const Routes = () => {
    return useRoutes([
        {path: '/', element: <Home/>},
        {path: '/album/:id', element: <AlbumView/>},
        {path: '/album/:idAlbum/photo/:id', element: <PhotoView/>},
        {path: '*', element: <NotFound/>}
    ]);
}

export default Routes;