import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Input } from '../src/input/input';

storiesOf('Input').add('with default props', () => <Input onChange={action('changed')} label="Enter Name" />);
