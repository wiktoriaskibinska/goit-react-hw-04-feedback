import React from 'react';
import css from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p className={css.notifText}>{message}</p>;
};
Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
