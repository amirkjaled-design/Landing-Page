import Container from "../shared/Container"
import pic from "../../assets/pexels-spacex-60130.jpg" 
import Title from "../shared/Title"
import Paragraph from "../shared/Paragraph"
import Info from "../cards/Info"

 const Aboutus = () => {

    return(<section id="about-us">
        <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
            <div className="w-full md:w-5/12 lg:w-1/2">
            <div className="w-full h-80 sm:h-96 relative">
                <img src={pic} width={2350} height={2359} className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"/>
            </div>
            </div>
            <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
                <Title>
                    About our Ai Solution
                </Title>
                <Paragraph>
                We are on a mission to empower business with transformative AI trchnology. 
                Our team of experts combines industry-leading research with innovative algorithms 
                to deliver a platform that adapts to your unique needs.
                join us and lead the digital revolution in your industry  
                </Paragraph>
                <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
                    <Info title="Mission" description="Something generic">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-white w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 16 16">
  <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5"/>
</svg>
                    </Info>
                      <Info title="Vision" description="Our vision is to drive business innovation and growth">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-code-slash text-white" viewBox="0 0 16 16">
  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
</svg>
                    </Info>
                </div>
            </div>
        </Container>
    </section>)
 }
 export default Aboutus
 /*

 */