import { PropTypes }  from 'react'
// import '../stylesheets'
import MdAccessAlarms from 'react-icons/lib/md/access-alarms'



// export const SkiDayCount = React.createClass({ //for creating a class
// export class SkiDayCount extends React.Component {  // React.Component is the base class, we use while using import { React} from 'react'

// export class SkiDayCount extends Component {// while using import { Component } from 'react' ,we should use as "this.props.total" ..etc in the whole code

const percentToDecimal = (decimal) => {
    return ((decimal*100)+'%')
}
const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total/goal)
}

export const SkiDayCount = ({total, powder, backcountry, goal}) => (   // we can use for defaults as ({total=70, powder=50,...})


        <div className="ski-day-count">
            <div className="total-days">
            <span>{total}</span>
                <span> days</span>
            </div>
            <div className="powder-days">
            <span>{powder}</span>
            <MdAccessAlarms />
                <span> days</span>
            </div>
            <div className="backcountry-days">
            <span>{backcountry}</span>
                <MdAccessAlarms />
                <span> hiking days</span>
            </div>
            <div>
                <span>{calcGoalProgress(total,goal)}</span>
            </div>
        </div>
)

//statless method
SkiDayCount.defaultProps = {
    total: 50,
    powder: 10,
    backcountry: 15,
    goal: 100
}


SkiDayCount.propTypes = {
    total: PropTypes.number.isRequired,
    powder: PropTypes.number.isRequired,
    backcountry: PropTypes.number.isRequired,
    goal: PropTypes.number.isRequired
}