import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "../Contact";

// Mock framer-motion to avoid animation issues in tests
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
    button: ({
      children,
      ...props
    }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
      <button {...props}>{children}</button>
    ),
  },
}));

// Mock profile data
jest.mock("@/data/profile.json", () => ({
  socials: {
    email: "test@example.com",
    linkedin: "https://linkedin.com/test",
    github: "https://github.com/test",
    whatsapp: "+1234567890",
  },
}));

// Mock the contact form hook
jest.mock("@/hooks/useContactForm", () => ({
  useContactForm: () => ({
    formData: { name: "", email: "", subject: "", message: "" },
    handleChange: jest.fn(),
    sendEmail: jest.fn((e: React.FormEvent) => e.preventDefault()),
    isSubmitting: false,
    success: false,
    error: null,
  }),
}));

// Mock SectionHeader
jest.mock("@/components/ui/SectionHeader", () => {
  const SectionHeader = ({ title }: { title: string }) => <div>{title}</div>;
  SectionHeader.displayName = "SectionHeader";
  return SectionHeader;
});

describe("Contact Component", () => {
  it("renders the contact form", () => {
    render(<Contact />);
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("renders the send button", () => {
    render(<Contact />);
    expect(
      screen.getByRole("button", { name: /send message/i })
    ).toBeInTheDocument();
  });

  it("submits the form without error", async () => {
    render(<Contact />);
    const button = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(button);
    await waitFor(() => {
      expect(button).toBeInTheDocument();
    });
  });
});
