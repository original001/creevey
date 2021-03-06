import React from 'react';

import { ImagesView as ImagesViewBase } from '../src/client/shared/components/ImagesView';
import { ImagesViewMode, CreeveyStory } from '../src/types';

import octocatExpect from './fixtures/octocat-expect.png';
import octocatDiff from './fixtures/octocat-diff.png';
import octocatActual from './fixtures/octocat-actual.png';
import { Story } from '@storybook/react';

export default { title: 'ImagesViews' };

const ImagesView = (mode: ImagesViewMode): JSX.Element => (
  <ImagesViewBase
    image={{ expect: octocatExpect, diff: octocatDiff, actual: octocatActual }}
    url=""
    canApprove
    mode={mode}
  />
);

export const SideBySide = (): JSX.Element => ImagesView('side-by-side');
export const Swap = (): JSX.Element => ImagesView('swap');
export const Slide: Story & CreeveyStory = () => ImagesView('slide');
export const Blend = (): JSX.Element => ImagesView('blend');

Slide.parameters = {
  creevey: {
    tests: {
      async click() {
        const idle = await this.takeScreenshot();

        await this.browser.actions().click(this.captureElement).perform();

        const click = await this.takeScreenshot();

        await this.expect({ idle, click }).to.matchImages();
      },
    },
  },
};
