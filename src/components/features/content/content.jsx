import React from 'react'
import './pagecontainer.css'

export default function Content() {
    return (
        <div class="container">
         <div class="sidenav">
            <ul class="side-menu">
           <li> <a href="#">Android</a></li>
           <li> <a href="#">React Native</a></li>
           <li> <a href="#">React js</a></li>

         </ul>
         </div>
         <div class="content">
            <div>
            <h2 class="course-title">Courses</h2>
         </div>
         </div>
      </div>
    )
}
