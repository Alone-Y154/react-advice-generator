import { useRef, useState, useEffect } from "react";
import "./advice.css"
import axios from "axios";


export const Advice = () => {

    const [advice , setAdvice] = useState('');
    const [adviceId, setAdviceId] = useState('');
    const buttonRef = useRef(null);
    const [animate, setAnimate] = useState(false)


    // const clickHandler = () => {
        // buttonRef.current.click();

    // }

    const animation = () => {
        setAnimate(!animate);
    }

    useEffect(() => {
        buttonRef.current.addEventListener('click', () => {});
    
        const interval = setTimeout(() => {
          buttonRef.current.click();
        }, 0);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

    const fetchAdvice = async() => {
        animation();
        const response =  await axios.get(
            `https://api.adviceslip.com/advice`
        );

        console.log(response);
            setAdvice(response.data.slip.advice);
            setAdviceId(response.data.slip.id)
            
        }

    return (
        <div className="container">
    
    
          <div className="card">
            <p>ADVICE #<span className="advice-num">{adviceId} </span> </p>
            <h2>"<span>{advice}</span>"</h2>
            <div className="pattern">
              <img src="images\pattern-divider-desktop.svg" alt="" />
            </div>
            <div className="full-dice">
              <div ref={buttonRef} onClick={fetchAdvice} className="cube">
                <img className={animate ? "cubeimg animation" : "cubeimg"} src="images/icon-dice.svg" alt="" />
              </div>
            </div>
    
          </div>
    
      </div>
    )
}