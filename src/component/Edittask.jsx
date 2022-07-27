import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';

const Edittask = () => {
    const navigate = useNavigate();
    const { userID } = useParams();
    const [taskName, settaskName] = useState();
    const [cateName, setcateName] = useState();
    const [date, setdate] = useState();

    const [userData, setuserData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4000/task/${userID}`)
            .then(async (res) => {
                const rawData = await res.data[0];
                console.log(rawData);
                settaskName(rawData.taskName);
                setcateName(rawData.cateName)
                setuserData(rawData);
            })
            .catch(err => console.log(err))
    }, []);
    console.log(userData);
    const[cateD,setcateD]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/category")
            .then(async (res) => {
                const rawData = await res.data;
                console.log(rawData)
                setcateD(rawData);
            })
            .catch(err => console.log(err))
    }, []);

    const editHandler = (e) => {
        e.preventDefault();
        const dataObj = {
            taskName,date,cateName
        }
        console.log(dataObj);
        axios.put(`http://localhost:4000/task/${userID}`, dataObj)//send dataObject
            .then(() => {
                alert("Update Succesfully");
                navigate("/schedule");
            })
            .catch(err => console.log(err));

    }

    return (
        
        <>
        <style>
           
            </style>
          <form onSubmit={editHandler}>
                <div class="modal-body">
                    <div className='row g-3'>
                        <div className='col newCol' style={{display:"grid",justifyContent:"center"}}>
                            <input type="text" className='form-control' placeholder='Enter task Name' style={{width:"300px"}} onChange={e => settaskName(e.target.value)} value={taskName} /><br/>
                            <input type="date" className='form-control' placeholder='Enter task Name' style={{width:"300px"}} onChange={e => setdate(e.target.value)} value={date} /><br/>
                            <select className='form-select form-select-mb' aria-label='.form-select-sm example' style={{width:"300px"}} onChange={(e)=>setcateName(e.target.value)} value={cateName}>
                                        <option>Select Category</option>
                                            {
                                                cateD.map(row=>{return(<option>{row.categoryName}</option>)})
                                            }
                                        </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer" style={{justifyContent:"center"}}>
                <button type="submit" className="btn btn-primary">Update Task</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </form>  
        </>
    );
};

export default Edittask;