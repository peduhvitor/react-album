import axios from "axios";

// Instância

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})


// Api`s

export const getAllAlbums = async () => {
    const response = await http.get('/albums');
    return response.data;
}

export const getAlbumById = async (id: number) => {
    const response = await http.get(`/albums/${id}`);
    return response.data;
}

export const getAllPhotosFromAlbumById = async (id:number) => {
    const response = await http.get(`/albums/${id}/photos`);
    return response.data;
}

export const getOnePhotoById = async (id: number) => {
    const response = await http.get(`/photos/${id}`);
    return response.data;
}