import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Link from './link'


it('changes class on hover', async () => {
    render(<Link page="https://google.com">Google</Link>)

    expect(screen.getByTestId("link")).toHaveTextContent("Google")

    await userEvent.hover(screen.getByTestId('link'))

    expect(screen.getByTestId("link").className).toBe("hovered")
})