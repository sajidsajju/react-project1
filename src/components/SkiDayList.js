import MdAccessAlarms from 'react-icons/lib/md/access-alarms'

import { SkiDayRow } from './SkiDayRow'
import { PropTypes } from 'react'
import { Link } from 'react-router'

export const SkiDayList = ({days, filter}) => { 
    const filteredDays = (!filter || !filter.match(/powder|backCountry/)) ?
    days : days.filter(day => day[filter])
return (
    <div className="ski-day-list">
<table>
    <thead>
        <tr>
            <th>Date</th>
            <th>Resort</th>
            <th>Powder</th>
            <th>BackCountry</th>
        </tr>
        <tr>
            <td colSpan={4}>
                <Link to="/list-days">All DAys</Link>
                <Link to="/list-days/powder">Powder Days</Link>
                <Link to="/list-days/backCountry">backcountry Days</Link>
            </td>
        </tr>
    </thead>
    <tbody>
        {filteredDays.map((day, i) =>
        
       /* <SkiDayRow key={i}
                resort={day.resort}
                date={day.date}
                powder={day.powder}
                backcountry={day.backcountry} />
        */
       // OR 

                <SkiDayRow key={i}
                        {...day} />
        )}
    </tbody>
</table>
</div>
)
}

// SkiDayList.propTypes = {
//     days: PropTypes.array
// }

//OR


SkiDayList.propTypes = {
    days: function(props){
        if(!Array.isArray(props.days)){
            return new Error("SkiDayList should be an array")
        }
        else if(!props.days.length){
            return new Error("SkiDayList must have atleast one record")
        }
        else{
            return null
        }
    }
}