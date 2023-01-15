import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAlbumById, getAllPhotosFromAlbumById } from "../api";
import style from './AlbumView.module.css';

type AlbumInfo = {
    userId: number,
    id: number,
    title: string
}

type PhotosInTheAlbum = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

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
            <h2>{albumInfo?.title}</h2>
            <br /><br />
            <div className={style.container}>
                { photosInTheAlbum.map((item, index) => (
                    <Link to={`/album/${id}/photo/${item.id}`} className={style.cardImg}>
                        <img key={index} src={item.thumbnailUrl} alt="" />
                    </Link>
                ))}
            </div>
            
        </div>
    )
}

export default AlbumView;