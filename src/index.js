import React from 'react'
import { render } from 'react-dom'
import {SkiDayList } from './components/SkiDayList'
// import { SkiDayCount } from './components/SkiDayCount-jsx'
import { App } from './components/App-ES6'
import { Router, Route, hashHistory } from 'react-router'
import { Whoops404 } from './components/Whoops404'
import './stylesheets/style1.css'

window.React = React

// render(
//     <SkiDayList days={
        // [
        //     {
        //         resort: "sqauw valley",
        //         date: new Date("1/2/2016"),
        //         powder: true,
        //         backCountry: false
        //     },
        //     {
        //         resort: "kirkwoord",
        //         date: new Date("3/21/2016"),
        //         powder: false,
        //         backCountry: false
        //     },
        //     {
        //         resort: "nandi valley",
        //         date: new Date("11/12/2015"),
        //         powder: true,
        //         backCountry: true
        //     }
        // ]
//     }/>,
//     document.getElementById('react-container')
// )

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="list-days" component={App} >
            <Route path=":filter" component={App} />
         </Route>
        <Route path="add-day" component={App} />
        <Route path="*" component={Whoops404}/> 
    </Router>,
    document.getElementById('react-container')
)

// render(
//     <SkiDayList days={ [] } />,
//     document.getElementById('react-container')
// )


// render(
//     <SkiDayCount total={50}  // total="stringname" //for strings
//                   powder={20}
//                   backcountry={10}
//                   goal={100}/>,
//     document.getElementById('react-container')
// )

// render(
//     <SkiDayCount total={false}/>,   // used to test defaultProps
//     document.getElementById('react-container')
// )