import { Meta,  StoryObj } from '@storybook/react'
import { within, userEvent, waitFor} from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { http, HttpResponse } from 'msw'
import {  SignIn } from './SignIn'


export default {
  title: 'Pages/SignIn',
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        http.post('/sessions', () => {
          return HttpResponse.json({ message: "Login realizado!" })
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'silva.souza.adriano@gmail.com')
    userEvent.type(canvas.getByPlaceholderText('*********************'), '123456')
    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
    })
  }
}
