import React from 'react';
import loading from '../../images/loading.gif';


const Loading:React.FC = () => {

    return (
        <img style={{display: 'block', height: 'inherit', width: 'inherit'}} 
            src={loading} 
            alt='Loading'
        />
    )
}

export default Loading;