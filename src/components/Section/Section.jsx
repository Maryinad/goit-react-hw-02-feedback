import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import React, { Component } from 'react';
import { Statistics } from '../Statistics/Statistics.jsx';
import { Title } from './Section.styled';
import PropTypes from 'prop-types';

export function Section({ children }) {
  return <Title>{children}</Title>;
}

Section.propTypes = {
  children: PropTypes.string.isRequired,
};
