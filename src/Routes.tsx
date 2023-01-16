import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import AlbumView from "./pages/AlbumView";
import PhotoView from "./pages/PhotoView";

const Routes = () => {
    return useRoutes([
        {path: '/', element: <Home/>},
        {path: '/album/:id', element: <AlbumView/>},
        {path: '/album/:idAlbum/photo/:id', element: <PhotoView/>}
    ]);
}

export default Routes;