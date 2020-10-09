import {ReactNode} from "react";

export function isTemp(pet: Image | TemporaryImage): pet is Image {
    return (pet as Image).thumb !== undefined;
}

export type RootStackParamList = {
    FrontRoot: undefined;
    CompanyRoot: undefined;
    NotFound: undefined;
};

export type FrontStackParamList = {
    Front: undefined;
    NotFound: undefined;
};

export type CompanyStackParamList = {
    Company: undefined;
    CreateNew: undefined;
    NotFound: undefined;
};

export type AuthStackParamList = {
    Login: undefined;
    SignUp: undefined;
    PasswordForget: undefined;
}

export type CreateNewStackParamList = {
    New: undefined;
    Categories: undefined;
    Tags: undefined;
    Price: undefined;
    Date: undefined;
    Calendar: { activityDate: ActivityDate };
    Images: undefined;
    ImageBrowser: { count: number };
}

export type BottomTabParamList = {
    "Plaats je uitje": undefined;
    "Mijn uitjes": undefined;
    "Mijn gegevens": undefined;
    "Home": undefined;
};

export type FrontBottomTabParamList = {
    "Uitjes": undefined,
    "Plaats je uitje": undefined;
    "Mijn uitjes": undefined;
};

export type ActivitiesParamList = {
    Activities: undefined;
    ActivityDetail: { activity: Activity };
};

export type ActivitiesFrontParamList = {
    Uitjes: undefined;
    ActivityDetail: { activity: Activity };
};

export type NewParamList = {
    New: undefined;
};

export type DataParamList = {
    Data: undefined;
}

export interface Company {
    id: number;
    name: string,
    lat: string,
    lng: string,
    billing_name: string,
    company_address: string,
    company_zipcode: string,
    company_city: string,
    company_country: string,
    company_telephone: string,
    company_email: string,
    company_website: string,
}

export interface User {
    id: number,
    name: string,
    email: string,
    company_id: number,
    company: Company,
    role: number
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    tags?: Array<Tag>
}

export interface Tag {
    id: number;
    name: string;
    slug: string;
}

export interface Image {
    id: number,
    thumb: string,
    medium: string,
    full: string
}

export interface TemporaryImage {
    type: string,
    uri: string
}

export interface ActivityDate {
    start_datetime: string,
    end_datetime: string,
    start_time: string,
    end_time: string,
    period: boolean
}

export interface Activity {
    id?: number,
    company_id: number,
    company?: Company,
    name: string,
    address: string,
    zipcode: string,
    city: string,
    country: string,
    website: string | null,
    telephone: string,
    email: string,
    lat: string,
    lng: string,
    start_ad: number,
    price: number,
    free: boolean,
    ntbd: boolean,
    description: string,
    indefinite: boolean,
    firstimage?: Image | null,
    media: Image | null,
    doorlopend: boolean,
    images: Array<Image | TemporaryImage>,
    gallery: Array<Image>,
    categories: Array<Category>,
    tags: Array<Tag>,
    activitydates: Array<ActivityDate>
}

export interface ActionTypes {
    type: 'RESTORE_TOKEN' | 'LOADING' | 'STOP_LOADING' | 'SIGN_IN' | 'SIGN_OUT' | 'NEW_ACTIVITY' | 'UPDATE_ACTIVITY' | 'SET_COORDINATES',
    token?: string,
    loadingText?: string
    user?: User,
    activity?: Activity,
    activities?: Array<Activity>,
    categories?: Array<Category>
}

export interface StateProviderProps {
    children?: ReactNode
}
