import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

// Mock the framer-motion module to avoid animation issues in tests
jest.mock('framer-motion', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const ReactMock = require('react');
  
  const MockDiv = ReactMock.forwardRef((props: React.ComponentProps<'div'>, ref: React.ForwardedRef<HTMLDivElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { initial, whileInView, transition, whileHover, whileTap, ...rest } = props as React.ComponentProps<'div'> & Record<string, unknown>;
    return <div ref={ref} {...rest} />;
  });
  MockDiv.displayName = 'motion.div';

  const MockButton = ReactMock.forwardRef((props: React.ComponentProps<'button'>, ref: React.ForwardedRef<HTMLButtonElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { initial, whileInView, transition, whileHover, whileTap, ...rest } = props as React.ComponentProps<'button'> & Record<string, unknown>;
    return <button ref={ref} {...rest} />;
  });
  MockButton.displayName = 'motion.button';

  return {
    motion: {
      div: MockDiv,
      button: MockButton,
    },
  };
});

// Mock the matchMedia API which might not exist in jsdom
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

describe('Contact Section', () => {
  it('renders the contact form fields successfully', () => {
    render(<Contact />);
    
    expect(screen.getByText('Full Name')).toBeInTheDocument();
    expect(screen.getByText('Email Address')).toBeInTheDocument();
    expect(screen.getByText('Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /SEND MESSAGE/i })).toBeInTheDocument();
  });
});
