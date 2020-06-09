import { ITechDescription } from './general.contants';

export interface IProject {
    title: string;
    description: string;
    img: string;
    techStack?: ITechDescription[];
}

export const defaultProjects: IProject[] = [
    {
      title: 'Google Stadia',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      img: 'super-mario-bros',
      techStack: [
        {
          title: 'GraphQL',
          description: 'This is a test description bla bla follow the link',
          icon: 'graph-ql'
        },
        {
          title: 'HTML5',
          description: 'This is a test description bla bla follow the link',
          icon: 'html5'
        }
      ]
    },
    {
      title: 'Google ARVR',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      img: 'projecting-data-on-maps',
      techStack: [
        {
          title: 'Figma',
          description: 'This is a test description bla bla follow the link',
          icon: 'figma'
        },
        {
          title: 'Angular',
          description: 'This is a test description bla bla follow the link',
          icon: 'angular'
        }
      ]
    },
    {
      title: 'Experian Chatbot',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      img: 'facial-recognition',
      techStack: [
        {
          title: 'Sketch',
          description: 'This is a test description bla bla follow the link',
          icon: 'sketch'
        },
        {
          title: 'Scss',
          description: 'This is a test description bla bla follow the link',
          icon: 'scss'
        }
      ]
    },
    {
      title: 'Life Lifting',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      img: 'spacex-data-representation',
      techStack: [
        {
          title: 'Firestore',
          description: 'This is a test description bla bla follow the link',
          icon: 'firestore'
        },
        {
          title: 'Typescript',
          description: 'This is a test description bla bla follow the link',
          icon: 'typescript'
        }
      ]
    },
    {
      title: 'Triary',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      img: 'super-mario-bros',
      techStack: [
        {
          title: 'Figma',
          description: 'This is a test description bla bla follow the link',
          icon: 'figma'
        },
        {
          title: 'Javascript',
          description: 'This is a test description bla bla follow the link',
          icon: 'javascript'
        }
      ]
    },
    {
      title: 'P-Base',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      img: 'projecting-data-on-maps',
      techStack: [
        {
          title: 'Dart',
          description: 'This is a test description bla bla follow the link',
          icon: 'dart'
        },
        {
          title: 'Flutter',
          description: 'This is a test description bla bla follow the link',
          icon: 'flutter'
        }
      ]
    },
    {
      title: 'Project 7',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      img: 'facial-recognition',
      techStack: [
        {
          title: 'Figma',
          description: 'This is a test description bla bla follow the link',
          icon: 'figma'
        },
        {
          title: 'Javascript',
          description: 'This is a test description bla bla follow the link',
          icon: 'javascript'
        },
        {
          title: 'Scss',
          description: 'This is a test description bla bla follow the link',
          icon: 'scss'
        }
      ]
    },
    {
      title: 'Project 8',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      img: 'spacex-data-representation'
    },
    {
      title: 'Project 9',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      img: 'super-mario-bros'
    }
];