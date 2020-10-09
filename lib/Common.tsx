export type Action = {
    type: 'RESTORE_TOKEN' | 'LOADING' | 'STOP_LOADING' | 'SIGN_IN' | 'SIGN_OUT' | 'UPDATE_ACTIVITIES_COUNT' | 'UPDATE_ACTIVITIES' | 'SET_COORDINATES',
    token?: string,
    loadingText?: string,
    coordinates?: { lat: number, lng: number },
    activities: Array<any>
    count: number
}

export const initialState = {
    isLoading: false,
    loadingText: 'Laden...',
    coordinates: {lat: 0, lng: 0},
    activities: [],
    count: 0
}

export type State = {
    isLoading: boolean,
    loadingText: string,
    coordinates: { lat: number, lng: number },
    activities: Array<any>,
    count: number
}

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'RESTORE_TOKEN':
            return {
                ...state,
                isLoading: false,
            };
        case 'UPDATE_ACTIVITIES' :
            return {
                ...state,
                activities: action.activities
            }
        case 'UPDATE_ACTIVITIES_COUNT' :
            return {
                ...state,
                count: action.count
            }
        case 'LOADING' :
            return {
                ...state,
                loadingText: action.loadingText,
                isLoading: true,
            };
        case 'STOP_LOADING' :
            return {
                ...state,
                isLoading: false,
            };
        case 'SET_COORDINATES' :
            return {
                ...state,
                coordinates: action.coordinates
            };
    }
}
