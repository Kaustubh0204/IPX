import { useEffect } from 'react';


const Navbar = () => {

    //Dark/Light Theme function

    function toggleCheck() {

        //light-mode

        if (document.getElementById("toggleB").checked === true) {

            //removes dark

            document.body.classList.remove("bg-ipxdarkbg");

            document.body.classList.remove("text-ipxlight");

            var formcontainer = document.getElementById("formcontainer");
            formcontainer.classList.remove("bg-ipxdarkbg");

            var nav = document.getElementById("nav");
            nav.classList.remove("bg-ipxdarknavbar");

            var mutedtext = document.getElementsByClassName("mutedtext");
            for (var i = 0; i < mutedtext.length; i++) {
                mutedtext[i].classList.remove("text-ipxdarktextmuted");
            }

            var input = document.getElementsByClassName("logininputs");
            for (var i = 0; i < input.length; i++) {
                input[i].classList.remove("bg-ipxdarkinputbg");
            }

            var input2 = document.getElementsByClassName("logininputs");
            for (var i = 0; i < input2.length; i++) {
                input2[i].classList.remove("text-ipxdarkinput");
            }

            var gradientbtn = document.getElementById("gradientbtn");
            gradientbtn.classList.remove("from-violet-500", "to-fuchsia-500");

            //adds light

            document.body.classList.add("bg-ipxlight");

            document.body.classList.add("text-ipxdarkbg");

            var input = document.getElementsByClassName("logininputs");
            for (var i = 0; i < input.length; i++) {
                input[i].classList.add("bg-ipxlightinputbg");
            }

            var nav = document.getElementById("nav");
            nav.classList.add("bg-ipxlightnavbar");

            var mutedtext = document.getElementsByClassName("mutedtext");
            for (var i = 0; i < mutedtext.length; i++) {
                mutedtext[i].classList.add("text-ipxdarktextmuted");
            }

            var gradientbtn = document.getElementById("gradientbtn");
            gradientbtn.classList.add("from-cyan-500", "to-blue-500");

        }

        //dark-mode

        else {

            //removes light

            document.body.classList.remove("bg-ipxlight");
            
            document.body.classList.remove("text-ipxdarkbg");


            var input = document.getElementsByClassName("logininputs");
            for (var i = 0; i < input.length; i++) {
                input[i].classList.remove("bg-ipxlightinputbg");
            }

            var nav = document.getElementById("nav");
            nav.classList.remove("bg-ipxlightnavbar");

            var mutedtext = document.getElementsByClassName("mutedtext");
            for (var i = 0; i < mutedtext.length; i++) {
                mutedtext[i].classList.remove("text-ipxdarktextmuted");
            }

            var gradientbtn = document.getElementById("gradientbtn");
            gradientbtn.classList.remove("from-cyan-500", "to-blue-500");

            //adds dark

            document.body.classList.add("bg-ipxdarkbg");

            document.body.classList.add("text-ipxlight");

            var formcontainer = document.getElementById("formcontainer");
            formcontainer.classList.add("bg-ipxdarkbg");


            var nav = document.getElementById("nav");
            nav.classList.add("bg-ipxdarknavbar");

            var mutedtext = document.getElementsByClassName("mutedtext");
            for (var i = 0; i < mutedtext.length; i++) {
                mutedtext[i].classList.add("text-ipxdarktextmuted");
            }


            var input = document.getElementsByClassName("logininputs");
            for (var i = 0; i < input.length; i++) {
                input[i].classList.add("bg-ipxdarkinputbg");
            }

            var input2 = document.getElementsByClassName("logininputs");
            for (var i = 0; i < input2.length; i++) {
                input2[i].classList.add("text-ipxdarkinput");
            }

            var gradientbtn = document.getElementById("gradientbtn");
            gradientbtn.classList.add("from-violet-500", "to-fuchsia-500");

        }
    }

    return (
        <nav id="nav" className="bg-ipxdarknavbar">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
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
                            <div className="hidden sm:ml-6 sm:block ">
                                <div className="flex space-x-4">
                                    <a
                                        href="login "
                                        className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                        aria-current="page"
                                    >
                                        Login
                                    </a>
                                    <a
                                        href="signup"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md 
                      text-sm font-medium"
                                    >
                                        Signup
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                        <div className="flex flex-shrink-0 items-center">
                            <label
                                htmlFor="toggleB"
                                className="container  mx-auto flex items-center cursor-pointer"
                            >
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        id="toggleB"
                                        className="sr-only"
                                        // onClick={switchStyle}
                                        onChange={toggleCheck}
                                    />
                                    <div className="block bg-[#8DA3BB] w-14 h-8 rounded-full" />
                                    <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                                </div>
                            </label>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "\n                            input:checked~.dot {\n                                transform: translateX(100%);\n                                background-color: #20364D;\n                            }\n                        "
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav>


    )
}


export default Navbar;

