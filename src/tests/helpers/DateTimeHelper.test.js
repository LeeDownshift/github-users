import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { formattedDate, formattedTime, formattedDateTime } from '../../helpers/DateTimeHelper';

describe('formattedDate Helper', () => {
  describe('with a valid date', () => {
    it('should return a formatted Date string', () => {
      expect(formattedDate('2020-01-05T03:50:33Z')).toEqual('5 Jan 2020');
      expect(formattedDate('5 Jan 2020')).toEqual('5 Jan 2020');
      expect(formattedDate('01/05/2020')).toEqual('5 Jan 2020');
    });
  });

  describe('with an invalid date', () => {
    it('should return an invvalid date error', () => {
      expect(formattedDate('')).toEqual('Invalid date');
      expect(formattedDate('Test User')).toEqual('Invalid date');
    });
  });
});

describe('formattedTime Helper', () => {
  describe('with a valid Time', () => {
    it('should return a formatted Time string', () => {
      expect(formattedTime('2020-01-05T03:50:33Z')).toEqual('3:50 AM');
    });
  });

  describe('with an invalid time', () => {
    it('should return an invvalid date error', () => {
      expect(formattedTime('03:50 AM')).toEqual('Invalid date');
      expect(formattedTime('Test User')).toEqual('Invalid date');
    });
  });
});

describe('formattedDateTime Helper', () => {
  describe('with a valid date time string', () => {
    it('should return a formatted Time string', () => {
      expect(formattedDateTime('2020-01-05T03:50:33Z')).toEqual('5 Jan 2020 at 3:50 AM');
    });
  });

  describe('with an invalid date time string', () => {
    it('should return invalid format', () => {
      expect(formattedDateTime('blibble')).toEqual('invalid format');
    });
  });
});