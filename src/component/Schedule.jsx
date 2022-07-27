import React, { useState, useEffect } from 'react';
import './Schedule.css'
import { CardChecklist, ThreeDotsVertical, PencilSquare, XLg } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom'
import c1 from './img/c1.png'
import axios from 'axios'
import Addschedule from './Addschedule';
import DatePicker from 'react-date-picker';



const Schedule = () => {

    const navigate = useNavigate();
    const [userData, setuserData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/task")
            .then(async (res) => {
                const rawData = await res.data;
                console.log(rawData)
                setuserData(rawData);
            })
            .catch(err => console.log(err))
    }, []);
    console.log(userData);

    const deletHandler = async (userID) => {
        await axios.delete(`http://localhost:4000/task/${userID}`);

        window.location.reload();

    }

    // filterd task by date
    const [value, onChange] = useState(new Date())

    const selectDate = value.toLocaleDateString()

    const filterList = userData.filter((row) => {
        const newDate = row.date;
        const D = new Date(newDate);
        const Da = D.toLocaleDateString();
        if (Da == "All") {
            return (row)
        }
        else {
            return (Da == selectDate)
        }
    })
    return (
        <>
            <div className='toDoMain'>
                <CardChecklist className='CardChecklist' onClick={() => navigate("/category")} />
                <div className='heading'>Schedule
                </div>
                <Addschedule />
            </div>
            <div className="simage">
                <div className='bgColor'>
                    <img className='categortImg' src={c1} alt="" />
                </div>
            </div>
            <div className='list'>
                <DatePicker onChange={onChange} value={value} className="inputTitle"/>
            </div>
            {
                filterList.map(row => {
                    const newDate = row.date;
                    const D = new Date(newDate)

                    return (
                        <div className='catSection'>
                            <div className='dateBox'>{D.getHours()}:{D.getMinutes()}</div>
                            <div>
                                <h1 style={{ fontSize: "2rem", marginBottom: "0px", marginTop: "0px" }}>{row.taskName}</h1>
                                <h3 style={{ fontSize: "1rem", color: "rgb(174, 174, 174)" }}>{row.cateName}</h3>
                            </div>
                            <div>
                                <div class="dropdown">
                                    <button class="threeDot" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <ThreeDotsVertical className='ThreeDotsVertical' />
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ backgroundColor: "transparent" }}>
                                        <li><button className='dropdown-item ' onClick={() => navigate(`/edittask/${row._id}`)}><PencilSquare className='PencilSquare' />  Edit</button></li>
                                        <li><button className='dropdown-item ' onClick={() => deletHandler(row._id)}><XLg className='XLg' />  Delete</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default Schedule;