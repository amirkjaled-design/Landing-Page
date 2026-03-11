import Button from "../shared/Button"
import Container from "../shared/Container"
import Paragraph from "../shared/Paragraph"
import pic from "/assets/pexels-kindelmedia-9889054.jpg"
import Numbers from "./Numbers"


const Hero = () => {

    return(<><section className="relative pt-32 lg:pt-36">
        <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
            <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r from-pink-800 to-fuchsia-900 blur-xl opacity-60 lg:opacity-95 lg:block-hidden"></span>
            <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
            </div>
            <div className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start lg:max-w-none max-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
                <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
                    Empower Your Business 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-fuchsia-800 ml-2">with AI</span>
                </h1>
                <Paragraph className="mt-8">
                Our Ai SaaS platform seamlessly integrates with your existing workflows to deliver real-time insights, intelligent automation, and data-driven decision-making. Experience a future where your business runs smarter, faster, and more efficient. 
                </Paragraph>
                <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
                    <div className="flex sm:flex-row flex-col gap-5 w-full">
                        <form action="#" className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary">
                            <span className="min-w-max pr-2 border-r border-box-border "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
</svg></span>
        <input type="email" placeholder="someone@gmail.com" className="w-full py-3 outline-none bg-transparent" />
                        <Button className="min-w-max text-white">
                            <span className="relative z-[5]">Get started</span>
                        </Button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 lg-w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
                <img src={pic} alt="image" width={2350} height={2359} className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96" />
            </div>
        </Container>
        <Numbers></Numbers>
        </section></>)
}
export default Hero