import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Homepage from './page/Homepage'
import { useState,useEffect } from "react"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


const MyRoute = () => {
        const [loading,setLoading] = useState(false);
        useEffect(()=>{
            setLoading(true)
            setTimeout(()=>{
                setLoading(false)

            },3000)
        },[])
  return (
    <BrowserRouter>
        <div >
        {
            loading?
            <div className="loading flex-col">
                <ClimbingBoxLoader 
                color="#36d7b7"
                loading={loading}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            </div>
            :
            <Switch>
                <Route path="/" component={Homepage}/>
            </Switch>
        }       
        </div>
    </BrowserRouter>
  )
}

export default MyRoute