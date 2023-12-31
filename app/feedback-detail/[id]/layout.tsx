export const metadata = {
  title: "Feedback Detail | Product Feedback App",
  description: "Product Feedback App Feedback Detail Page",
};

export default function FeedbackDetailLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <section>{children}</section>
    </>
  );
}
