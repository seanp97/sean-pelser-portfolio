import '../App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

function Portfolio() {

    useEffect(() => {
        document.querySelector('nav').classList.add('dark-nav');
        fetchWork();
    }, [])

    const [work, setWork] = useState([]);
    
    const [loading, setLoading] = useState(false);

    const fetchWork = async () => {
        const work = await fetch('https://dev-sean-site-api.pantheonsite.io/wp-json/wp/v2/portfolios?_embed', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        
        const workResult = await work.json();
        setWork(workResult);
        setLoading(true);
    }

  return (
    <div className="container portfolio-items">
      
      {loading ? 
        work.map(item =>
            <div className="portfolio-single-item">
                <Link to={`/portfolio/${item.id}`}>
                    <div key={item.id}>
                        <img src={item._embedded["wp:featuredmedia"][0].source_url} />
                        <h3>{item.title['rendered']}</h3>
                    </div>
                </Link>
            </div>
        ) 
        :
        <div class="loader"></div>}
    
        

    </div>
  );
}

export default Portfolio;
