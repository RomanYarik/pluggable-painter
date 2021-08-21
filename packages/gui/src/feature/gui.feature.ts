import { Environment, Feature, Slot } from '@wixc3/engine-core';
import type React from 'react';

export const mainEnv = new Environment('main', 'window', 'single');

export interface ITopBarItem {
  id: string;
  icon: React.Component;
  component: React.Component;
  tooltip?: string;
}

export interface ILeftBarItem {
  id: string;
  component: React.Component;
}

export default new Feature({
  id: 'gui',
  api: {
    topBarSlot: Slot.withType<ITopBarItem>().defineEntity(mainEnv),
    leftBarSlot: Slot.withType<ILeftBarItem>().defineEntity(mainEnv),
  },
});
