import { GoGraph } from "react-icons/go";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";

const Navbar = () => {
    return (
        <div className="container mx-auto">
            <div className="max-lg:collapse bg-base-200 lg:mb-48 shadow-sm w-full rounded-md">
                <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
                <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
                <div className="collapse-title navbar">
                    <div className="navbar-start">
                        <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">

                        </label>
                        <button className="btn btn-ghost text-xl">BondBase</button>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <button>
                                    <RiHome2Line />
                                    Home
                                </button>
                            </li>
                            <li>
                                <button>
                                    <RiTimeLine />
                                    Timeline

                                </button>
                            </li>
                            <li>
                                <button>
                                    <GoGraph />
                                    Stats
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="collapse-content lg:hidden z-1">
                    <ul className="menu">
                        <li><button>Home</button></li>
                        <li><button>Timeline</button>
                        </li>
                        <li><button>Stats</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;