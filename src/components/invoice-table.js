import React, { Component } from 'react';

import { InvoiceTableDataRow } from './invoice-table-data-row';
import { InvoiceTableFooter } from './invoice-table-footer';
import { InvoiceTableHeading } from './invoice-table-heading';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectInvoiceItems } from '../ducks/invoice-items';

export class InvoiceTable extends Component {

    renderDataRows = () => {
        const { invoiceItems } = this.props;
        const result = invoiceItems.map((item, index) => <InvoiceTableDataRow {...item} key={index} />);

        return result;
    }

    render = () => {
        const { invoiceItems } = this.props;
        const dataRows = this.renderDataRows();

        return (
            <div className='invoice-table'>
                <InvoiceTableHeading />
                {dataRows}
                <InvoiceTableFooter items={invoiceItems} />
            </div>
        );
    }
}

InvoiceTable.defaultProps = {
    invoiceItems: []
};

InvoiceTable.propTypes = {
    invoiceItems: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => {
    return {
        invoiceItems: selectInvoiceItems(state)
    };
};

export default connect(mapStateToProps, {})(InvoiceTable);
