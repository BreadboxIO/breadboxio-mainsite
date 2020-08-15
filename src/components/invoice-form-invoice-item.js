import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { BlockButton } from './block-button';
import { Column } from './column';
import { Grid } from './grid';
import { Icon } from './icon';
import { InvoiceFormTextInput } from './invoice-form-text-input';
import { Row } from './row';

export class InvoiceFormInvoiceItem extends Component {
  static propTypes = {
    description: PropTypes.string,
    hours: PropTypes.number,
    onRemoveClick: PropTypes.func,
    onUpdate: PropTypes.func,
    rate: PropTypes.number,
  };

  static defaultProps = {
    description: '',
    hours: 0,
    onRemoveClick: () => {},
    onUpdate: () => {},
    rate: 0,
  };

  constructor(props) {
    super(props);
    this.handleOnUpdate = this.handleOnUpdate.bind(this);
  }

  handleOnUpdate(key, value) {
    const { onUpdate, description, hours, rate } = this.props;
    const updatedItem = { hours, rate, description, [key]: value };

    onUpdate(updatedItem);
  }

  render() {
    const { hours, description, rate, onRemoveClick } = this.props;

    return (
      <div className="invoice-form__invoice-item">
        <Grid>
          <Row>
            <Column widthMd={11}>
              <Grid>
                <Row>
                  <Column width={12}>
                    <InvoiceFormTextInput
                      label="Hours"
                      onChange={(value) => this.handleOnUpdate('hours', value)}
                      type="number"
                      value={hours}
                    />
                  </Column>
                </Row>
                <Row>
                  <Column width={12}>
                    <InvoiceFormTextInput
                      label="Rate ($/hour)"
                      onChange={(value) => this.handleOnUpdate('rate', value)}
                      type="number"
                      value={rate}
                    />
                  </Column>
                </Row>
                <Row>
                  <Column width={12}>
                    <InvoiceFormTextInput
                      label="Task"
                      textarea
                      onChange={(value) => this.handleOnUpdate('description', value)}
                      value={description}
                    />
                  </Column>
                </Row>
              </Grid>
            </Column>
            <Column widthMd={1}>
              <BlockButton color="danger" onClick={onRemoveClick}>
                <Icon name="trash" />
              </BlockButton>
            </Column>
          </Row>
        </Grid>
      </div>
    );
  }
}
