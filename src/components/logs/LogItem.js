import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteLog } from '../../actions/logActions';
import Moment from 'react-moment';
import M from 'materialize-css/dist/js/materialize.min.js';

// log comes from the Logs component, while deleteLog is the action which comes from connect
const LogItem = ({ log, deleteLog }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: 'Log Deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> last updated by{' '}
          <span className='black-text'>{log.tech}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
};

// connects Redux to this component, passing only the action, with null because we don't need any state here
export default connect(null, { deleteLog })(LogItem);
