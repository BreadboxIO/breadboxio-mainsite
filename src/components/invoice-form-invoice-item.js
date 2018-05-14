import React, { Component } from 'react';

import { BlockButton } from './block-button';
import { Column } from './column';
import { Grid } from './grid';
import { Icon } from './icon';
import { InvoiceFormTextInput } from './invoice-form-text-input';
import PropTypes from 'prop-types';
import { Row } from './row';

export class InvoiceFormInvoiceItem extends Component {

    render = () => {
        const { hours, description, rate, onRemoveClick } = this.props;

        return (
            <div className='invoice-form__invoice-item'>
                <Grid>
                    <Row>
                        <Column width={12}>
                            <InvoiceFormTextInput label='Hours' value={hours} type='number' />
                        </Column>
                    </Row>
                    <Row>
                        <Column width={12}>
                            <InvoiceFormTextInput label='Rate ($/hour)' value={rate} type='number' />
                        </Column>
                    </Row>
                    <Row>
                        <Column width={12}>
                            <InvoiceFormTextInput label='Task' value={description} />
                        </Column>
                    </Row>
                    <Row>
                        <Column width={12}>
                            <BlockButton color='danger' onClick={onRemoveClick}>
                                <Icon name='trash' />Remove
                            </BlockButton>
                        </Column>
                    </Row>
                </Grid>
            </div>
        );
    }
}

InvoiceFormInvoiceItem.defaultProps = {
    description: '',
    hours: 0,
    onRemoveClick: () => {},
    rate: 0
};

InvoiceFormInvoiceItem.propTypes = {
    description: PropTypes.string,
    hours: PropTypes.number,
    onRemoveClick: PropTypes.func,
    rate: PropTypes.number
};
