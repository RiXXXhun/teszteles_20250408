import{ render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event"
import Link from "./Link"


it('changes class on hover', async() => {
    render(<Link page="https://google.com">Google</Link>)

    expect(screen.getByTestId("link")).toHaveTextContent("Google")


    await userEvent.hover(screen.getByTestId('link'))
    expect(screen.getByTestId('link').className).toBe('hovered')

    await userEvent.unhover(screen.getByTestId("link"))
    expect(screen.getByTestId("link").className).toBe("")
})

it('href is same page', () => {
    render(<Link>Google</Link>)

    expect(screen.getByTestId("link").getAttribute("href")).toBe("#")
})