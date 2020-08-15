import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addInvoiceItem, removeInvoiceItem, selectInvoiceItems, updateInvoiceItem } from '../ducks/invoice-items';

import { BlockButton } from './block-button';
import { Column } from './column';
import { Grid } from './grid';
import { Icon } from './icon';
import { InvoiceFormInvoiceItem } from './invoice-form-invoice-item';
import { Row } from './row';

export class InvoiceFormInvoiceItems extends Component {
  static propTypes = {
    onAddClick: PropTypes.func,
    items: PropTypes.array,
    onRemoveClick: PropTypes.func,
    onUpdateClick: PropTypes.func,
  };

  static defaultProps = {
    onAddClick: () => {},
    items: [],
    onRemoveClick: () => {},
    onUpdateClick: () => {},
  };

  renderInvoiceItems() {
    const { items, onRemoveClick, onUpdateClick } = this.props;
    const result = [];

    items.forEach((item, index) => {
      result.push(
        <InvoiceFormInvoiceItem
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...item}
          key={index}
          onRemoveClick={() => onRemoveClick(index)}
          onUpdate={(value) => onUpdateClick({ index, item: value })}
        />
      );
    });

    return result;
  }

  render() {
    const { onAddClick } = this.props;
    const invoiceItems = this.renderInvoiceItems();

    return (
      <div className="invoice-form__section">
        <Grid>
          <Row>
            <Column widthSm={8}>
              <h2>Invoice Items</h2>
            </Column>
            <Column widthSm={4}>
              <BlockButton onClick={onAddClick}>
                <Icon name="plus" />
                Add Item
              </BlockButton>
            </Column>
          </Row>
        </Grid>
        {invoiceItems}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: selectInvoiceItems(state),
  };
};

export const InvoiceFormInvoiceItemsConnected = connect(mapStateToProps, {
  onAddClick: addInvoiceItem,
  onRemoveClick: removeInvoiceItem,
  onUpdateClick: updateInvoiceItem,
})(InvoiceFormInvoiceItems);
