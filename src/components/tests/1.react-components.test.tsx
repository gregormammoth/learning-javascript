import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { MyButton, ButtonWithCustomText, YesOrNoButtons, Profile } from '../1.react-components';
import { user } from '../model';

describe('MyButton', async () => {
  it('should render button with text "My button"', async () => {
    const { findByText, queryByRole } = render(
      <MyButton />,
    );

    expect(await findByText('My button')).to.exist;
    expect(queryByRole('button')).to.exist;
  });
});

describe('ButtonWithCustomText', () => {
  it('should render button with custom text', async () => {
    const { findByText, queryByRole } = render(
      <ButtonWithCustomText text='My button' />,
    );

    expect(await findByText('My button')).to.exist;
    expect(queryByRole('button')).to.exist;

  });

  it('should render button with custom text', async () => {
    const { findByText, queryByRole } = render(
      <ButtonWithCustomText text='Custom text' />,
    );

    expect(await findByText('Custom text')).to.exist;
    expect(await queryByRole('button')).to.exist;
  });
});

describe('YesOrNoButtons', async () => {
  it('should render component with two ButtonWithCustomText as children components', async () => {
    const { findByText, queryAllByTestId } = render(
      <YesOrNoButtons />,
    );

    const buttons = await queryAllByTestId('button-with-custom-text');

    expect(await findByText('Yes')).to.exist;
    expect(await findByText('No')).to.exist;
    expect(buttons.length).equal(2);
  });
});

describe('Profile', async () => {
  it('should render component name and img', async () => {
    const { findByText, getByRole } = render(
      <Profile user={user} />,
    );

    const img = await getByRole('img');
    expect(await findByText('Hedy Lamarr')).to.exist;
    expect(img.classList.contains('avatar')).equal(true);
    expect(img.attributes.getNamedItem('alt')?.value).equal('Photo of Hedy Lamarr');
    expect(img.attributes.getNamedItem('src')?.value).equal('/src/components/assets/hedy_lamarr.jpeg');
    expect(img.style.getPropertyValue('height')).equal('84px');
    expect(img.style.getPropertyValue('width')).equal('67px');
  });
});
