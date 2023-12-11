import NavBar from "../ui/nav-bar";
import { open_sans } from "../ui/fonts";

export default function Layout({children}) {
    return (
        <div className="flex">
            <NavBar/>
            <div className={`${open_sans.className} ml-14 mr-14 mt-12 subpixel-antialiased text-gray-800`}>{children}</div>
        </div>
    )
}