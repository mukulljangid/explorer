import React from 'react';
import { mount, shallow } from 'enzyme';
import { I18nextProvider } from 'react-i18next';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { initialState } from '../../../../rootReducer';
import i18n from '../../../../i18nTestConfig';
import ConnectedTable, { TokenTxTable } from '../index';
import TEST_TRANSACTIONS_DATA from '../../../Accounts/AccountTransactionsTable/test/mockTransactions.json';

const TEST_ACCOUNT_ID = 'rTEST_ACCOUNT';
const TEST_CURRENCY = 'abc';

describe('TokenTransactionsTable container', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const creatWrapper = (state = {}) => {
    const store = mockStore({ ...initialState, ...state });
    return mount(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <Router>
            <ConnectedTable accountId={TEST_ACCOUNT_ID} currency={TEST_CURRENCY} />
          </Router>
        </Provider>
      </I18nextProvider>
    );
  };

  it('renders without crashing', () => {
    const wrapper = creatWrapper();
    wrapper.unmount();
  });

  it('renders static parts', () => {
    const wrapper = creatWrapper();
    expect(wrapper.find('.transactions-table').length).toBe(1);
    wrapper.unmount();
  });

  it('renders loader when fetching data', () => {
    const state = { ...initialState };
    state.accountTransactions.loading = true;
    const wrapper = creatWrapper(state);
    expect(wrapper.find('.loader').length).toBe(1);
    wrapper.unmount();
  });

  it('does not render loader if we have offline data', () => {
    const state = {
      ...initialState,
      accountTransactions: {
        loading: true,
        data: TEST_TRANSACTIONS_DATA
      }
    };
    const wrapper = creatWrapper(state);
    expect(wrapper.find('.loader').length).toBe(1);
    wrapper.unmount();
  });

  it('renders dynamic content with transaction data', () => {
    const actions = {
      loadTokenTransactions: Function.prototype
    };

    const component = shallow(
      <TokenTxTable
        t={d => d}
        language="en-US"
        loading={false}
        data={{}}
        actions={actions}
        accountId="zzz"
      />
    );

    component.setProps({
      accountId: TEST_ACCOUNT_ID,
      currency: TEST_CURRENCY,
      data: TEST_TRANSACTIONS_DATA
    });

    expect(component.find('.load-more-btn').length).toBe(1);
    expect(component.find('.account-transactions').length).toBe(1);
    expect(component.find('.transaction-li.transaction-li-header').length).toBe(1);
    expect(component.find(Link).length).toBe(20);
  });
});
