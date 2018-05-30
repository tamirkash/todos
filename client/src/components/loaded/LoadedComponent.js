import React from 'react';

const LoadedComponent = (propName) => (WrappedComponent) => {
    return class LoadedComponent extends React.Component {
        isEmpty(prop){
            return (
                prop === null || prop === undefined
            );
        }

        render(){
            return (
                this.isEmpty(this.props[propName]) ? <span>Loading...</span> : <WrappedComponent { ...this.props } />
            )
        }
    }
};

export default LoadedComponent;