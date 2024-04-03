import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => { }} />);
    });

    test('has an element with "textbox" role', () => {
        const numberTextbox = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberTextbox).toBeInTheDocument();
        expect(numberTextbox).toHaveClass('textboxNumber');
    });

    test('default value of the input field is 32', () => {
        const numberTextbox = NumberOfEventsComponent.getByPlaceholderText('Enter a number');
        expect(numberTextbox).toHaveValue('32');
    });

    test('value changes accordingly when user types', async () => {
        const numberTextbox = NumberOfEventsComponent.queryByRole('textbox');
        await userEvent.type(numberTextbox, '{backspace}{backspace}10');
        expect(numberTextbox).toHaveValue('10');
    });
})