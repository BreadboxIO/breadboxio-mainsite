import React, { Component } from 'react';
import { addInvoiceItem, removeInvoiceItem, selectInvoiceItems } from '../ducks/invoice-items';

import { BlockButton } from './block-button';
import { Column } from './column';
import { Grid } from './grid';
import { Icon } from './icon';
import { InvoiceFormInvoiceItem } from './invoice-form-invoice-item';
import PropTypes from 'prop-types';
import { Row } from './row';
import { connect } from 'react-redux';

export class InvoiceFormInvoiceItems extends Component {

    renderInvoiceItems = () => {
        const { items, removeInvoiceItem } = this.props;
        const result = [];

        items.forEach((item, index) => {
            result.push(
                <InvoiceFormInvoiceItem {...item} onRemoveClick={() => removeInvoiceItem(index)} />
            );
        });

        return result;
    }

    render = () => {
        const { addInvoiceItem } = this.props;

        return (
            <div className='invoice-form__section'>
                <Grid>
                    <Row>
                        <Column widthSm={8}><h2>Invoice Items</h2></Column>
                        <Column widthSm={4}>
                            <BlockButton onClick={addInvoiceItem}>
                                <Icon name='plus' />Add Item
                            </BlockButton>
                        </Column>
                    </Row>
                </Grid>
                {this.renderInvoiceItems()}
            </div>
        );
    }
}

InvoiceFormInvoiceItems.defaultProps = {
    items: [],
    removeInvoiceItem: () => {},
    addInvoiceItem: () => {}
};

InvoiceFormInvoiceItems.propTypes = {
    items: PropTypes.array,
    removeInvoiceItem: PropTypes.func,
    addInvoiceItem: PropTypes.func
};

const mapStateToProps = state => {
    return {
        items: selectInvoiceItems(state)
    };
};

export default connect(mapStateToProps, { addInvoiceItem, removeInvoiceItem })(InvoiceFormInvoiceItems);
