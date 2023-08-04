import React from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import HomePageText from '@/assets/HomePageText.png'
import { SelectedPage } from '@/shared/types'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'


type Props = {
    setSelectedPage : (value  : SelectedPage) => void;  
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
    <section
        id='home'
        className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
        >
            {/* Image and Header */}
            <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
                {/* Main Header */}
                <div>
                    {/* Headings */}
                    <div>
                        <div>
                            <div>
                                <img alt='home-page-text' src={HomePageText}/>
                            </div>
                        </div>
                        <p>
                        Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
                        </p>
                    </div>

                    {/* Actions */}
                    <div>
                        <ActionButton
                           setSelectedPage={setSelectedPage}>
                            Join now
                        </ActionButton>
                        <AnchorLink
                        className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`${SelectedPage.ContactUs}`}>
                            <p>Learn More</p>

                        </AnchorLink>
                    </div>

                </div>

                {/* image  */}
                <div>
                    <img alt='home-page-graphic' src={HomePageGraphic} />
                </div>
            </div>

            {/* Sponsors */}
            {isAboveMediumScreens && (
                 <div>
                <div>
                    <div>
                        <img alt='red-bull-sponsor' src={SponsorRedBull} />
                        <img alt='forbes-sponsor' src={SponsorForbes} />
                        <img alt='fortune-sponsor' src={SponsorFortune} />
                    </div>
                </div>
            </div>)}
           

    </section>
  )
}

export default Home