/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Column } from './column';
import { Grid } from './grid';
import { Row } from './row';

export class InvoiceFormTextInput extends Component {
  static propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    textarea: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    label: 'Label',
    onChange: () => {},
    placeholder: 'Enter a value...',
    textarea: false,
    type: 'text',
    value: '',
  };

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    if (!event) return;

    const { onChange, type } = this.props;
    const value = type === 'number' ? parseFloat(event.target.value) : event.target.value;

    onChange(value);
  }

  render() {
    const { value, label, placeholder, type, textarea } = this.props;
    const fieldProps = { onChange: this.handleOnChange, placeholder, type, value };

    return (
      <Grid className="invoice-form__input">
        <Row>
          <Column widthMd={3} widthSm={4}>
            <label>{label}:</label>
          </Column>
          <Column widthMd={9} widthSm={8}>
            {textarea ? <textarea {...fieldProps} /> : <input {...fieldProps} />}
          </Column>
        </Row>
      </Grid>
    );
  }
}
