import { render } from '@testing-library/react';
import Homepage from './../components/Homepage';
import { API_DATA } from './../components/Homepage';

const api = async() => {
    await fetch(API_DATA)
        .then(res => res.json())
}

test('renders main component', () => {
    render(<Homepage />);
    api().then(data => {
        expect(data).toBe('Test api');
    })
});
