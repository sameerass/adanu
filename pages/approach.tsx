import Layout from '../components/Layout';
import Image from '../components/Image';
import Model from '../components/approach/Model';
import Nav from '../components/utils/Nav';
import NavLink from '../components/utils/NavLink';
import LeaderBoard from '../components/LeaderBoard';
import { PREFIX } from '../constants';

const Approach = () => {
  return (<Layout title={'Approach'}>
    <div className='approach-container'>
      <Nav className='submenu conditional_menu'>
          <NavLink href='/approach'>Learn our philosophy</NavLink>
      </Nav>
      <div className='responsive_wrapper'>
        <LeaderBoard>
          We believe in EMPOWERMENT, not CHARITY…<br />
          We believe that EDUCATION leads to POSSIBILITY…<br />
          We believe that COLLABORATION creates COMMUNITY…<br />
          We believe that COMMUNITY fosters SUSTAINABLE DEVELOPMENT…<br />
          We believe that SUSTAINABLE DEVELOPMENT ignites GLOBAL CHANGE…
        </LeaderBoard>
        {/* Video & text Area */}

        <div className='row blue'>
          <section className='responsive_wrap_fullwidth in_action'>
            <h2>Passion For Change, Pride Through Service</h2>
            <div className='approach_video'>
              <iframe src='http://player.vimeo.com/video/108423757?color=ffffff' width='720' height='405' frameBorder='0'
               allowFullScreen></iframe>
            </div>
            <article className='hundred'>
              {/* Left Content */}
              <div className='fifty'>
                <p>
                  <p>
                    “<em>The idea for Adanu came to me years ago, and it was the silver lining in my life.
                    I wanted to create something positive from the strife I endured growing up. My education made all
                    the difference in my life, and a passion for change was alive in me. I knew I was on a mission to
                    share what I had learned with the people of my village and my country.
                    I believed in the power of collaboration, hard work and education to change the world in a way we
                    never knew was possible – one village at a time.
                    The beauty of it all is that we now have the opportunity, through Adanu – our ‘wise collaboration’ –
                    to empower our people and pass it on for generations to come.” </em>– Richard Yinkah
                  </p>
                </p>
              </div>
            {/* Right content */}
              <div className='fifty'>
                <p>
                  <p>
                    Listen as Richard Yinkah, Founder &amp; Executive Director of Adanu, shares his vision
                    for supporting communities in improving the quality of their own lives.
                    Adanu’s approach gives communities a firm stake in big decisions that affect their lives,
                    and ownership and leadership over the projects they implement.
                    This results in infrastructure and programs that are sustainable for the long term.
                    It sparks a passion and ambition in community members to initiate other community
                    development projects.
                  </p>
                </p>
              </div>
            </article>
          </section>
        </div>

        {/* Image Gallery */}

        {/* Secondary Image Gallery */}
        <div className='secondary_images'>
          <Image url={`${PREFIX}/uploads/2014/07/1974988_10154631416030128_7358816736689733004_n1.jpg`}
                 height={360} width={480} title={'title test'} />
          <Image url={`${PREFIX}/uploads/2014/07/10644454_10154631413650128_7932739558533883977_n1.jpg`}
                 height={720} width={960} />
          <Image url={`${PREFIX}/uploads/2014/07/ap_4-1024x768.jpg`}
                 height={768} width={1024} />
          <Image url={`${PREFIX}/uploads/2014/07/10672309_10154646603290128_8945814608324850995_n1-e1412181215726.jpg`}
                 height={588} width={780} />
        </div>
        {/*Our Model*/}
        <div className='row yellow'>
          <section className='responsive_wrap_fullwidth our_model'>
            <h2>our model</h2>

            {/*Community Selection*/}
            <Model title={'Community Selection'} imgUrl={`${PREFIX}/images/selection_icon.png`}>
                Adanu selects communities based on their level of need and willingness to contribute a
                significant portion of time, labor and materials to the project.
                Adanu specifically targets communities that have been neglected by the government.
            </Model>

            {/* Community Engage */}
            <Model title={'Community Engagement'} imgUrl={`${PREFIX}/images/engage_icon.png`}>
                Adanu’s model and expectations are clearly communicated to the community,
                community-led working committees are formed, and resources are committed to the project.
                Community members and leaders drive the project to completion.
            </Model>

            {/* Community Partner */}
            <Model title={'Community Partnership'} imgUrl={`${PREFIX}/images/partner_icon.png`}>
                Adanu supervises critical stages of the project, and checks in regularly with working
                committees to keep the community accountable and on track. Volunteers engage with the
                community at different stages of the project to develop relationships, provide encouragement
                and support projects.
            </Model>
        </section>
        </div>
      </div>
    </div>
  </Layout>);
};

export default Approach;
