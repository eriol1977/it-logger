import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';
import { useEffect } from 'react';

const TechSelectOptions = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map((t) => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

// the app level state is mapped to local props
const mapStateToProps = (state) => ({
  tech: state.tech, // .log must be the same name defined in the root reducer
});

// connects Redux to this component, passing the state as props and an object with all the actions we want to use
export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
