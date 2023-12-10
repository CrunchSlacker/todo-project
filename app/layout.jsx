import "@/app/ui/global.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-[#FFF9EB]">{children}</body>
        </html>
    );
}
