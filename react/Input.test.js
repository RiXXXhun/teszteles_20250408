import{ render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event"
import Input from "./input"

it('teher is a button and input', async () => {
    render(<Input />)

    expect(screen.getByTestId("input")).toBeInTheDocument()
    
    await userEvent.type(screen.getByTestId("input"), "alma")
    expect(screen.getByTestId("input").value).toBe("alma")

    await userEvent.click(screen.getByTestId("button"))
    expect(screen.getByTestId("p")).toHaveTextContent("Kiírva: alma")
})