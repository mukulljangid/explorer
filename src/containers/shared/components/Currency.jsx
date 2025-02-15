import React from 'react';
import PropTypes from 'prop-types';
import Account from './Account';

const Currency = props => {
  const { issuer, currency, link } = props;
  const content = issuer ? (
    <>
      {currency}
      {'.'}
      <Account account={issuer} link={link} />
    </>
  ) : (
    currency
  );

  return <span className="currency">{content}</span>;
};

Currency.defaultProps = {
  issuer: null,
  link: true
};

Currency.propTypes = {
  currency: PropTypes.string.isRequired,
  issuer: PropTypes.string,
  link: PropTypes.bool
};

export default Currency;
