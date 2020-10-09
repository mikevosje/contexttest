import React, {createContext, useContext, useMemo, useReducer} from 'react';
// import {AxiosLogin, AxiosPost, AxiosRegister, removeUserToken, setLoginData} from "./useAxios";
import {StateProviderProps} from "../types/types";
import {Action, initialState, reducer, State} from './Common';

const stateCtx = createContext(initialState);
const dispatchCtx = createContext((() => 0) as React.Dispatch<Action>);

export const useDispatch = () => {
    return useContext(dispatchCtx);
};

export const useGlobalState = <K extends keyof State>(property: K) => {
    const state = useContext(stateCtx);
    return state[property]; // only one depth selector for comparison
};

// @ts-ignore
export type AuthContext = {
    signIn: (data: { email: string, password: string }) => void,
    signOut: () => void,
    register: (data: { companyname: string, email: string, password: string }) => Promise<object>
}
let authCtx = createContext<AuthContext>({});

function Provider(props) {
    const dispatch = useDispatch();

    const authContext = useMemo(
        () => ({
            // signIn: async (data: { email: string, password: string }) => {
            //     dispatch({type: 'LOADING', loadingText: 'Inloggen'});
            //     AxiosLogin(data.email, data.password).then((response) => {
            //         let logindata = response.data;
            //         setLoginData(logindata).then(() => {
            //             dispatch({
            //                 type: 'SIGN_IN',
            //                 token: logindata.token,
            //                 user: logindata.user,
            //                 activities: logindata.activities,
            //                 categories: logindata.categories
            //             });
            //         });
            //
            //     }).catch(error => {
            //         dispatch({type: 'STOP_LOADING'});
            //     });
            // },
            // signOut: () => {
            //     AxiosPost('deletetoken', {}).then((response) => {
            //         removeUserToken().then(() => {
            //             dispatch({type: 'SIGN_OUT'})
            //         })
            //
            //     }).catch(error => {
            //         console.log(error);
            //         removeUserToken().then(() => {
            //             dispatch({type: 'SIGN_OUT'})
            //         })
            //     });
            // },
            // register: async (data: { companyname: string, email: string, password: string }) => {
            //     dispatch({type: 'LOADING', loadingText: 'Registreren'});
            //     return new Promise((res, rej) => {
            //         AxiosRegister(data.companyname, data.email, data.password).finally(() => {
            //             dispatch({type: 'STOP_LOADING'})
            //         }).then(() => {
            //             res({status: 'success'});
            //         }).catch(errors => {
            //             rej(errors.response.data.errors);
            //         })
            //     })
            // }
        }),
        []
    );
    return <authCtx.Provider value={authContext} {...props} />
}

export const useAuthContext = () => {
    return useContext(authCtx);
}

export const StateProvider: React.ComponentType = ({children}: StateProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <dispatchCtx.Provider value={dispatch}>
        <stateCtx.Provider value={state}>
            <Provider>
                {children}
            </Provider>
        </stateCtx.Provider>
    </dispatchCtx.Provider>
};
