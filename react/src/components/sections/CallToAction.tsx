import Button from "../shared/Button"
import Container from "../shared/Container"
import Paragraph from "../shared/Paragraph"

const CTA = () => {

    return (<section className="pb-20 relative">
        <Container>
            <div className="relative rounded-2xl overflow-hidden">
                <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2zl py-8 md:py-10 md:px-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">Quick Start your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-800 to-fuchsia-900">own Ai</span> Business</h1>
                <Paragraph className="pt-10">
                    Leveraging our AI-powered platform to revolutionize your digital marketing efforts. Get data-driven insights and automation at your fingertips 
                </Paragraph>
                <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
                    <Button>Get in touch</Button>
                </div>
                </div>
            </div>
        </Container>
    </section>)

}
export default CTA