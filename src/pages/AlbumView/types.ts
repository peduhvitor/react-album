export type AlbumInfo = {
    userId: number,
    id: number,
    title: string
}

export type PhotosInTheAlbum = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}