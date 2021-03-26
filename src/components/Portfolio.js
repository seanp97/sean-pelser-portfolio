//import '../App.css';
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
        const work = await fetch('https://sean-site-api.herokuapp.com/portfolio', {
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
      
      {loading ? '' : <div class="loader"></div>}
      
      <div class="loader"></div>
      
        {
            work.map(item =>
                <div>
                    <Link to={`/portfolio/${item._id}`}>
                        <img src={item.project_image} />
                        <h3 key={item._id}>{item.project_title}</h3> 
                    </Link>
                </div>
            )
        }
        

    </div>
  );
}

export default Portfolio;
