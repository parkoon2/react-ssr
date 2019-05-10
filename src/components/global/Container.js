import React, { Fragment } from 'react'

const Container = ({ children }) => {
    return (
        <div
            style={{
                width: '1240px',
                height: '90%',
                marginTop: 0,
                marginBottom: 0,
                marginRight: 'auto',
                marginLeft: 'auto'
            }}
        >
            {children}
        </div>
    )
}

export default Container
