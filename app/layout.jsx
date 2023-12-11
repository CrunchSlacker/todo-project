import "@/app/ui/global.css";
import { open_sans } from "./ui/fonts";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${open_sans.className}bg-[#FFF9EB]`}>{children}</body>
        </html>
    );
}
