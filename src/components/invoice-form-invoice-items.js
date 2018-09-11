import React, { Component } from 'react';
import { addInvoiceItem, removeInvoiceItem, selectInvoiceItems, updateInvoiceItem } from '../ducks/invoice-items';

import { BlockButton } from './block-button';
import { Column } from './column';
import { Grid } from './grid';
import { Icon } from './icon';
import { InvoiceFormInvoiceItem } from './invoice-form-invoice-item';
import PropTypes from 'prop-types';
import { Row } from './row';
import { connect } from 'react-redux';

export class InvoiceFormInvoiceItems extends Component {
    static propTypes = {
        addInvoiceItem: PropTypes.func,
        items: PropTypes.array,
        removeInvoiceItem: PropTypes.func,
        updateInvoiceItem: PropTypes.func
    };

    static defaultProps = {
        addInvoiceItem: () => {},
        items: [],
        removeInvoiceItem: () => {},
        updateInvoiceItem: () => {}
    };

    renderInvoiceItems() {
        const { items, removeInvoiceItem, updateInvoiceItem } = this.props;
        const result = [];

        items.forEach((item, index) => {
            result.push(
                <InvoiceFormInvoiceItem
                    {...item}
                    key={index}
                    onRemoveClick={() => removeInvoiceItem(index)}
                    onUpdate={item => updateInvoiceItem({ index, item })}
                />
            );
        });

        return result;
    }

    render() {
        const { addInvoiceItem } = this.props;
        const invoiceItems = this.renderInvoiceItems();

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
                {invoiceItems}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: selectInvoiceItems(state)
    };
};

export default connect(mapStateToProps, { addInvoiceItem, removeInvoiceItem, updateInvoiceItem })(InvoiceFormInvoiceItems);
