import '../App.css';
import { useEffect } from 'react';

function Home() {

    useEffect(() => {
        document.querySelector('nav').classList.remove('dark-nav');
    }, [])

  return (
    <div>
        <div className="parallax">
            <h1>Pelser</h1>
        </div>

        <div className="who">
            <div>
                <h1><span className="who-white">Who </span>am i ?</h1>
            </div>
        </div>

        <div className="container brief-text">
            <h3>A full stack web developer working with many different technologies.</h3>
        </div>
    </div>
  );
}

export default Home;
