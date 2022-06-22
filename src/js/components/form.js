import { validateForms } from '../functions/validate-forms';

const rules1 = [
  {
    ruleSelector: ".input-name",
    rules: [
      { rule: "required", value: true, errorMessage: "Заполните имя!" },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
  {
    ruleSelector: ".input-email",
    rules: [
      { rule: 'email', value: true, errorMessage: 'Введите правильный email!' },
      { rule: 'required', value: true, errorMessage: 'Заполните email!' }
    ],
  },
];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.application__form', rules1, afterForm);
