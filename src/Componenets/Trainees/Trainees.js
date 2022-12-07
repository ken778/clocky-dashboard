import React, { useEffect, useState } from 'react'
import './Trainees.css'
import {FaLongArrowAltDown} from 'react-icons/fa'
import {FaLongArrowAltUp} from 'react-icons/fa'
import { FiClock } from "react-icons/fi";
import { BsArrowDownRight } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import {auth, db} from '../../Firebase/FirebaseConfig'
import { collection, doc, onSnapshot, query, where, getDocs } from "firebase/firestore";
import { RiKakaoTalkLine } from 'react-icons/ri';


function Trainees({tempUser}) {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})
    const [clicked, setClicked] = useState(false)
   const [clockInTime, setClockInTime] = useState([])
   const [clockOutTime, setclockOutTime] = useState([])
   const [searchInput, setSearchInput] = useState([])
    
    
    //getiing clocking info
   
   

    useEffect(()=>{

        //fetching user 
        const getUsers = onSnapshot(collection(db,'users'),(data)=>{
          console.log('data',data.docs.map((doc)=>({...doc.data(), id:doc.id})))
          setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
        })
        
         //getiing clocking in info

      
   
         
        
       },[])

       
      
       var clockInInfo = []
       var clockOutInfo = []
      
       let  getuser = async(d)=>{
   
        
          setClicked(true)
            // console.log('i ma clicked',users[d])
            console.log('clicked user', users[d].userId)
            setUser(users[d])
           
            // user = users[d]
            const q = query(collection(db,'clockIn'), where('userId','==',users[d].userId))
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((res)=>{
               if(res.exists){
                console.log(res.data())
                //  setClockInTime((current)=>[...current, res.data()])
                  clockInInfo = [...clockInInfo, res.data()]  
              
                 console.log('times', clockInInfo)

              return setClockInTime(clockInInfo)

               }else{
                  console.log('no data exists')
               }
           
            })

            //clockout
            const r = query(collection(db,'clockout'), where('userId','==',users[d].userId))
            const querySnapsho = await getDocs(r);
            querySnapsho.forEach((resu)=>{
               if(resu.exists){
                console.log(resu.data())
                //  setClockInTime((current)=>[...current, res.data()])
                  clockOutInfo = [...clockOutInfo, resu.data()]  
              
                 console.log('times clockout', clockOutInfo)

              return setclockOutTime(clockOutInfo)

               }else{
                  console.log('no data exists')
               }
           
            })

         
           
       } 
      
    

       console.log('out1', clockInTime)
       console.log('out2', clockOutTime)

    const addToLocal = () =>{
        localStorage.setItem('name', 'kenneth')
    }
    console.log(searchInput)
  return (
    <>
      <div className='mainContainer'>
         <div className='studentList'>
           
            <div className='search'>
                <input className='searchInput' placeholder='serch' onChange={(e)=>setSearchInput(e.target.value)} />
            </div>
            
            <div className='traineeContainer'>
             
                      <table>
                          <tr className='table-header'>
                              <th>Name</th>
                              <th>Surname</th>

                          </tr>
                          {
                            users.filter((user)=>{
                                if(user.name.toLowerCase().includes(searchInput)){
                                    return(user)
                                }else if(searchInput===''){
                                    return(user)
                                }
                            }).map((res, index)=>(
                                <>

                                <tr  key={index} onClick={()=>getuser(index)}>
                                    <td>{res.name} </td>
                                    <td>{res.surname}</td>
                                </tr>
                              </>
                            ))
                          }
                        
                      </table>
          
          {/* {
            users.map((res, index)=>(
                <>
                    <div key={index} className='trainee' onClick={()=>getuser(index)}>
                        <p>{res.name}</p>
                    </div>
                </>
            ))
          } */}
           
           
        
            </div>
            
         </div>
         <div className='moreData'>
            <div className='profilePreview'>
                <div className='profileCard'>
                   <p className='active'>Active</p>
                   <div className='profile-imageContainer'>
                   <img className='image'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqjYWb_kZ7jZ_aCJJdFjLqxS-DBaGsJGxopg&usqp=CAU' />
                   </div>
             
                   <div className='user-details'>
                    {
                        clicked ?   <>
                        <p>Name: {user.name}</p>
                       <p>Surname:{user.surname}</p>
                       <p>Email: {user.email}</p>
                  </> : <>  <p>Name: {tempUser.name}</p>
                       <p>Surname:{tempUser.surname}</p>
                       <p>Email: {tempUser.email}</p>
                       </>
                       
                    }
                 

                      
                   </div>
                </div>
            </div>
                  <div className='profileDetails'>
                      <div className='attendance'><h2>Attendance</h2></div>
                      <div className='attendanceInfo'>
                          <div className='times'>
                              <div className='times-details'>
                                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                      <div>
                                      <FiClock style={{height:30, width:30}}/>
                                      </div>
                                      <div>
                                          <p className='subheading'>9:30</p>
                                          <p className='heading'>clock in Avg</p>
                                      </div>

                                  </div>

                              </div>
                              <div className='times-details'>
                                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                      <div>
                                          <FiClock style={{height:30, width:30}}/>
                                      </div>
                                      <div>
                                          <p className='subheading'>14:20</p>
                                          <p className='heading'>clock out Avg</p>
                                      </div>

                                  </div>
                              </div>
                              <div>
                                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                      <div>
                                         <BsExclamationCircle style={{height:30, width:30}}/>
                                      </div>
                                      <div>
                                          <p className='subheading'>4</p>
                                          <p className='heading'>absent</p>
                                      </div>

                                  </div>

                              </div>
                          </div>
                          <div className='attendance-header'>
                         
                            <div className='header-list'>
                               <h4>date</h4>
                               <div className='ulteredListContainer'>
                                <ul>
                                    <li >clock in</li>
                                    <li >clock out</li>
                                   
                                </ul>
                               </div>
                                
                            </div>

                            
                          </div>
                          <div>
                                                        
                                    <>
                                        <div className='time-sheet-container'>
                                           
                                                    <div style={{ width:'20%', textAlign:'center', }}>
                                                        {
                                                            clockInTime.map((res)=>(
                                                                <>
                                                                   <h4 style={{ marginTop:'5%'}}>{res.date}</h4 >
                                                                </>
                                                            ))
                                                        }
                                                     
                                                    
                                                    
                                                    </div>
                                              
                                          
                                            <div style={{ width:'14%', textAlign:'right'}}>
                                            {
                                                            clockInTime.map((res)=>(
                                                                <>
                                                                   <p  style={{ color: '#63DD76', fontSize:12, padding:'5%' }}><BsArrowDownRight />{res.timeIn}</p>
                                                                </>
                                                            ))
                                                        }
                                                     
                                              
                                            
                                            </div>
                                            <div style={{ width:'15%'}}>
                                            {

                                                            clockOutTime.map((res)=>(
                                                                <>
                                                                    {
                                                                        res.timeOut? <p  style={{ color: '#FC473D',fontSize:12, padding:'5%'}}><BsArrowUpRight style={{ marginBottom: -2 }} />{res.timeOut}</p> :<p>im not here</p> 
                                                                    }
                                                                 
                                                                </>
                                                            ))
                                                        }
                                                
                                            </div>
                                             
                                            {/* <div className='clockInAndOut'>
                                                <ul>
                                                   
                                                   
                                                </ul>
                                            </div> */}

                                        </div>
                                    </>
                            
                              
                          </div>
                      </div>
                  </div>

         </div>
      </div>
    </>
    
  )
}

export default Trainees