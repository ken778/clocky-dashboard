import React, { useState } from 'react'
import Graph from '../../../Componenets/PresentTrainees/Graph/Graph'
import Present from '../../../Componenets/PresentTrainees/Present'
import Trainees from '../../../Componenets/Trainees/Trainees'
import './Landing.css'

import { HiSquares2X2 } from "react-icons/hi2";
import { HiUserGroup } from "react-icons/hi2";
import { IoLogOut } from "react-icons/io5";
import { RiBuilding2Fill } from "react-icons/ri";


import logo from '../../../images/logo.png'
function Landing({users, tempUser}) {
    console.log('passed', users)


 
    const [render, setRender] = useState('overview')
    //const [overViewActive, setOverViewActive] = useState(Boolean)
   // const [traineesActive, setTraineesActive] = useState(Boolean)
   // const [logoutActive, setLogoutActive] = useState(Boolean)
    const menu = ['overview', 'trainees', 'logout']
    const menu2 = [{name:'overview', icon:<HiSquares2X2 style={{width:20,height:20, marginBottom:-5, marginLeft:20}} />},{name:'trainees', icon:<HiUserGroup style={{width:20,height:20, marginBottom:-5, marginLeft:20}}/>},{name:'logout', icon:<IoLogOut style={{width:20,height:20, marginBottom:-5, marginLeft:30}} />}]
    const [active, setActive] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    let isLoading = false

 
    let totalUser = users.length

    console.log(totalUser)

    if(users.length===0){
        isLoading = true
    }else{
        isLoading = false
    }
 
    //function to render pages
    const RenderPage = (page,index) =>{
        setRender(page)
        console.log(page)
        console.log(index)
        setSelectedIndex(index)
       
    }
    
   console.log(render)

   

    

  return (
    <>
     
       <div className='page'>
         <div className='content-screen'>
             <div className='sideMenu' style={{backgroundColor:' #FFFFFF', height:'100vh'}}>
                <div style={{display:"flex", justifyContent:'space-evenly', padding:'6%'}}>
                    <h2 style={{padding:4}}>Clockify</h2>
                     <div>
                         <img style={{width:40, height:40}} src={logo}/>
                     </div>
                </div>
                <div>
                    <ul style={{padding:12, marginTop:'3.5%'}}>
                        {
                           menu2.map((res, index)=>(
                            <>
                            {
                                isLoading? <li style={{backgroundColor:'#2196F3', color:'white'}} onClick={(e)=>RenderPage(res.name, index)}>Loading...</li> :
                                selectedIndex===index ?  <li style={{backgroundColor:'#2196F3', color:'white'}} onClick={(e)=>RenderPage(res.name, index)}>{res.name} {res.icon}</li> :  <li  onClick={(e)=>RenderPage(res.name, index)}>{res.name} {res.icon}</li>
                            }
                                
                     
                            </>
                           )) 
                        }
                       
                     
                    </ul>
                </div>
             </div>
             <div className='dataPanelContainer' style={{backgroundColor:'#FFFFFF'}}>
                <div  className='header' style={{display:'flex', justifyContent:'end'}}>
                    <div style={{width:'20%',alignSelf:'end', }}>
                    
                    <div style={{display:'flex', flexDirection:'row',justifyContent:'space-evenly'}}>
                         <p style={{padding:'5%'}}>john johny</p>
                         <div className='profile-imageContainer'>
                          <img className='image'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqjYWb_kZ7jZ_aCJJdFjLqxS-DBaGsJGxopg&usqp=CAU' />
                          </div>
                    </div>
                   
                     
                    </div>
                   
                </div>
                <div className='dataPanel'>
                     

                     {
                         render === 'overview' ? 
                         <div>
                         <div className='cardContainer'>
                                <div className='card'>
                                    <div>
                                    <HiUserGroup style={{width:50,height:50, marginBottom:-5, marginLeft:20}}/>
                                    </div>
                                    <div>
                                        <p>Total trainees</p>
                                       <h4>{totalUser}</h4> 
                                    </div>
                                </div>
                                <div className='card'>
                                    <div>
                                    <HiUserGroup style={{width:50,height:50, marginBottom:-5, marginLeft:20}}/>
                                    </div>
                                    <div>
                                        <p>Total presents</p>
                                       <h4>23</h4> 
                                    </div>
                                </div>
                                <div className='card'>
                                    <div>
                                        <RiBuilding2Fill style={{width:50,height:50, marginBottom:-5, marginLeft:20}}/>
                                    </div>
                                    <div>
                                        <p>Total facilities</p>
                                       <h4>5</h4> 
                                    </div>
                                </div>
                         </div>
                         <Present/>
                         <div style={{width:'100%',float:'left', }}>
                            <Graph/>
                         </div>
                         </div> : render ==='trainees' ? <Trainees tempUser={tempUser}/> : 'nothing' 
                     }
                     
                    
                </div>
             </div>
         </div>
    </div>
    </>
   
  )
}

export default Landing