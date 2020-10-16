import React from "react"
import Helmet from "react-helmet"
import "../components/layout.scss"


export default function Layout({children}) {
   return (
       <>
       <Helmet>

       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
       </Helmet>
       {children}
      
       </>

   ) 
}