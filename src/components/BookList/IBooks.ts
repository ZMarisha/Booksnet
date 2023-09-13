
export interface IBooks {
    kind: string,
    totalItems: number,
    items: IBook[]
}

export interface IBook {
    id: string,
    selfLink: string,
    etag: string,
    volumeInfo: VolumeInfo
}

type VolumeInfo = {
    title: string,
    authors: string[],
    publishedDate: string,
    pageCount: number
    categories: string[],
    imageLinks: {
        smallThumbnail: string,
        thumbnail: string
      },
    description: string,
}
