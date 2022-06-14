import React, {Component} from 'react';
import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../redux/reducer';
import { Action } from 'redux';
import SignUpForm from '../components/SignUpForm';
import logo from '../../../logo-420-x-108.png';
import { fetchThunk } from '../../common/redux/thunk';
import { API_PATHS } from '../../../configs/api';
import { RESPONSE_STATUS_SUCCESS } from '../../../utils/httpResponseCode';
import { ISignupParams } from '../../../models/auth';
import { replace } from 'connected-react-router';
import { ROUTES } from '../../../configs/routes';
import { getErrorMessageResponse } from '../../../utils';



const SignUpPage = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [locations, setLocations] = useState([]);
    const [id, setId] = useState('');
    const [state, setState] = useState([]);
    const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();

    const getLocation = useCallback(async () => {
        setLoading(true);
        const json = await dispatch(fetchThunk(API_PATHS.getLocation, 'get'));
        setLoading(false);
        if(json?.code === RESPONSE_STATUS_SUCCESS) {
            setLocations(json.data);
            return;
        }
    }, []);
    
    useEffect(() => {
        getLocation();
    }, [getLocation]);

    const getId = (e: any) => {
        setId(e.target.value);
    }

    const getState = useCallback(async () => {
        if(id) {
            const json = await dispatch(fetchThunk(`${API_PATHS.getStateByLocation}${id}`, 'get'));
            
            if(json?.code === RESPONSE_STATUS_SUCCESS) {
                setState(json.data);
                return;
            }
        }
    }, [id]);

    React.useEffect(() => {
        getState();
    }, [id]);

    const onSignUp = useCallback(
        async(values: ISignupParams) => {
            setErrorMessage('');
            setLoading(true);

            const json = await dispatch(
                fetchThunk(API_PATHS.signUp, 'post', values),
            );
            setLoading(false);
            if(json?.code === RESPONSE_STATUS_SUCCESS) {
                console.log(json.data);
                alert("Chúc mừng bạn đã đăng ký tài khoản thành công!");
                dispatch(replace(ROUTES.login));
                return;
            }
            setErrorMessage(getErrorMessageResponse(json));
        }, [dispatch]
    );

    return (
        <div 
            className = "container"
            style = {{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column"
            }}
        >
            <img src = {logo} alt = "" style = {{ maxWidth: '250px', margin: '32px'}}/>
            <SignUpForm 
                onSignUp = {onSignUp} 
                loading = {loading} 
                errorMessage = {errorMessage} 
                locations = {locations} 
                onState = {getId}
                states = {state}
            />
        </div>
    );
};

export default SignUpPage;