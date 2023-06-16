import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Home from './Home';
import AboutMe from './AboutMe';
import 'resize-observer-polyfill';
import {Button} from "@mui/material";


jest.mock('use-resize-observer', () => ({
    __esModule: true,
    default: jest.fn().mockImplementation(() => ({
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
    })),
}));

beforeAll(() => {
    class ResizeObserver {
        observe() {
        }

        unobserve() {
        }

        disconnect() {
        }
    }

    window.ResizeObserver = ResizeObserver;
});
test('renders learn react link', () => {
    render(<Home/>);
    const linkElement = screen.getByText(/cool cats!/);
    expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
    render(<AboutMe/>);
    const linkElement = screen.getByText(/JULIA YOUNG/);
    expect(linkElement).toBeInTheDocument();
});
