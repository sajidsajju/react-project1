import { Component } from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount-jsx'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allSkiDays: [
                {
                    resort: "sqauw valley",
                    date: new Date("1/2/2016"),
                    powder: true,
                    backCountry: false
                },
                {
                    resort: "kirkwoord",
                    date: new Date("3/21/2016"),
                    powder: false,
                    backCountry: false
                },
                {
                    resort: "nandi valley",
                    date: new Date("11/12/2015"),
                    powder: true,
                    backCountry: true
                }
            ]
        }
    }
   
    countDays(filter){
        const { allSkiDays } = this.state
        return allSkiDays.filter((day) => (filter) ? day[filter] : day).length
    }
    render(){
        return (
            <div className="app">
                <Menu />
                {(this.props.location.pathname === "/")  ?

                    // {/* {this.state.allSkiDays[0]["resort"]} */}
                   
                    <SkiDayCount total={this.countDays()}
                                 powder={this.countDays("powder")}
                                 backcountry={this.countDays("backCountry")} /> :
                                 (this.props.location.pathname === "/add-day") ? 
                                 <AddDayForm /> : 
                                 <SkiDayList days={this.state.allSkiDays} 
                                 filter={this.props.params.filter}/>
                }
                   

            </div>
        )
    }
}

