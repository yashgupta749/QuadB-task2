import "./Home.css";
import image from "../../assets/Yash.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="circular-image">
        <img src={image} alt="" />
      </div>

      <h1>Hey!!, I am Yash Gupta</h1>
      <p>
        A passionate and creative MERN Stack Developer and having proficiency in
        MERN Stack
      </p>
      <div className="home-action">
        <div className="home-resume">My Resume</div>
      </div>
    </div>
  );
};
export default Home;
