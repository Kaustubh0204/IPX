import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
// import Anton from '@next/font/google'
import metamask from '../public/images/metamask-icon.png'

export default function Login() {
    return (

        <div>

            <Head>
            {/* <script src="../script.js"></script> */}
            </Head>

            <Navbar />

            <br />
            <br />
            <div className="col-start-1 col-end-2">
                <div className="container mx-auto w-100">
                    <div
                        id="formcontainer"
                        className="flex  min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 rounded-lg"
                    >
                        <div className="max-w-sm space-y-8">
                            <div>
                                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-xl">
                                    Login to your account
                                </h2>
                                <br />
                                <p className="text-center mutedtext">
                                    Invest as little as INR 10,000 into your favourite films, music,
                                    games and books.
                                </p>
                            </div>
                            <form className="mt-8 space-y-6" action="#" method="POST">
                                <input type="hidden" name="remember" defaultValue="true" />
                                <div className="-space-y-px rounded-md shadow-sm">
                                    <div>
                                        <label htmlFor="email-address" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required=""
                                            className="logininputs relative block w-full appearance-none rounded-sm  px-3 py-2  placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="your email id"
                                        />
                                    </div>
                                    <br />
                                    <div>
                                        <label htmlFor="password" className="sr-only">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required=""
                                            className="logininputs  relative block w-full appearance-none rounded-sm  px-3 py-2  placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="password"
                                        />
                                    </div>
                                </div>
                                <a
                                    href="listing"
                                    type="submit"
                                    id="gradientbtn"
                                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
                                >
                                    LOGIN
                                </a>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <a href="signup">
                                            <p className="mutedtext">Create new account</p>
                                        </a>
                                    </div>
                                    <div className="text-sm">
                                        <a href="forgot-password">
                                            <p className="mutedtext">Forgot password</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="columns-3">
                                    <div className="mt-2 border-b border-gray-400" />
                                    <p className=" text-sm mutedtext">or continue with</p>
                                    <div className="mt-2 border-b border-gray-400" />
                                </div>
                                <span className="flex justify-center ">
                                    <a href="#">
                                        <Image
                                            className="md:h-[30px] w-[30px] text-center border border-gray-400 rounded-full p-1"
                                            src={metamask}
                                            alt=""
                                        />
                                    </a>
                                </span>
                                <p className=" text-center text-[12px] mutedtext">
                                    By clicking above button, you agree to our terms of use and
                                    privacy policies
                                </p>
                                <div></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
