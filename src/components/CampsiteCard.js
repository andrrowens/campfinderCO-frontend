import React from 'react';

const CampsiteCard = ({ id, name, region, description, elevation, coordinates, image }) => {

    return (
        <>
            <div className="camp-box">
                <p>{id} </p>
                <p className="camp-name"><u>Name:</u> {name}</p>
                <p className="camp-region"><u>Region:</u> {region}</p>
                <p className="camp-description"><u>Description:</u> {description}</p>
                <p className="camp-elevation"><u>Elevation:</u> {elevation} ft</p>
                <p className="camp-coordinates"><u>Coordinates:</u> {coordinates}</p> <br />
                <img className="campsite-image" src={image} alt={""}></img>
            </div>
        </>
    )
}

export default CampsiteCard





