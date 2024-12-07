import { ClerkProvider, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import "../globals.css";  // Import global CSS (ensure it's correct)
import Loader from "@/components/Loader";  // Make sure this is correctly imported

export const metadata = {
  title: 'Social Media App',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ClerkLoading>
            {/* Ensure Loader is correctly imported and defined */}
            <Loader />
          </ClerkLoading>

          <ClerkLoaded>
            {/* The content will only render once Clerk is ready */}
            {children}
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}