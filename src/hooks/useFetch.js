import React, { useEffect, useRef, useState } from 'react'


export const useFetch = (url) => {
    const localCache = useRef({})

    const [state, setState] = useState({
        data : null,
        isLoading: true,
        hasError: false,
        error: null,
    });

    useEffect(() => {
        getFetch();
    }, [url]);
    
    const setLoadingState = () => {
        setState({
            data: null,
            isLoading : true,
            hasError: false,
            error: null,
        });
    }


    const getFetch = async() =>{
        if(localCache.current[url]){
            setState({
                data : localCache.current[url],
                isLoading: false,
                hasError: false,
                error : null,
            });
            return;
        }

        
        setLoadingState()

        
        const resp = await fetch(url);

        if(!resp.ok){
            setState({
                data: null,
                isLoading : false,
                hasError : true,
                error : {
                    code : resp.status,
                    message : resp.statusText,
                } 
            })
        }
        
        const data = await resp.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error : null,
        });

        localCache.current[url] = data; //almacenar info
    };

    return{
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        error: state.error

    }
}
