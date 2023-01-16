import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllAlbums } from "../../api";
import { Albums } from "./types";
import style from './HomeStyle.module.css';



const Home = () => {
    const [albums, setAlbums] = useState<Albums[]>([]);

    useEffect(() => {
        getAlbums();
    },[])

    const getAlbums = async () => {
        const data = await getAllAlbums();
        setAlbums(data);
    }

    return (
        <div className={style.container}>
            { albums.length > 0 ? albums.map((item, index) => (
                <Link key={index} to={`/album/${item.id}`} className={style.card}>
                    {item.title}
                </Link>
            )) 
            : 
                <div>Carregando...</div>
            }
        </div>
    )
}

export default Home;