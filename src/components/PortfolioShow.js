import React from 'react'
import { useEffect, useState } from 'react';

function PortfolioShow(match) {

    const urlID = match.match.params.id;

    const [item, setItem] = useState([]);
    
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchSingleWork();
    }, [])

    const fetchSingleWork = async () => {
        const singlePort = await fetch('https://sean-site-api.herokuapp.com/single', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({item: urlID })
        });

        const content = await singlePort.json();
        setItem(content);
        //console.log(content);
        setLoading(true);
    }

    return (
    <div className="single-item container">
        
        {loading ? '' : <div class="loader"></div>}
        
        {
            item.map(port =>
                <div>
                    <img src={port.project_image} />
                    <h3>{port.project_description}</h3>
                    <button><a href={port.project_link} target="_blank">View work</a></button>
                </div>
            )
        }

    </div>
    )
}

export default PortfolioShow;
