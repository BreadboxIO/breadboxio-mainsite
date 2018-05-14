import React, { Component } from 'react';

import { Column } from './column';
import { Grid } from './grid';
import PropTypes from 'prop-types';
import { Row } from './row';

export class InvoiceFormTextInput extends Component {

    handleOnChange = event => {
        if (!event) return;

        const { onChange } = this.props;
        onChange(event.target.value);
    }

    render() {
        const { value, label, placeholder, type } = this.props;

        return (
            <Grid className='invoice-form__input'>
                <Row>
                    <Column widthMd={3} widthSm={4}>
                        <label>{label}:</label>
                    </Column>
                    <Column widthMd={9} widthSm={8}>
                        <input
                            onChange={this.handleOnChange}
                            placeholder={placeholder}
                            type={type}
                            value={value}
                        />
                    </Column>
                </Row>
            </Grid>
        );
    }
}

InvoiceFormTextInput.defaultProps = {
    label: 'Label',
    onChange: () => {},
    placeholder: 'Enter a value...',
    type: 'text',
    value: ''
};

InvoiceFormTextInput.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string
};
