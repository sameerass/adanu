import VolunteerLayout from '../../components/volunteer/Layout';
import Question from '../../components/volunteer/Question';
import Answer from '../../components/volunteer/Answer';
import SideBarLink from '../../components/volunteer/SideBarLink';
import Link from 'next/link';

const WhatYouShouldKnow = () => {
  return (<VolunteerLayout title={'Volunteer'}>
        <div className='responsive_wrapper volunteer'>
            {/*<!-- Page Content -->*/}
            <div className='green_fix'>
                {/*<!-- Itinerary Overview -->*/}
                <div className='sixty_col yellow'>
                    <section className='itinerary_section'>
                        <h1 className='vertigo_content'>Know Before You Go</h1>
                        <article className='hundred vertigo_content'>
                            <Question>How far ahead should I book my trip?</Question>
                            <Answer>
                                We suggest booking your trip at least 90 days prior to the program
                                start date. We do accept applications within 60 days of the start
                                date on an as available basis.
                            </Answer>

                            <Question>Is a deposit required to book a trip?</Question>
                            <Answer>
                                A $300 deposit is required to book a trip. The remaining balance is
                                due 60 days before the program start date.
                            </Answer>

                            <Question>Is the deposit refundable if I cancel my trip?</Question>
                            <Answer>
                                The deposit is not refundable. However, you can transfer your deposit
                                to another trip within 12 months of the original trip start date.
                                See Adanu’s refund policy on
                                the <Link href='/privacy-policy'><a target='_blank' rel='noopener noreferrer'>
                                    privacy page </a></Link>for more information.
                            </Answer>

                            <Question>
                                What happens after I complete the application process and pay my deposit?
                            </Question>
                            <Answer>
                                You will receive a confirmation email within 24 hours that your
                                application and deposit have been received. A member of the Adanu
                                team will contact you within 10 business days to collect additional
                                information and to send you a trip packet. You will receive final itinerary
                                details upon payment of your final trip fees, and no later than 3 weeks before
                                your program start date.
                            </Answer>

                            <Question>
                                Can I book a trip with a group of friends, colleagues or relatives?
                            </Question>
                            <Answer>
                                You can book any of the open trips as long as the maximum capacity
                                is not exceeded. If you would like to book a private trip, please email us
                                at <a href='mailto:trips@adanu.org'>trips@adanu.org</a>.
                                We will accommodate private groups of 4 or more.
                            </Answer>

                            <Question>Do I need any specific skills or experience to volunteer?</Question>
                            <Answer>
                                Our volunteer program accommodates all levels of skill and experience.
                            </Answer>

                            <Question>
                                Are there any requirements to participate in a volunteer trip through Adanu?
                            </Question>
                            <Answer>
                                Adanu asks that all volunteers arrive in Ghana with an open mind and a passion
                                for helping those in need, an enthusiasm for meeting new people and embracing a
                                new culture, and good mental and physical health.
                            </Answer>

                            <Question>
                                Does Adanu help volunteers secure airfare, travel documents, etc.?
                            </Question>
                            <Answer>
                                It is the responsibility of the volunteer to book airfare, obtain
                                a passport and visa, get the required vaccinations, and purchase travel
                                insurance. Adanu will provide step-by-step instructions on how to complete
                                these tasks as part of the trip packet.
                            </Answer>

                            <Question>What types of cultural experiences will I have on my trip?</Question>
                            <Answer>
                                This trip provides a number of cultural experiences, including
                                living as a member of the community you serve, participating in
                                local celebrations and ceremonies, and sightseeing activities
                                throughout the Volta region.  Experiences may include visiting the
                                largest waterfall in West Africa, learning about Ghana’s unique Kente
                                tradition of weaving (the “cloth of kings”), learning how to make batik
                                fabric,  visiting the Atome Monkey Sanctuary, exploring the Ho Market,
                                and cooking Ghanaian food, to name a few).
                            </Answer>

                            <Question>What will my living accommodations be like?</Question>
                            <Answer>
                                Volunteers will either stay in guest homes near the village or in the village
                                itself, hosted by prominent community members. Accommodations may include
                                running water, toilets and some access to intermittent electricity. In needier
                                communities, there may be no running water or flush toilets, and you may only
                                have access to scoop showers.
                            </Answer>

                            <Question>What can I expect to eat?</Question>
                            <Answer>
                                All food will be prepared by a kitchen service company.
                                Traditional Ghanaian meals include specialties such as Jollof
                                rice (rice, tomatoes, spices, with beef or vegetables) and a
                                variety of fish, fruit and vegetables. Ghanaian food is spicy
                                and diverse. There&#8217;s something delicious for everyone.
                                For the adventurous, local dishes like Banku and Fufu offer a
                                unique culinary experience.
                            </Answer>

                            <Question>Will translators be provided?</Question>
                            <Answer>
                                All Adanu team members and many leaders in the community are fluent in English.
                                English is the primarily language in Ghana, and the language taught in schools.
                                The Adanu team will serve as your translators to enable you to communicate with
                                members of the community who do not speak English.
                            </Answer>

                            <Question>What part of Ghana will I be volunteering in?</Question>
                            <Answer>
                                Most of our projects support communities in and around the Volta region of
                                Ghana, which is the southeast region of Ghana.
                            </Answer>

                            <Question>Can I stay longer than 8 days?</Question>
                            <Answer>
                                Our standard trip is Saturday to Saturday. If you would like to plan an
                                extended trip, please email us
                                at <a href='mailto:trips@adanu.org'>trips@adanu.org</a>, we would love to
                                have you stay with us longer!
                            </Answer>

                            <Question>Who will pick me up from the airport?</Question>
                            <Answer>
                                An Adanu team member will pick you up at the airport, and will provide
                                transportation to and from the community. If you plan to arrive earlier
                                than the rest of the group, you will need to coordinate your own transportation
                                and return to the airport at the designated time to meet the group.
                            </Answer>

                            <Question>How safe is Ghana?</Question>
                            <Answer>
                                Ghana is a very politically stable country, and very welcoming to tourists.
                                Any international travel requires caution and awareness. We suggest that all
                                volunteers consult their own government advisory office before participating
                                in our program. More information can be found on
                                our <Link href='/health-and-security'><a>Health and Security</a></Link> page.
                            </Answer>

                            <Question>What is the weather like in Ghana?</Question>
                            <Answer>
                                Ghana is located just north of the equator, so the climate
                                of Ghana is tropical and humid. Temperatures vary only slightly with season and
                                elevation. There are two rainy seasons, from April to July and September to
                                November. In most areas, the highest temperatures occur in March and the lowest
                                in August.
                            </Answer>

                            <Question>What are the principle health risks in Ghana?</Question>
                            <Answer>
                                A Yellow Fever vaccination and a Malaria prescription are required to participate
                                in this program. You should consult a travel doctor who will be knowledgeable about
                                current epidemics, health risks and recommended vaccinations, or use the Center
                                for Disease Control traveler&#8217;s health recommendations.
                            </Answer>

                            <Question>Is the food safe to buy from a street vendor?</Question>
                            <Answer>
                                Ghana is still considered a developing country, and you should be cautious when
                                purchasing food. Our suggestion is to avoid buying food from street vendors. The
                                food prepared for you by a kitchen service company is guaranteed to be fresh and
                                uncontaminated.
                            </Answer>

                            <Question>Is tap water safe to drink?</Question>
                            <Answer>
                                As in most developing countries, tap water in Ghana is not safe to drink.
                                The Adanu team will provide each volunteer with filtered water for drinking
                                and hygiene needs.
                            </Answer>

                            <Question>Will I be able to contact my family and friends while I’m in Ghana?</Question>
                            <Answer>
                                International Direct Dialing from Ghana is available in all cities. Phone cards
                                are widely available, and local calls are generally charged at a nominal fee.
                            </Answer>

                            <Question>Is there a dress code I should follow?</Question>
                            <Answer>
                                Volunteers should dress conservatively when at the community. Shorts and t-shirts
                                are acceptable. To be respective of Ghana’s culture and religious beliefs, we ask
                                that volunteers not wear short shorts or skirts or revealing tank tops.
                            </Answer>
                        </article>
                    </section>
                </div>
                {/*<!-- Visa & Passport -->*/}
                <SideBarLink title={'Passport & Visa'} color={'blue'}
                    url={`uploads/2017/06/Passport-Visa.pdf`} linkName={'download'}>
                    It is suggested that you apply for a passport and visa at least
                    6 weeks before your departure date. Click the download button for more information.
                </SideBarLink>

                {/*<!-- Immunize  -->*/}
                <SideBarLink title={'Immunizations'} color={'red'}
                    url={`uploads/2014/07/Immunizations.pdf`} linkName={'download'}>
                    Yellow Fever and Malaria immunizations/ prescriptions are required to travel to Ghana.
                    Other immunizations may be recommended. Click the download button for more information.
                </SideBarLink>

                {/*<!-- Packing List -->*/}
                <SideBarLink title={'Packing List'} color={'green'}
                    url={`uploads/2014/07/Packing-List.pdf`} linkName={'download'}>
                     Click the download button for an abbreviated packing list, including clothing, toiletries,
                     and donation items. A comprehensive list will be provided with our Volunteer Guide
                     and is available on the Adanu app.
                </SideBarLink>

                {/*<!-- cost & extras -->*/}
                <div className='forty_col blue'>
                    <aside className='sider'>
                        <h2>Costs & Extras</h2>
                        <h1></h1>
                        <h3></h3>
                        <p className='yourtrip_overview'>
                            Trip fees cover the costs for all transportation, accommodations, food and excursions,
                            as well as a financial contribution to the project you will be working on.

                            Fees do not cover airfare, travel documents or gifts/souvenirs purchased during the trip.
                        </p>
                        <p className='total_cost'>Total cost: $1400 </p>
                        <Link href='/go#booknow_anchor'><a className='side_boxed'>Book Now</a></Link>
                    </aside>
                </div>
                <SideBarLink title={'Our Store'} color={'green'}
                    url={'https://adanu.myshopify.com/'} linkName={'Shop Now'}>
                     Visit our store before your trip to purchase shirts and other merchandise.
                     All profits go directly to funding projects in Ghana.
                </SideBarLink>
            </div>
        </div>
      </VolunteerLayout >);
};

export default WhatYouShouldKnow;
