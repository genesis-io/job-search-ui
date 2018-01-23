import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './infoCard.scss';

const InfoCard = ({
  logo, color, header, message, buttonText, location,
}) => {
  const logoClasses = cx(styles.base, {
    fa: true,
    [logo]: true,
  });

  return (
    <div className="info-card" style={{ backgroundColor: [color] }}>
      <i className={logoClasses} />
      <h1>{ header }</h1>
      <p>{ message }</p>
      <Link style={{ color: [color] }} to={location}>{ buttonText }</Link>
    </div>
  );
};

InfoCard.PropTypes = {
  logo: PropTypes.string,
  color: PropTypes.string,
  header: PropTypes.string,
  message: PropTypes.string,
  buttonText: PropTypes.string,
  location: PropTypes.string,
};

export default InfoCard;
