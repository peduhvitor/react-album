import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAlbumById, getAllPhotosFromAlbumById } from "../../api";
import { AlbumInfo, PhotosInTheAlbum } from "./types";
import style from './AlbumView.module.css';


const AlbumView = () => {
    const [albumInfo, setAlbumInfo] = useState<AlbumInfo>();
    const [photosInTheAlbum, setPhotosInTheAlbum] = useState<PhotosInTheAlbum[]>([]);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        if(id) {
            callGetAlbum();
            callGetAllPhotos();
        }
    },[])

    const callGetAlbum = async () => {
        const data = await getAlbumById(Number(id));
        setAlbumInfo(data);
    }

    const callGetAllPhotos =  async () => {
        const data = await getAllPhotosFromAlbumById(Number(id));
        setPhotosInTheAlbum(data);
    }

    return (
        <div>
            <button onClick={() => navigate(-1)}>Voltar</button>
            <br /><br />
            <h2>{albumInfo?.title ? albumInfo.title : 'Carregando...'}</h2>
            <br /><br />
            <div className={style.container}>
                { photosInTheAlbum ? photosInTheAlbum.map((item, index) => (
                    <Link to={`/album/${id}/photo/${item.id}`} key={index} className={style.cardImg}>
                        <img src={item.thumbnailUrl} alt="" />
                    </Link>
                ))
                :
                <div>Carregando...</div>
            }
            </div>
            
        </div>
    )
}

export default AlbumView;