import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';

// state and actions are passed in as props by 'connect'
const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <div>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className='center'>No logs to show...</p>
        ) : (
          logs.map((log) => <LogItem key={log.id} log={log} />)
        )}
      </ul>
    </div>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

// the app level state is mapped to local props
const mapStateToProps = (state) => ({
  log: state.log, // .log must be the same name defined in the root reducer
});

// connects Redux to this component, passing the state as props and an object with all the actions we want to use
export default connect(mapStateToProps, { getLogs })(Logs);
