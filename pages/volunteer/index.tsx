import VolunteerLayout from '../../components/volunteer/Layout';
import LeaderBoard from '../../components/LeaderBoard';
import ItinaryRow from '../../components/volunteer/ItinaryRow';
import Image from '../../components/Image';
import { PREFIX } from '../../constants';

const Volunteer = () => {
  return (<VolunteerLayout title={'Volunteer'}>
           <div className='responsive_wrapper'>
            {/* <!-- Leaderboard --> */}
            <LeaderBoard>
                GO! AND MAKE A LASTING DIFFERENCE...<br />
                <br />
                Adanu’s volunteer program provides the opportunity to <br />
                engage in a new culture, invest in genuine relationships <br />
                with participating communities, and contribute in a <br />
                meaningful way to projects that make a lasting difference.<br />
             </LeaderBoard>

            {/* <!-- Why Volunteer --> */}

            <div className='row yellow'>
                <section className='responsive_wrap_fullwidth in_action'>
                    <h2>why volunteer</h2>
                    <article className='hundred'>
                        {/* <!-- Left Content --> */}
                         <div className='fifty'>
                            <p>
                                <p>
                                    “<em>I built a school and changed the world for children who only knew learning
                                         under a tree. The spirit of teamwork was</em> amazing.
                                         &#8221; – Miranda Leurquin, Volunteer
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    Volunteerism is a powerful way to positively impact your own life and the lives
                                    of the people you serve. As a volunteer, you will be inspired by the hard work
                                    and joy of ownership in the communities.
                                </p>
                            </p>
                         </div>

                        {/* <!-- Right content --> */}
                        <div className='fifty'>
                            <p>
                                 <p>
                                     And in return, the communities will be motivated and encouraged by
                                     your investment in their future. Rather than feeling forgotten by the world,
                                     villagers learn they are valued and that their work is respected.
                                     This builds tremendous dignity and pride. As a volunteer, you will
                                     have the unique opportunity to experience day-to-day life in a Ghanaian village,
                                     and create lasting relationships with the people who live there.
                                 </p>
                            </p>
                        </div>
                    </article>
                </section>
            </div>
            {/* <!-- Trip Details --> */}
            <div className='row dark'>
                <h2>trip details</h2>
            </div>
            <div className='green_fix'>
            {/* <!-- Itinerary Overview --> */}
                <div className='sixty_col blue'>
                   <section className='itinerary_section'>
                     <h2>Itinerary Overview</h2>
                     <article>
                         <ItinaryRow title={'Day 1'}>
                             An Adanu team member will pick you up from the airport,
                             discuss specific project details with you, and transport
                             you to the community. That evening, you will meet the chief,
                             elders and other members of the community, and participate in
                             a welcome ceremony with celebratory drumming and dancing.
                             The Adanu team member will be with you throughout your stay.
                         </ItinaryRow>
                         <ItinaryRow title={'Day 2'}>
                             In the morning, you can choose to attend a church service with community leaders,
                             or simply relax and  get to know the village and its people. In the afternoon,
                             you will tour the community and learn about its history.
                         </ItinaryRow>
                         <ItinaryRow title={'Days 3–4'}>
                             You will work on a community project in the mornings, and participate in cultural
                             excursions during the afternoons.  The projects range from building a latrine to
                             installing a water tank to building a school or playground.  The cultural excursions
                             can include drumming lessons, batik making, Amazing Race-style marketing and cooking
                             with villagers, kente weaving, field trips with community students, and more.
                         </ItinaryRow>
                         <ItinaryRow title={'Days 5'}>
                             You will enjoy a full day of cultural experiences and sightseeing. Oftentimes
                             this will include a trip to the Wli Waterfalls and a Monkey Sanctuary.
                         </ItinaryRow>
                         <ItinaryRow title={'Days 6'}>
                             You will work on a community project in the morning, participate in a departure
                             ceremony in the afternoon, and then enjoy a celebratory bonfire
                             with drumming and dancing.
                         </ItinaryRow>
                         <ItinaryRow title={'Days 7'}>
                             You will visit a different Adanu village to see progress of another project,
                             and learn about the life of another village community.
                         </ItinaryRow>
                         <ItinaryRow title={'Days 8'}>
                             Your Adanu team member will facilitate a debriefing session with your group,
                             and transport you back to the airport for departure.  If there is time, you
                             will visit a local craft market, or tour the highlights of the capitol of Ghana.
                             (Departures are normally in the evening)
                         </ItinaryRow>
                      </article>
                   </section>
                </div>
            {/* <!-- side bars --> */}
            <div className='forty_col red'>
                <aside className='sider'>
                    <h2>Cost & Extras</h2>
                    <h1>Your Trip</h1>
                    <h3>overview</h3>
                    <p className='yourtrip_overview'>
                        Trip fees cover the costs for all transportation, accommodations, food and excursions,
                        as well as a financial contribution to the project you will be working on. Fees also
                        cover a minimum of one Adanu team member staying with you throughout your trip.<br />
                        <br />
                        Fees do not cover airfare, travel documents or gifts/souvenirs purchased during the trip.<br />
                        <br />
                        Special pricing for university-sponsored students and organizations who
                        self-fundraise for project.
                    </p>
                    <p className='total_cost'>Total cost: $1400 </p>
                        <a className='side_boxed'
                        href='https://volunteer-trip-adanu.echurchevents.com/'>Book Now</a>
                </aside>
            </div>

            <div className='forty_col green'>
                <aside className='sider'>
                    <h2>corporate </h2>
                    <h1>Employee Volunteer Opportunities</h1>
                    <p className='yourtrip_overview'>
                        Increase your employees’ loyalty, global awareness, and leadership development through
                        corporate volunteerism with Adanu.

                        Adanu has been working with volunteer groups since 2002, and we have successfully hosted
                        over 1600 volunteers.

                        An Adanu team member will be with you at all times, and you will also have a personal cook
                        throughout your stay to help ensure the health of your team.

                        Please contact richard@adanu.org to arrange for a customized trip based on the needs and
                        goals of your organization.
                    </p>
                </aside>
            </div>

            </div>
            {/* <!-- Green Fix --> */}
            <div className='row dark'>
                <h2>plan your trip</h2>
            </div>
            <div className='row yellow'>
                <section className='responsive_wrap_fullwidth in_action'>
                    <article className='hundred'>
                        {/* <!-- Adanu Trip Messagge --> */}
                        <h1>
                            <p>&nbsp;</p>
                            <p>
                                Adanu has a long history of working with various groups and individuals
                                to plan their ideal trip. We offer three cost tiers, and are happy to work
                                with your preferred dates and length of stay.
                            </p>
                            <p>&nbsp;</p>
                            <p>
                                Additional information about dates and costs can be found
                                on <a href='https://volunteer-trip-adanu.echurchevents.com/step1'>our booking site</a>.
                                Please contact us directly for specific needs or questions.
                            </p>
                        </h1>
                    </article>
                </section>
            </div>
            {/* <!-- Image Gallery --> */}

            {/* <!-- Secondary Image Gallery --> */}
            <div className='secondary_images'>
                <Image url={`${PREFIX}/uploads/2014/07/vill-e1412182208734.jpg`}
                       height={526} width={700} title={'Making friends'} />
                <Image url={`${PREFIX}/uploads/2014/07/go2-1024x768.jpg`}
                       height={768} width={1024} title={'Carrying Water'}/>
                <Image url={`${PREFIX}/uploads/2014/07/Waterfall-love-e1482348213777-1024x770.jpg`}
                       height={770} width={1024} title={'Waterfall'}/>
                <Image url={`${PREFIX}/uploads/2014/07/go1-1024x768.jpg`}
                       height={768} width={1024} title={'Dancing'}/>
            </div>
        </div>
      </VolunteerLayout>);
};

export default Volunteer;
