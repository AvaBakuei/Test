import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Loading = (Component) => {
    return function LoadingComponent({isLoading, ...props}){
        return(
            <>
                {!isLoading ? <Component {...props}/> : <Skeleton/>}
            </>
        )
    }
}

export default Loading;