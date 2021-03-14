import Component from './index';

export default {
  title: 'Component',
  component: Component,
};

export const WithNoArgs = () => <Component />;

export const WithNameEmptyString = () => <Component name="" />;

export const WithNameAndrea = () => <Component name="Andrea" />;

export const WithNameDaniel = () => <Component name="Daniel" />;
