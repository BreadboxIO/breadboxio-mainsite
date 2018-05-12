import React, { Component } from 'react';

import PropTypes from 'prop-types';

export class InvoiceFormTextInput extends Component {

    handleOnChange = event => {
        if (!event) return;

        const { onChange } = this.props;
        onChange(event.target.value);
    }

    render() {
        const { value, label, placeholder } = this.props;

        return (
            <div className='invoice-form__input'>
                <label>{label}:</label>
                <input type='text' value={value} placeholder={placeholder} onChange={this.handleOnChange} />
            </div>
        );
    }
}

InvoiceFormTextInput.defaultProps = {
    label: 'Label',
    onChange: () => {},
    placeholder: 'Enter a value...',
    value: ''
};

InvoiceFormTextInput.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string
};
