import React from 'react';
import LoadingScreen from 'react-loading-screen';
import loadingImg from '../../images/loading.png'

const Spinner = ({text}) => {
    return (
        <LoadingScreen
        loading={true}
        bgColor='#f1f1f1'
        spinnerColor='red'
        textColor='gray'
        logoSrc={loadingImg}
        text={text}
      > 
        <div>Loadable content</div>
      </LoadingScreen>
    );
};

export default Spinner;