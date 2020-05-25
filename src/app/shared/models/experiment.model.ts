import { Image } from './image.model';

export class Experiment {
    id?: string;
    creationDate: Date;
    edited?: Date;
    path: string;
    title: string;
    intro: string;
    cardImage?: Image;
    heroImage?: Image;
}
