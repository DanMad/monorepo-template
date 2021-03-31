import { ReactElement } from 'react';
import Component from './component';

export default {
  title: 'Component',
  component: Component,
};

export const WithNoArgs = (): ReactElement => <Component />;

export const WithNameAndrea = (): ReactElement => <Component name="Andrea" />;

export const WithNameDaniel = (): ReactElement => <Component name="Daniel" />;
