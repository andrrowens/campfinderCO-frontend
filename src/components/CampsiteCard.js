import React from 'react';

const CampsiteCard = ({ id, name, region, description, elevation, coordinates }) => {

    return (
        <>
            <div className="camp-box">
                <p>{id} </p>
                <p className="camp-name">Name: {name}</p>
                <p className="camp-region">Region: {region}</p>
                <p className="camp-description">Description: {description}</p>
                <p className="camp-elevation">Elevation: {elevation}</p>
                <p className="camp-coordinates">Coordinates: {coordinates}</p>
            </div>
        </>
    )
}

export default CampsiteCard





