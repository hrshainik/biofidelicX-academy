import { Cardo, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const cardo = Cardo({ weight: ["400", "700"], subsets: ["latin"] });
const sourceSans3 = Source_Sans_3({ subsets: ["latin"] });

export const metadata = {
  title: "biofidelicX academy",
  description:
    "Welcome to biofidelicX academy, your ultimate life & earth science destination. From exam preparation to cutting-edge research, we offer an engaging and informative learning experience. Learn, Explore, Discover with us today.",
  image: "",
  url: "",
  imageAlt: "",
  robots: "index, follow",
  type: "website",
  locale: "en_US",
  author: "biofidelicX academy",
  keywords: [
    "biofidelicx academy",
    "biofidelicx",
    "life science",
    "earth science",
    "biochemistry",
    "molecular biology",
    "genetics",
    "microbiology",
    "pharmacy",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content={metadata.robots} />
        <meta name="author" content={metadata.author} />
        <meta property="og:locale" content={metadata.locale} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:type" content={metadata.type} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content={metadata.imageAlt} />
        <meta property="og:url" content={metadata.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:site_name" content={metadata.title} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <meta name="twitter:image:alt" content={metadata.imageAlt} />
      </head>
      <body className={`${cardo.className} ${sourceSans3.className}`}>
        {children}
      </body>
    </html>
  );
}
