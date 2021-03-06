import Component from 'components/component';
import ModalInput from 'components/modal-input';
import ModalNew from 'components/modal-new';
import React from 'react';
import PropTypes from 'prop-types';

export default class NewPage extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    changeTitle: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    loading: PropTypes.bool
  };

  render () {
    const {title, changeTitle, submit, loading} = this.props;
    return (
      <ModalNew submit={submit} loading={loading}>
        <ModalInput
          focus
          value={title}
          placeholder='Name your page. e.g. Homepage'
          onChange={changeTitle}
        />
      </ModalNew>
    );
  }
}
