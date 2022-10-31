import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
// import Anton from '@next/font/google'

export default function Signup() {
    return (

        <div>

            <Head>
                <script src="../script.js"></script>
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
                                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight  text-xl">
                                        Create new account
                                    </h2>
                                    <br />
                                    <p className="mutedtext text-center">
                                        Invest as little as INR 10,000 into your favourite films, music,
                                        games and books.
                                    </p>
                                </div>
                                <form className="mt-8 space-y-6" action="#" method="POST">
                                    <input type="hidden" name="remember" defaultValue="true" />
                                    <div className="-space-y-px rounded-md shadow-sm">
                                        <div>
                                            <input
                                                id="first-name"
                                                name="first-name"
                                                type="text"
                                                autoComplete="text"
                                                required=""
                                                className="logininputs mb-3  relative block w-full appearance-none rounded-sm  px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                placeholder="first name"
                                            />
                                            <input
                                                id="last-name"
                                                name="last-name"
                                                type="text"
                                                autoComplete="text"
                                                required=""
                                                className="logininputs mb-3 relative block w-full appearance-none rounded-sm  px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                placeholder="last name"
                                            />
                                            <input
                                                id="email-address"
                                                name="email-address"
                                                type="email"
                                                autoComplete="email"
                                                required=""
                                                className="logininputs mb-3 relative block w-full appearance-none rounded-sm  px-3 py-2  placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                placeholder="email"
                                            />
                                            <input
                                                id="password"
                                                name="first-name"
                                                type="password"
                                                autoComplete="current-password"
                                                required=""
                                                className="logininputs mb-3  relative block w-full appearance-none rounded-sm  px-3 py-2  placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                placeholder="password"
                                            />
                                            <input
                                                id="num"
                                                name="num"
                                                type="text"
                                                autoComplete="text"
                                                required=""
                                                className="logininputs mb-3 relative block w-full appearance-none rounded-sm  px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                placeholder="your 10 digit mobile number"
                                            />
                                            <input
                                                id="ref"
                                                name="ref"
                                                type="text"
                                                autoComplete="text"
                                                required=""
                                                className="logininputs mb-3 relative block w-full appearance-none rounded-sm  px-3 py-2  placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                placeholder="your referral code"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        id="gradientbtn"
                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
                                    >
                                        SIGNUP
                                    </button>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <a href="login">
                                                <p className="mutedtext ">Already have an account? Login</p>
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


        </div>

    )
}
