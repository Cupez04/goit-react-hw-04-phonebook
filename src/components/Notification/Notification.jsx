import s from './Notification.module.css';
import Proptypes from 'prop-types';


const Notification = ({ message }) => {
    return <p className={s.title}>{message}</p>
}

Notification.propTypes = {
    message: Proptypes.string.isRequired,
}

export default Notification;