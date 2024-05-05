// app/layout.jsx
export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                {/* Add your meta tags, title, etc. */}
            </head>
            <body>{children}</body>
        </html>
    );
}
