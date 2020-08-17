import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';
import TechItem from './TechItem';

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

// the app level state is mapped to local props
const mapStateToProps = (state) => ({
  tech: state.tech, // .log must be the same name defined in the root reducer
});

// connects Redux to this component, passing the state as props and an object with all the actions we want to use
export default connect(mapStateToProps, { getTechs })(TechListModal);
