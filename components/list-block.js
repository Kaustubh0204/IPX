import Image from 'next/image'
import thumbnail1 from '../public/images/thumbnail-1.png'
import followingicon from '../public/images/following-icon.png'
import nftslefticon from '../public/images/nfts-left-icon.png'
import arrowrighticon2 from '../public/images/arrow-right-icon-2.png'
import arrowlefticon from '../public/images/arrow-left-icon.png'
import arrowrighticon from '../public/images/arrow-right-icon.png'
import thumbnail2 from '../public/images/thumbnail-2.png'
import thumbnail3 from '../public/images/thumbnail-3.png'
import thumbnail4 from '../public/images/thumbnail-4.png'
import thumbnail5 from '../public/images/thumbnail-5.png'
import thumbnail6 from '../public/images/thumbnail-6.png'
import thumbnail7 from '../public/images/thumbnail-7.png'
import thumbnail8 from '../public/images/thumbnail-8.png'
import thumbnail9 from '../public/images/thumbnail-9.png'
import thumbnail10 from '../public/images/thumbnail-10.png'
import thumbnail11 from '../public/images/thumbnail-11.png'
import thumbnail12 from '../public/images/thumbnail-12.png'
import lambiya from '../public/images/Lambiya.png'

const ListBlock = () => {
    const data = [
        {
            "title": "SOCIAL JUSTICE",
            "image": thumbnail1,
            "followers": "21.6K Following",
            "nftsleft": "6 NFTs Left",
            "description": "Three youngsters, in the early days of their careers, head back to their hometown during the pandemic. Three youngsters, in the early days of their careers, head back to their hometown during the pandemic.",
            "director": "Rahul Roy",
            "dialogues": "Samyukta Banerjee",
            "originalmusic": "Jatin Parekh",
            "NFTS":{
            "smallimage1": thumbnail2,
            "smallimage2": thumbnail3,
            "smallimage3": thumbnail4,
            },           

        },
        {
            "title": "A TRILLION SUNSETS",
            "image": thumbnail5,
            "followers": "21.6K Following",
            "nftsleft": "6 NFTs Left",
            "description": "Three youngsters, in the early days of their careers, head back to their hometown during the pandemic. Three youngsters, in the early days of their careers, head back to their hometown during the pandemic.",
            "director": "Rahul Roy",
            "dialogues": "Samyukta Banerjee",
            "originalmusic": "Jatin Parekh",
            "NFTS":{
            "smallimage1": thumbnail6,
            "smallimage2": thumbnail7,
            "smallimage3": thumbnail8,
            },            
        },
        {
            "title": "TAKE ME AWAY",
            "image": thumbnail9,
            "followers": "21.6K Following",
            "nftsleft": "6 NFTs Left",
            "description": "Three youngsters, in the early days of their careers, head back to their hometown during the pandemic. Three youngsters, in the early days of their careers, head back to their hometown during the pandemic.",
            "director": "Rahul Roy",
            "dialogues": "Samyukta Banerjee",
            "originalmusic": "Jatin Parekh",
            "NFTS":{
            "smallimage1": thumbnail10,
            "smallimage2": thumbnail11,
            "smallimage3": thumbnail12,
            },         
        }
    ]
    const listItems = data.map(
        (element) => {
            return (

                <div>
                    <div
                        id="hover1"
                        className="container group w-auto mx-[9%] md:mt-[62px] bg-[#121212]  text-white rounded-md md:p-5 md:pr-10  hover:border hover:border-white hover:cursor-pointer grayscale hover:grayscale-0"
                    >
                        <div className="grid grid-flow-row-dense md:grid-cols-2 md:gap-8 gap-0">
                            <div className="col-span-1">
                                <Image
                                    id="hover1a"
                                    className="group-hover:slide-tl"
                                    src={element.image}
                                    alt=""
                                    style={{ maxHeight: 300}}
                                />
                            </div>
                            <div className="col-span-1 p-2">
                                <h1 className="md:text-[3.076vw] text-[7.076vw] tracking-[0.454vw] font-['zuume'] ">
                                    {element.title}
                                </h1>
                                <hr className="opacity-20" />
                                <div className="flex items-center mt-2 mb-3 max-sm:hidden">
                                    <Image src={followingicon} />
                                    <div>
                                        <p className="text-[grey] text-sm mr-20">
                                            &nbsp;&nbsp; {element.followers}
                                        </p>
                                    </div>
                                    <Image src={nftslefticon} />
                                    <div>
                                        <span className="text-[grey] text-sm">&nbsp;&nbsp; {element.nftsleft}</span>
                                    </div>
                                </div>
                                <div className="md:hidden">
                                    <span className="inline-flex items-baseline">
                                        <Image
                                            src={followingicon}
                                            alt=""
                                            className="self-center mx-1 w-[15px]"
                                        />
                                        <span className="text-[grey] text-[11px]">{element.followers}</span>
                                    </span>
                                    <span className="inline-flex items-baseline">
                                        <Image
                                            src={nftslefticon}
                                            alt=""
                                            className="self-center mx-1 w-[15px]"
                                        />
                                        <span className="text-[grey] text-[11px]">{element.nftsleft}</span>
                                    </span>
                                </div>
                                <span>
                                    <hr className="opacity-20" />
                                    <p className="mt-4 mb-4 font-[800] tracking-[0.3px] max-sm:text-[12px]">
                                        {element.description}
                                    </p>
                                    <hr className="opacity-20" />
                                    <span className="inline-grid grid-cols-3 text-sm max-sm:hidden">
                                        <span className="text-[gray] font-[800]">Director</span>
                                        <span className="text-[gray] font-[800] ml-[-20px]">Dialogues</span>
                                        <span className="text-[gray] font-[800]">Original Music</span>
                                        <span>{element.director}</span>
                                        <span className="mr-10 ml-[-20px]">{element.dialogues}</span>
                                        <span>{element.originalmusic}</span>
                                    </span>
                                    <Image
                                        src={arrowrighticon2}
                                        id="hover1b"
                                        className="h-24 w-24 relative right-[-96%] top-[-32%] z-20 scale-out-center group-hover:scale-in-center "
                                        alt=""
                                    />
                                </span>
                            </div>
                        </div>

                        <div className="relative flex mt-[-70px] items-center p-2">
                            <p className="flex-shrink font-[800] text-lg text-white mr-5">NFTs</p>
                            <div className="flex-grow border-t border-gray-500" />
                            <Image
                                className="ml-5 mr-2 cursor-pointer left-paddle "
                                src={arrowlefticon}
                                alt=""
                            />
                            <Image
                                className="cursor-pointer right-paddle "
                                src={arrowrighticon}
                                alt=""
                            />
                        </div>
                        <div className="relative flex flex-nowrap my-4 items-center overflow-x-scroll custom-scrollbar p-2">
                            <div
                                className="container mb-5 w-auto"
                                style={{ minWidth: 300, marginRight: 20, maxHeight: 600, }}
                            >
                                <Image className=" mb-3" src={element.NFTS.smallimage1} alt="" />
                                <div
                                    className="flex items-center z-20 mt-[-23%]  rounded-2xl p-2 mx-2"
                                    style={{
                                        background: "rgba(8, 8, 8, 0.62)",
                                        backdropFilter: "blur(4px)"
                                    }}
                                >
                                    <Image src={lambiya} />
                                    <div>
                                        <span className="mt-2 ml-1">Lambiyan</span>
                                        <span className="mt-2 ml-1 right-5 absolute bottom-[23%] text-sm underline">
                                            Explore
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="container mb-5 w-auto"
                                style={{ minWidth: 300, marginRight: 20 }}
                            >
                                <Image className=" mb-3" src={element.NFTS.smallimage2} alt="" />
                                <div
                                    className="flex items-center z-20 mt-[-23%]  rounded-2xl p-2 mx-2"
                                    style={{
                                        background: "rgba(8, 8, 8, 0.62)",
                                        backdropFilter: "blur(4px)"
                                    }}
                                >
                                    <Image src={lambiya} />
                                    <div>
                                        <span className="mt-2 ml-1">Lambiyan</span>
                                        <span className="mt-2 ml-1 right-5 absolute bottom-[23%] text-sm underline">
                                            Explore
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="container mb-5 w-auto"
                                style={{ minWidth: 300, marginRight: 20 }}
                            >
                                <Image className=" mb-3" src={element.NFTS.smallimage3} alt="" />
                                <div
                                    className="flex items-center z-20 mt-[-23%]  rounded-2xl p-2 mx-2"
                                    style={{
                                        background: "rgba(8, 8, 8, 0.62)",
                                        backdropFilter: "blur(4px)"
                                    }}
                                >
                                    <Image src={lambiya} />
                                    <div>
                                        <span className="mt-2 ml-1">Lambiyan</span>
                                        <span className="mt-2 ml-1 right-5 absolute bottom-[23%] text-sm underline">
                                            Explore
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="container mb-5 w-auto"
                                style={{ minWidth: 300, marginRight: 20 }}
                            >
                                <Image className=" mb-3" src={element.NFTS.smallimage3} alt="" />
                                <div
                                    className="flex items-center z-20 mt-[-23%]  rounded-2xl p-2 mx-2"
                                    style={{
                                        background: "rgba(8, 8, 8, 0.62)",
                                        backdropFilter: "blur(4px)"
                                    }}
                                >
                                    <Image src={lambiya} />
                                    <div>
                                        <span className="mt-2 ml-1">Lambiyan</span>
                                        <span className="mt-2 ml-1 right-5 absolute bottom-[23%] text-sm underline">
                                            Explore
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <br />
                    <br />

                </div>

            )
        }
    )
    return (
        <div>
            {listItems}
        </div>
    )
}

export default ListBlock;