import AuthProvider from "@/Provider/SessionProvider"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <AuthProvider>
        {children}
        </AuthProvider>
        </body>
    </html>
  )
}
