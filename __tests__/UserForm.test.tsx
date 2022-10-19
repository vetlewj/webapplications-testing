import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import UserForm from '../components/UserForm'

describe('UserForm', () => {
  it('renders the form', () => {
    render(<UserForm handleSubmit={() => {}} />)
    const form = document.querySelector('form')
    expect(form).toBeInstanceOf(HTMLFormElement)

    expect(screen.getByLabelText('Name')).toBeTruthy()
    expect(screen.getByLabelText('Email')).toBeTruthy()
    expect(screen.getByLabelText('Password')).toBeTruthy()
  })
})

describe('UserForm', () => {
  it('validates that no fields can be empty', () => {
    render(<UserForm handleSubmit={() => {}} />)

    fireEvent.click(screen.getByText('Submit'))

    expect(screen.getByText('Invalid form data')).toBeTruthy()
  })
})
