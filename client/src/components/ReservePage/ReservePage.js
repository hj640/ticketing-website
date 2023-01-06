import React from 'react';
// import '../Components.css';
import axios from 'axios';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useNavigate} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { useCountdown } from './D-Day-Counter';

function ReservePage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [error, setError] = useState(null);

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onPhoneNumberHandler = (event) => {
        setPhoneNumber(event.currentTarget.value);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        let body = {
            name: Name,
            email: Email,
            phoneNumber: PhoneNumber
        }

        if (Name === '' || Email === '' || PhoneNumber === '') {
            alert("You have to complete all the input fields.");
            console.log("NULL");
            return;
        }

        try {
            const res = await axios.post(`/api/users/reserve`, {
                body
            });
            navigate("/reserveSuccess");
        } catch (error) {
            console.log('error', error);
            setError(error?.response?.data || {});
            alert("Your Email Address or Phone Number is Already Used")
        }
        
    }

    // D-Day Counter

    const ShowCounter = ({days, hours, minutes, seconds}) => {
        return (
            <div>
                <div id="d-day-message">RESERVATION TIME LEFT</div>
                <div id="d-day-counter">
                    <div className="d-day-container">
                        <div className="d-day-child-container">
                            <span id="DAYS">{days}</span>
                        </div>
                    </div>
                    <div className="d-day-container">
                        <div className="d-day-child-container">
                            <span value={hours} id="HOURS">{hours}</span>
                        </div>
                    </div>
                    <div className="d-day-container">
                        <div className="d-day-child-container">
                            <span value={minutes} id="MINS">{minutes}</span>
                        </div>
                    </div>
                    <div className="d-day-container">
                        <div className="d-day-child-container">
                            <span value={seconds} id="SECS">{seconds}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const ExpiredNotice = () => {
        return (
          <div>
             <div id="d-day-message">Sorry, Reservation Time Expired 😰</div>
             <div id="d-day-container" style="display:none"></div>
          </div>
        );
    };

    const CountdownTimer = ({targetDate}) => {
        const [days, hours, minutes, seconds] = useCountdown(targetDate);
      
        if (days + hours + minutes + seconds <= 0) {
          return <ExpiredNotice />;
        } else {
          return (
            <ShowCounter
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />
          );
        }
     };

    return (
        <div className="container">
            <div className="wrapper">
                <CountdownTimer
                targetDate={"2023-05-23T23:59:59Z"}></CountdownTimer>
                <div className="description">
                    Dream Concert 2023 will be hold on <b>Sep 23, 2023</b> in
                    <em> National Stadium, Singapore 397629</em>. <br />
                    <br />We will only provide <b>10,000</b> seats for this concert. The
                    ticket reservation will be closed on <b>May 23, 2023</b>. Only one
                    ticket can be reserved per person. After the reservation is closed, we
                    will randomly select 10,000 people and send the email with payment link
                    for the ticket. Please check your email regularly from <b>May 23</b> to
                    <b> June 23</b>. If you do not replay our email within <b>3 days</b>, we
                    will give the opportunity to others. <br /><br />Hope to See You in
                    <b> Dream Concert 2023</b>
                </div>
                <div className="reserve">
                    <h3>Enter Your Information</h3>
                    <form className="info" onSubmit={onSubmitHandler}>
                        <div className="item">
                            <input type="text" placeholder="Your Name" value={Name} onChange={onNameHandler}/>
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="item">
                            <input type="email" placeholder="Your Email" value={Email} onChange={onEmailHandler}/>
                            <i className="fa fa-envelope"></i>
                        </div>
                        <div className="item">
                            <input type="tel" placeholder="Phone Number" value={PhoneNumber} onChange={onPhoneNumberHandler}/>
                            <i className="fa fa-phone"></i> 
                         </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
 }


export default ReservePage



