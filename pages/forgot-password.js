import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
// // import Anton from '@next/font/google'

export default function ForgotPassword() {
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
                        <div className="max-w-md space-y-8">
                            <div>
                                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-xl">
                                    Forgot Password
                                </h2>
                                <br />
                                <p className="text-center mutedtext">
                                    Enter the email associated with your account and we will
                                    <br />
                                    send an email with the instructions to reset your password.
                                </p>
                            </div>
                            <form className="mt-8 space-y-6" action="#" method="POST">
                                <input type="hidden" name="remember" defaultValue="true" />
                                <div className="-space-y-px rounded-md shadow-sm">
                                    <div>
                                        <input
                                            id="email-address"
                                            name="email-address"
                                            type="email"
                                            autoComplete="email"
                                            required=""
                                            className="logininputs relative block w-full appearance-none rounded-sm  px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="enter your email"
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    id="gradientbtn"
                                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                                    FORGOT PASSWORD
                                </button>
                                <br />
                                <a href="login.html" className="text-center">
                                    <p className="mutedtext">Back to login</p>
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
