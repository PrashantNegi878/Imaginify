
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Alert from 'react-bootstrap/Alert';
import MadeWithLove from 'react-made-with-love';
import { Link } from 'react-router-dom';
import MyNavbar from '../navbar';
import './about.css';

const AboutUs =()=> {
  return (
    <>
    <MyNavbar home={false} about={true}/>
    <div className="aboutus">
    <Alert className="mx-auto mt-3 w-75 alert-box" key="warning" variant="warning" style={{backgroundColor:"rgba(55, 59, 105,0.4)",color:"white"}}>
    <h1>ABOUT US</h1>
    <hr/>
    <p> Welcome to <span className='highlight'>Imaginify</span>, a website that can generate captivating stories and by harnesses the power of AI can also generate beautiful images. Our website can generate unique and engaging stories. It can also craft stunning images to accompany your story.

We believe that storytelling is a powerful tool that brings people together, inspires imagination, and fosters empathy. Our passion is to use this website to unlock the power of storytelling and inspire a new wave of creativity and imagination.

Our stories and AI-generated images are just the beginning of this journey.

Join us on this journey of imagination and let your creativity run wild.</p>
    <hr/>
    <p>Technologies Used in this Project :</p>
    <img className="techused" src='./tech.jpg' alt="ReactJS Stable Diffusion image"></img>
    <p><br></br></p>
    <hr/>
    <MadeWithLove by="Prashant"  emoji  link="https://github.com/PrashantNegi878" target="_blank"/>
    </Alert>
    </div>
    </>
  );
}

export default AboutUs;
