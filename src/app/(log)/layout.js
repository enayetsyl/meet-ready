export const metadata = {
    title: "MeetReady",
    description: "Generated by Tech Army",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en" data-theme='light'>
        <body className="">
          {children}
        </body>
      </html>
    );
  }