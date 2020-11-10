import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import '../index.scss';

import Card from '../components/Card';

export default {
    title: 'components/Card',
    component: Card,
} as Meta;

export const primary = () => <Card />;
primary.storyName = `기본`;