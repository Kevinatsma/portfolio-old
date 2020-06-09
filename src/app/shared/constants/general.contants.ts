export interface ITechDescription {
    title: string;
    description?: string;
    icon: string;
}

export interface ViewLayout {
    id: ViewLayouts;
    icon?: string;
    fa?: string
}

export enum ViewLayouts {
    LIST = 'list',
    GALLERY = 'gallery',
    FULL_SCREEN = 'full-screen'
}

export const defaultViewLayouts = [
    {
        id: ViewLayouts.LIST,
        fa: 'far fa-list-alt'
    },
    {
        id: ViewLayouts.GALLERY,
        fa: 'fas fa-th'
    },
    {
        id: ViewLayouts.FULL_SCREEN,
        fa: 'fas fa-expand'
    }
];