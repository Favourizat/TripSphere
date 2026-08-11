import Mission from "../components/About/Mission";
import Vision from "../components/About/Vision";
import Download from "../components/Download";
import HomeAbout from "../components/HomeAbout";
import How from "../components/About/How";

const AboutUs = () => {
    return (
        <section>
            <HomeAbout />
            <Vision />
            <Mission />
            <How />
            <Download />
        </section>
    )
}
export default AboutUs;