import { ITechDescription } from './general.contants';

export interface IProject {
    title: string;
    description: string;
    img: string;
    usedTech?: ITechDescription[];
}

export const defaultProjects: IProject[] = [
    {
      title: 'Project 1',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      img: 'super-mario-bros'
    },
    {
      title: 'Project 2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      img: 'projecting-data-on-maps'
    },
    {
      title: 'Project 3',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      img: 'facial-recognition'
    },
    {
      title: 'Project 4',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      img: 'spacex-data-representation'
    }
];