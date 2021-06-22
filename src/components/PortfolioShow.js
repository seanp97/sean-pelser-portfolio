import React from 'react'
import { useEffect, useState } from 'react';

function PortfolioShow(match) {

    const urlID = match.match.params.id;

    const [item, setItem] = useState([]);
    
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.querySelector('nav').classList.add('dark-nav');
        fetchSingleWork();
    }, [])

    const fetchSingleWork = async () => {
        const singlePort = await fetch(`https://dev-sean-site-api.pantheonsite.io/wp-json/wp/v2/portfolios/${urlID}`, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        });

        const content = await singlePort.json();
        setItem(content);
        setLoading(true);
    }

    function removeTags(str) {
        if ( (str===null) || (str===''))
            return false;
        else
            str = str.toString();
        return str.replace( /(<([^>]+)>)/ig, '');
    }

    return (
    <div className="single-item container">
        
        {loading ?      

        <div>
            <img src={item.acf['portfolio_image']} />
            <h3>{removeTags(item.content['rendered'])}</h3>
            <button><a href={item.acf['portfolio_link']} target="_blank">VIEW WORK</a></button>
        </div> 
        
        : 
        
        <div class="loader"></div>}

    </div>
    )
}

export default PortfolioShow;
