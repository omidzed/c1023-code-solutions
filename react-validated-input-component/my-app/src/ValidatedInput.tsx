/* eslint-disable prefer-const */
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;

export function ValidatedInput() {
  let [inputValue, setInputValue] = useState('');

  const isValid = passwordPattern.test(inputValue);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    inputValue = event.target.value;
    setInputValue(inputValue);
    isValid
      ? console.log(inputValue, ' -Valid password')
      : console.log(inputValue, ' -Invalid password');
  }

  return (
    <div className="password-input">
      <label>Password</label>
      <div>
        <input
          name="password"
          type="password"
          value={inputValue}
          onChange={handleChange}
        />
        <span>
          {isValid ? (
            <FaCheck style={{ color: 'green' }} />
          ) : (
            <FaXmark style={{ color: 'red' }} />
          )}
        </span>
      </div>
      <p>
        {!inputValue
          ? 'A password is required.'
          : !isValid
          ? 'Invalid password, make sure it is minimum 8 characters long, contains a digit, capital letter & special character (!, @, #, $, %, ^, &, *, (, or )) .'
          : ''}
      </p>
    </div>
  );
}
