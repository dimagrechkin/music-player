import { test, expect } from 'vitest';
import { render } from '@testing-library/vue';
import HelloWorld from './HelloWorld.vue';

test('it should work', () => {
  const title = 'Hello World YEH!';
  const { getByText } = render(HelloWorld, {
    props: {
      title,
    },
  });
  expect(getByText(title).textContent).toEqual(title);
});
