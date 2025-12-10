import "./../styles/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Mon site vitrine",
    description: "Généré à l'aide de NextJS et DecapCMS"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
