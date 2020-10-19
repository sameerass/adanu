import Link from 'next/link';
import { PREFIX } from '../constants';

const Footer = () => {
  return (<footer>
        <nav className='footer_menus'>
            <ul className='six'>
                <li className='ul_head'>
                    <Link href='/approach'><a>Approach</a></Link>
                </li>
                <li>
                    <Link href='/approach'><a>Our Model</a></Link>
                </li>
            </ul>
            <ul className='six'>
                <li className='ul_head'>
                    <Link href='/volunteer'><a>Volunteer</a></Link>
                </li>
                <li>
                    <Link href='/about/ghana'><a>Ghana</a></Link>
                </li>
                <li>
                    <Link href='/volunteer'><a>Offerings</a></Link>
                </li>
                <li>
                    <Link href='/volunteer/what-you-should-know'><a>FAQ</a></Link>
                </li>
            </ul>
            <ul className='six'>
                <li className='ul_head'>
                    <Link href='/give'><a>Give</a></Link>
                </li>
                <li>
                    <Link href='/give'><a>Ways to give</a></Link>
                </li>
                <li>
                    <Link href='/give/support'><a>Support a community</a></Link>
                </li>
                <li>
                    <a href='https://pushpay.com/pay/adanurenton'>Donate</a>
                </li>
            </ul>
            <ul className='six'>
                <li className='ul_head'>
                    <Link href='/about'><a>About</a></Link>
                </li>
                <li>
                    <Link href='/about/team'><a>Team</a></Link>
                </li>
                <li>
                    <Link href='/about/financials'><a>Financials</a></Link>
                </li>
                <li>
                    <Link href='/partners'><a>Partnerships</a></Link>
                </li>
                <li>
                    <Link href='/category/press'><a>Press</a></Link>
                </li>
            </ul>

        <ul className='six'>
            <li className='ul_head'>
                <Link href='/contact'><a>Contact</a></Link>
            </li>
            <li>
                <a href='tel:425-272-3157/+233555552992'>425-272-3157/+233555552992</a>
            </li>
            <li>
                <a href='mailto:AdanuGhana@adanu.org/office@adanu.org'>AdanuGhana@adanu.org/office@adanu.org</a>
            </li>

            {/*Begin MailChimp Signup Form*/}
            <div id='mc_embed_signup'>
                <form action='http://adanu.us8.list-manage.com/subscribe/post?u=8424bffe1e6f6a5fc1a13c32d&amp;id=4d62196ecb' method='post'
                 id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' className='validate'
                  target='_blank' noValidate>
                    <div id='mc_embed_signup_scroll'>
                        {/* real people should not fill this in and expect good things -
                         do not remove this or risk form bot signups*/}
                        <div style={{ position: 'absolute', left: '-5000px' }}>
                            <input type='text' name='b_8424bffe1e6f6a5fc1a13c32d_bbc79d83f5' tabIndex={-1} value=''/>
                        </div>
                        <div className='clear'>
                            <input type='submit' value='Subscribe to Adanu newsletter' name='subscribe'
                             id='mc-embedded-subscribe' className='button'/>
                        </div>
                    </div>
                </form>
            </div>

            {/*End mc_embed_signup*/}
        </ul>
        <ul className='six social_foot'>
            <li className='ul_head'>
                <Link href='#'><a>Connect</a></Link>
            </li>
            <ul className='social_narrow'>
                <li>
                    <a href='https://itunes.apple.com/us/app/adanu/id1165156556?mt=8' target='_blank' className='twoup_1'>
                        <img src={`/${PREFIX}/images/shop_yellow.png`}/>
                    </a>
                </li>
                <li>
                    <a href='https://www.facebook.com/AdanuGhana/' target='_blank' className='twoup_2'>
                        <img src={`/${PREFIX}/images/facebook_yellow.png`}/>
                    </a>
                </li>
                <li className='clr'>
                    <a href='https://twitter.com/adanughana' target='_blank' className='twoup_3'>
                        <img src={`/${PREFIX}/images/twitter_yellow.png`}/>
                    </a>
                </li>
                <li>
                    <a href='http://instagram.com/AdanuGhana' target='_blank' className='twoup_4'>
                        <img src={`/${PREFIX}/images/instagram_yellow.png`}/>
                    </a>
                </li>
            </ul>
        </ul>
    </nav>
    <div className='basestrip'>
        <span className='copyright'>&#169;2018 Adanu</span>
        <span className='privacypolicy'>
            <Link href='/privacy-policy'><a>Privacy Policy</a></Link>
        </span>
        <span className='strapline'>inspiring communities together</span>
    </div>

    <div className='basestrip align-middle'>
        <a href='http://www.guidestar.org/organizations/46-1989395/american-friends- divog.aspx'>
            <img src={`/${PREFIX}/images/GuideStar_logo_lightfont-e1459799299128.png`}/>
        </a>
    </div>
</footer>);
};

export default Footer;
