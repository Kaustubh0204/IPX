import Image from 'next/image'
import xbg from '../public/images/x-bg.png'
import instagramicon from '../public/images/instagram-icon.png'
import discordicon from '../public/images/discord-icon.png'
import twittericon from '../public/images/twitter-icon.png'


const Footer = () => {

    return (
        <div>
            <br />
            <div id="listing-footer"
                style={{
                    
                }}
            >
                <div className="h-[60px]"></div>
                <div
                    className="container p-5 flex mx-auto mt-12 md:rounded-t-[159px] rounded-t-[73px]"
                    style={{
                        background:
                            "linear-gradient(180deg, #FFFFFF -180%, rgba(255, 255, 255, 0) 24.45%)"
                    }}
                >
                    <div className="container md:mx-[190px] mt-[93px] text-white text-opacity-70">
                        <h1 className="text-white text-left md:text-[65px] text-[35px] font-['ADELIA-HEAVY']">
                            Get Notified
                        </h1>
                        <p>
                            IPX will be available to select few investors in a few weeks. If you
                            would like to be a part of
                            <br />
                            the IPX investor community, drop your details in the form below and we
                            will notify you
                            <br />
                            when we are ready to on-board you.
                        </p>
                        <br />
                        <span>
                            <input
                                type="text"
                                className="caret-black text-black md:h-[50px] h-[31px] w-[60%]"
                            />
                            <button className="md:h-[50px] h-[31px] ml-[-10px] bg-gradient-to-r from-purple-500 to-pink-500 w-24 font-['ADELIA-HEAVY']">
                                Subscribe
                            </button>
                        </span>
                        <div className="relative md:flex my-4 items-center md:mt-24 text-center">
                            <p className="mr-12 text-sm">About</p>
                            <p className="mr-12 text-sm">Terms of Use</p>
                            <p className="mr-12 text-sm">Privacy Policy</p>
                            <p className="mr-12 text-sm">Knowledge Base</p>
                            <p className="mr-12 text-sm">Customer Support</p>
                        </div>
                        <div className="relative flex my-4 items-center justify-center md:justify-start">
                            <Image className="w-5 mr-8" src={instagramicon} alt="" />
                            <Image className="w-9 mr-8" src={discordicon} alt="" />
                            <Image className="w-6 mr-8" src={twittericon} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )

}

export default Footer;