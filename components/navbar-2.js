import Image from 'next/image'
import optionsIcon from '../public/images/options-icon.png'
import profileIcon from '../public/images/profile-icon.png'


const Navbar2 = () => {

    return (
        <div>
            
            <div
                id="scroll-container"
                className="bg-[#F61354] text-white text-[400] max-sm:hidden"
            >
                <div id="scroll-text">
                    {" "}
                    &nbsp;&nbsp;&nbsp;&nbsp; • Please link your metamask wallet •
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; • Please link your
                    metamask wallet • &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; •
                    Please link your metamask wallet • &nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp; • Please link your metamask wallet •
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; • Please link your
                    metamask wallet • &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </div>
            </div>
            <nav className="bg-black">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center max-sm:ml-5   sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <a href="/">
                                    <img
                                        className="block h-8 w-auto lg:hidden"
                                        src="https://www.ipx.club/assets/images/logo.png"
                                        alt="Your Company"
                                    />
                                </a>
                                <a href="/">
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src="https://www.ipx.club/assets/images/logo.png"
                                        alt="Your Company"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                            <div className="flex flex-shrink-0 items-center">
                                <div className="hidden sm:ml-6 sm:block ">
                                    <div className="flex space-x-4">
                                        <a
                                            href="#"
                                            className="text-white font-[400] px-3 py-2 text-sm font-medium"
                                            aria-current="page"
                                        >
                                            Categories
                                        </a>
                                        <a
                                            href="#"
                                            className="text-white font-[400] px-3 py-2 text-sm font-medium"
                                            aria-current="page"
                                        >
                                            How it works
                                        </a>
                                        <a href="/">
                                            <Image
                                                src={profileIcon}
                                                className="block h-8 w-auto ml-12"
                                                alt="Your Company"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end md:hidden">
                            <div className="flex flex-shrink-0 items-center">
                                <div className=" sm:ml-6">
                                    <div className="flex ">
                                        <a
                                            href="#"
                                            className="text-white font-[400] px-3 py-2 text-sm font-medium"
                                            aria-current="page"
                                        >
                                            Get Early Access
                                        </a>
                                        <a
                                            href="#"
                                            className="px-3 py-2 ml-[-15px] w-[40px] mt-1"
                                            aria-current="page"
                                        >
                                            <Image src={optionsIcon}  alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex h-16 items-center justify-between text-center grid grid-cols-5 mt-8 max-sm:hidden">
                        <a
                            href="#"
                            className="h-full tracking-[.25em] text-white font-[400] py-5 text-sm font-medium border-b border-r border-white/50 hover:border-b-white/100 hover:border-b-[3px] hover:font-[600]"
                            aria-current="page"
                        >
                            All
                        </a>
                        <a
                            href="#"
                            className="h-full tracking-[.25em] text-white font-[400] py-5 text-sm font-medium border-b border-r border-white/50 hover:border-b-white/100 hover:border-b-[3px] hover:font-[600]"
                            aria-current="page"
                        >
                            Movies
                        </a>
                        <a
                            href="#"
                            className="h-full tracking-[.25em] text-white font-[400] py-5 text-sm font-medium border-b border-r border-white/50 hover:border-b-white/100 hover:border-b-[3px] hover:font-[600]"
                            aria-current="page"
                        >
                            Books
                        </a>
                        <a
                            href="#"
                            className="h-full tracking-[.25em] text-white font-[400] py-5 text-sm font-medium border-b border-r border-white/50 hover:border-b-white/100 hover:border-b-[3px] hover:font-[600]"
                            aria-current="page"
                        >
                            Audio
                        </a>
                        <a
                            href="#"
                            className="h-full tracking-[.25em] text-white font-[400] py-5 text-sm font-medium border-b  border-white/50 hover:border-b-white/100 hover:border-b-[3px] hover:font-[600]"
                            aria-current="page"
                        >
                            Games
                        </a>
                    </div>
                </div>
            </nav>

        </div>

    )

}

export default Navbar2;