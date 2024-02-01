import { rest } from 'msw';
import { Provider } from 'react-redux';
import InboxScreen from './InboxScreen';
import { MockedState } from '../../components/TaskList/TaskList.stories';
import store from '../../lib/store';
import {
  within,
  waitForElementToBeRemoved,
  expect,
  userEvent
} from '@storybook/test';

export default {
  component: InboxScreen,
  title: 'InboxScreen',
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ['autodocs'],
};

export const Default = {
  parameters: {
    msw: {
      handlers: [
        rest.get(
          'https://jsonplaceholder.typicode.com/todos?userId=1',
          (req, res, ctx) => {
            return res(ctx.json(MockedState.tasks));
          }
        ),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup()
    // Waits for the component to transition from the loading state
    await waitForElementToBeRemoved(await canvas.findByTestId('loading'));
    // Simulates pinning the first task
    await user.click(canvas.getByLabelText('pinTask-1'));
    // Simulates pinning the third task
    await user.click(canvas.getByLabelText('pinTask-3'));
  },
};

export const Empty = {
  parameters: {
    msw: {
      handlers: [
        rest.get(
          'https://jsonplaceholder.typicode.com/todos?userId=1',
          (req, res, cxt) => {
            return res(cxt.json([]));
          }
        )
      ],
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loadingText = await canvas.findByTestId(/loading/i);
    await waitForElementToBeRemoved(loadingText);
    const noTasksTextElement = canvas.getByText(/You have no tasks/i);
    expect(noTasksTextElement).toBeInTheDocument();
  }
}

export const Error = {
  parameters: {
    msw: {
      handlers: [
        rest.get(
          'https://jsonplaceholder.typicode.com/todos?userId=1',
          (req, res, ctx) => {
            return res(ctx.status(403));
          }
        ),
      ],
    },
  },
};