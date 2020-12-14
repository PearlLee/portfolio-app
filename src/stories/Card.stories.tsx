import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import '../index.scss';

import Card from '../components/Card';

export default {
  title: 'components/Card',
  component: Card,
} as Meta;

export const primary = () => (
  <Card
    key={0}
    id={0}
    user={{ name: 'noricube', full_name: 'Sukju Yun', profile_image: '' }}
    message={'hello world!'}
    medias={['https://economychosun.com/query/upload/322/20191103221129_fgyjnwts.jpg']}
    like_users={['nori']}
    likes={0}
    created_at={'2020-11-16'}
    tags={['tags']}
  />
);
primary.storyName = `기본`;
