import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Shashank Bhat',
  description: "I'm open to freelance work, collaborations, and product engineering roles. Get in touch to discuss your project.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
