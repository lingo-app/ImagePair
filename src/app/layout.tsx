import StyledComponentsRegistry from "./registry";

export const metadata = {
  title: "Lingo Image Pair",
  description:
    "Pair characters and obejcts together and save the result to Lingo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
