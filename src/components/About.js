import '../App.css';
import { useEffect } from 'react';

function About() {


  useEffect(() => {
    document.querySelector('nav').classList.add('dark-nav');
  }, [])

  return (
    <div className="container about-page">
        <h4>I am a full stack web developer who has worked mainly with web technoglogies. Among my career I have created many applications in many areas, a few are Wordpress, .NET, Flask, NodeJS, AngularJS and React</h4>
        <h4>Throughout my journey I have expiremented in different areas from web... </h4>
        <ul className="area-list">
          <li>Desktop Applications</li>
          <li>Mobile Development</li>
          <li>Creation of API's</li>
          <li>Serverless Applications</li>
        </ul>

        <h4>List of technoglogies I have worked with...</h4>

        <ul>
          <li>HTML</li>
          <li>CSS / SASS</li>
          <li>JavaScript / jQuery</li>
          <li>AngularJS</li>
          <li>ReactJS</li>
          <li>Boostrap</li>
          <li>PHP</li>
          <li>C# / .NET</li>
          <li>NodeJS</li>
        </ul>
    </div>
  );
}

export default About;
