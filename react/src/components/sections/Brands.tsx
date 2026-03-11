import Container from "../shared/Container"
import Title from "../shared/Title"

const logos = ["paypal-3", "slack", "twitch-purple", "discord-6", "spotify-logo-with-text-1", "new-youtube-logo"]

 const Brands = () => {

    return (<section><Container className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
            <Title> Trusted by Industry leaders</Title>
            </div>
            <div className="flex justify-center flex-wrap gap-4">
                {logos.map((logo, key) => (
                    <div key={key} className="p-4 sm:p-5 rounded-xl bg-body border-box-border group">
                        <img src={`assets/logos/${logo}.svg`} width="100" height="60" className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"></img>
                    </div>
                ))}
            </div>
            </Container>
            </section>)
 }
 export default Brands