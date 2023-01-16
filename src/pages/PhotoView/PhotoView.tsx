import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOnePhotoById } from "../../api";
import style from "./PhotoView.module.css";
import { Photo } from "./types";


const PhotoView = () => {
    const [photo, setPhoto] = useState<Photo>();

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        if(id) {
            callGetPhotoById()
        }
    },[]);

    const callGetPhotoById = async () => {
        const data = await getOnePhotoById(Number(id));
        setPhoto(data);
    }

    return (
        <div>
            <button onClick={() => navigate(-1)}>Voltar</button>
            <br /><br />
            <p>{photo?.title ? photo.title : 'Carregando...'}</p>
            <br /><br />
            <div className={style.container}>
            {photo?.thumbnailUrl ? 
                <img src={photo?.thumbnailUrl} alt="" />
                :
                <div>Carregando...</div>
            }
            </div>
            
        </div>
    )
}

export default PhotoView;