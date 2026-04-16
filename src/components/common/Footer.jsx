import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-emerald-900 text-primary-content">
            <div className="container mx-auto px-4 py-10 flex flex-col items-center text-center gap-6">

                {/* Top Section */}
                <div>
                    <h2 className="text-2xl font-bold">BondBase</h2>
                    <p className="max-w-md mt-2">
                        Your personal shelf of meaningful connections. Browse, tend, and
                        nurture the relationships that matter most.
                    </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-5">
                    <Link
                        href={"https://www.linkedin.com/in/nymulislam/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:text-blue-400"
                    ><FaLinkedinIn size={25} /></Link>
                    <Link
                        href={"https://github.com/nymulislam"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:text-gray-300"
                    ><FaGithub size={25} /></Link>
                    <Link
                        href={"https://www.facebook.com/naym4islam"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:text-blue-500"
                    ><FaFacebookF size={22} /></Link>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-white/20"></div>

                {/* Bottom Section */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

                    {/* Copyright */}
                    <p>
                        © {new Date().getFullYear()} BondBase | All rights reserved
                    </p>

                    {/* Links */}
                    <div className="flex gap-4">
                        <a className="hover:underline">Privacy Policy</a>
                        <span>|</span>
                        <a className="hover:underline">Terms of Service</a>
                        <span>|</span>
                        <a className="hover:underline">Cookies</a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;