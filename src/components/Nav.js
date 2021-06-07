import '../App.css';
import { Link } from 'react-router-dom'; 

function Nav() {


    window.onscroll = function(e) {
        console.log(document.body.scrollTop === 0)


        if(this.scrollY != 0) {
            if(this.oldScroll > this.scrollY) {
                document.querySelector('nav').classList.remove('hideNav');
            }
            else {
                document.querySelector('nav').classList.add('hideNav');
            }

            this.oldScroll = this.scrollY;
        }

        else {
            document.querySelector('nav').classList.remove('hideNav');
        }

        
    }

  return (
    <>
        <nav>
            <div className="container">
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/portfolio'>
                        <li>Portfolio</li>
                    </Link>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                </ul>
            </div>
        </nav>

        <div id="social">
            <ul>
                <a href="https://www.linkedin.com/in/sean-pelser-ba4bb8139" target="_blank"><li><i className="fa fa-linkedin"></i></li></a>
                <a href="mailto:sean.pelser97@gmail.com"><li><i className="fa fa-envelope"></i></li></a>
                <a href="https://github.com/seanp97" target="_blank"><li><i class="fa fa-github"></i></li></a>
            </ul>
        </div>
    </>
  );
}

export default Nav;
