// fonts from https://react-icons.github.io/react-icons/md.html
import {PropTypes} from 'react'
import MdAccessAlarms from 'react-icons/lib/md/access-alarms'


export const SkiDayRow = ({resort,date,powder,backCountry}) => (
    <tr>
        <td>
            {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}
        </td>
        <td>
            {resort}
        </td>
        <td>
            {(powder) ? <MdAccessAlarms/> : null}
        </td>
        <td>
            {(backCountry) ? <MdAccessAlarms/> : null}
        </td>
    </tr>
)

SkiDayRow.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    powder: PropTypes.bool,
    backCountry: PropTypes.bool
}