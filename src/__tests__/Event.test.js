import { render } from "@testing-library/react";
import { getEvents } from "../api";
import Event from '../components/Event';
import userEvent from '@testing-library/user-event';

describe('<Event /> component', () => {
    let EventComponent;
    let allEvents;

    beforeEach(async () => {
        allEvents = await getEvents();
        EventComponent = render(<Event event={allEvents[0]} />);
    });

    test('shows events title', () => {
        expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
    });

    test('renders events start time', () => {
        expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
    });

    test('renders event location', () => {
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });

    test('renders event details button with the title (show details)', () => {
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    });

    test('event details are hidden by default', () => {
        const details = EventComponent.container.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    }); 

    test('shows the details sections when the user clicks on the "show details" button', async () => {
        const user = userEvent.setup();
        const showDetailsButton = EventComponent.queryByText('show details');
        await user.click(showDetailsButton);
        const details = EventComponent.container.querySelector('.details');
        expect(details).toBeInTheDocument();
    });

    test('hides the details seciton when the user clicks on the "hide details" button', async () => {
        const user = userEvent.setup();
        const hideDetailsButton = EventComponent.queryByText("hide details");
        await user.click(hideDetailsButton);
        const details = EventComponent.container.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    });
});
