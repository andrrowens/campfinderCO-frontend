import React from 'react';
import CampsiteCard from './CampsiteCard';

const CampsiteContainer = ({campsites, setCampsites}) => {

    const mappedCampsites = campsites.map(campsite => (
       <CampsiteCard {...campsite} key={campsite.id} setCampsites={setCampsites} />)); 
  
       
    
    return (
        <div>
        <h2 className="campsite-header">Campsites!</h2>
            <div> 
                {mappedCampsites}
            </div>
    </div>   
    )
}



export default CampsiteContainer