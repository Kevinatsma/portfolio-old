import { Image } from './image.model';

export class Project {
    id: string;
    creationDate: Date;
    edited?: Date;
    authorID: string;
    title: string;
    cardImage: Image;
    heroImage: Image;
    intro: string;
    articleMedia?: [
        Image
    ];
}
