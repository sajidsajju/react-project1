 import { Component,PropTypes }  from 'react'
// import '../stylesheets'
// import { createClass }  from 'react'
import MdAccessAlarms from 'react-icons/lib/md/access-alarms'



// export const SkiDayCount = React.createClass({ //for creating a class
// export class SkiDayCount extends React.Component {  // React.Component is the base class, we use while using import { React} from 'react'

// export class SkiDayCount extends Component {// while using import { Component } from 'react' ,we should use as "this.props.total" ..etc in the whole code


export class SkiDayCount extends Component{  
    
     percentToDecimal(decimal) {
        return ((decimal*100)+'%')
    }
     calcGoalProgress(total, goal) {
        return this.percentToDecimal(total/goal)
    }
    render() { 
    return( 
        <div className="ski-day-count">
            <div className="total-days">
            <span>{this.props.total}</span>
                <span> days</span>
            </div>
            <div className="powder-days">
            <span>{this.props.powder}</span>
                <span> days</span>
            </div>
            <div className="backcountry-days">
            <span>{this.props.backcountry}</span>
                <MdAccessAlarms />
                <span> hiking days</span>
            </div>
            <div>
                <span>{this.calcGoalProgress(this.props.total,this.props.goal)}</span>
            </div>
        </div>
)
    }

}

SkiDayCount.defaultProps = {
    total: 50,
    powder: 10,
    backcountry: 15,
    goal: 75
}

SkiDayCount.propTypes = {
    total: PropTypes.number.isRequired,
    powder: PropTypes.number.isRequired,
    backcountry: PropTypes.number.isRequired
}