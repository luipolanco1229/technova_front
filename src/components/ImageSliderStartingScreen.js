import React, { Fragment } from 'react';
import '../App.css';
import developer from '../images/developer.jpg'
import people_and_phones from '../images/people_and_phones.jpg'
import people_watching_tv from '../images/people_watching_tv.jpg'





const SlideShowStartingScreen = () => {
 return <Fragment>      

    <div className="slider" >
        <input type="radio" name="slider" checked="checked"></input>
        <div className="imgBx">
            <img loading="lazy" src={developer} alt=""></img>
            <div className="content">
                <h2>Computadores</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eaque laborum, consequatur, debitis magni esse labore, rerum quidem saepe accusamus vel? Itaque praesentium, sapiente quia inventore numquam at pariatur maxime.</p>
                
            </div>
        </div>

        <input type="radio" name="slider"></input>
        <div className="imgBx">
            <img loading="lazy" src={people_and_phones}alt=""></img>
            <div className="content">
                <h2>Celulares</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eaque laborum, consequatur, debitis magni esse labore, rerum quidem saepe accusamus vel? Itaque praesentium, sapiente quia inventore numquam at pariatur maxime.</p>
                
            </div>
        </div>

        <input type="radio" name="slider"></input>
        <div className="imgBx">
            <img loading="lazy" src={people_watching_tv} alt=""></img>
            <div className="content">
                <h2>Televisores</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eaque laborum, consequatur, debitis magni esse labore, rerum quidem saepe accusamus vel? Itaque praesentium, sapiente quia inventore numquam at pariatur maxime.</p>
                
            </div>
        </div>

       </div>
    </Fragment>
}
export default SlideShowStartingScreen;