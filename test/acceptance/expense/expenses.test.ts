import { Api } from '../utils/api';

describe('[Packages | Expense-domain | E2E] GET /v1/get-user-expenses', () => {
  const validateExpense = (expense) => {
    expect(expense.id).not.toBeUndefined();
    expect(expense.merchant_name).not.toBeUndefined();
    expect(expense.amount_in_cents).not.toBeUndefined();
    expect(expense.currency).not.toBeUndefined();
    expect(expense.user_id).not.toBeUndefined();
    expect(expense.date_created).not.toBeUndefined();
    expect(expense.status).not.toBeUndefined();
  };

  test('should get expenses for a given userId', () => {
    const userId = '3e920f54-49df-4d0b-b11b-e6f08e3a2dca';
    return Api.get('/expenses/v1/get-expense-details')
      .query({ userId })
      .expect(200)
      .then((res) => {
        const { body: { expenses } } = res;
        expenses.forEach((expense) => {
          expect(expense.user_id).toEqual(userId);
          validateExpense(expense);
        });
        expect(expenses).toHaveLength(3);
      });
  });
});