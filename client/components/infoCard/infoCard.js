import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './infoCard.scss';

const InfoCard = ({
  logo, color, header, message,
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
    </div>
  );
};

InfoCard.PropTypes = {
  logo: PropTypes.string,
  color: PropTypes.string,
  header: PropTypes.string,
  message: PropTypes.string,
};

export default InfoCard;
