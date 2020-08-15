import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InvoiceTableDataRow } from './invoice-table-data-row';
import { InvoiceTableFooter } from './invoice-table-footer';
import { InvoiceTableHeading } from './invoice-table-heading';
import { selectInvoiceItems } from '../ducks/invoice-items';

export class InvoiceTable extends Component {
  static propTypes = {
    invoiceItems: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    invoiceItems: [],
  };

  renderDataRows() {
    const { invoiceItems } = this.props;
    // eslint-disable-next-line react/jsx-props-no-spreading
    const result = invoiceItems.map((item, index) => <InvoiceTableDataRow {...item} key={index} />);

    return result;
  }

  render() {
    const { invoiceItems } = this.props;
    const dataRows = this.renderDataRows();

    return (
      <div className="invoice-table">
        <InvoiceTableHeading />
        {dataRows}
        <InvoiceTableFooter items={invoiceItems} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    invoiceItems: selectInvoiceItems(state),
  };
};

export const InvoiceTableConnected = connect(mapStateToProps, {})(InvoiceTable);
