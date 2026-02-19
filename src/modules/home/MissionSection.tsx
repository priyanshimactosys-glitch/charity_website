import Button from "@/src/components/common/Button";
import Container from "@/src/components/common/Container";
import { CalendarDays, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function MissionSection() {
    return (
        <section className="relative">
            <div className="bg-white h-20" />
            <div className="absolute left-1/2 top-20 -translate-x-1/2 -translate-y-1/2 flex gap-4 z-10">
                <Button variant='secondary' className="px-0">
                    <Image
                        src="/images/footer1.png"
                        alt="Veters Initiative Logo"
                        width={28}
                        height={28}
                        priority
                        className="me-1"
                    />Book Appointment →
                </Button>
                <Button className="px-8 py-3">
                    <Image
                        src="/images/footer2.png"
                        alt="Veters Initiative Logo"
                        width={28}
                        height={28}
                        priority
                        className="me-1"
                    />Contact Us →
                </Button>
            </div>
            <div className="bg-[#F7EEFA] text-center pt-12 pb-6 px-4">
                <p className="text-4xl font-bold mb-4">Our Mission</p>
                <p className="max-w-4xl mx-auto text-base text-[#010101]">
                    V'Peters Initiative is dedicated to empowering immigrants and low-income
                    families by providing education, resources and support to help them build
                    better futures.
                </p>
                <div className="flex justify-center gap-6 mt-6 text-xl">
                    <Image
                        src="/images/Facebook.png"
                        alt="Veters Initiative Logo"
                        width={23}
                        height={24}
                        priority
                    />
                    <Image
                        src="/images/twitter-black.png"
                        alt="Veters Initiative Logo"
                        width={23}
                        height={20}
                        priority
                    />
                    <Image
                        src="/images/youtube-black.png"
                        alt="Veters Initiative Logo"
                        width={23}
                        height={17}
                        priority
                    />
                    <Image
                        src="/images/linkedin.png"
                        alt="Veters Initiative Logo"
                        width={20}
                        height={20}
                        priority
                    />
                </div>
            </div>
            <Container>
                <div className="bg-white py-6 ">
                    <div className="max-w-6xl text-text flex items-center justify-between text-sm text-gray-600">

                        <div className="flex items-center gap-2">
                            <Image
                                src="/images/Phone.png"
                                alt="Phone"
                                width={17}
                                height={17}
                                priority
                            />
                            <span>(253) 555-1234</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Image
                                src="/images/mail.png"
                                alt="Email"
                                width={18}
                                height={15}
                                priority
                            />
                            <span>info@vpetersinitiative.org</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Image
                                src="/images/location.png"
                                alt="Location"
                                width={17}
                                height={19}
                                priority
                            />
                            <span>456 Community Center Dr., Seattle, WA 98109</span>
                        </div>
                    </div>

                    <div className="text-center text-base text-text mt-5 border-t border-[#D9D9D9] pt-4">
                        © 2026 | V'Peters Initiative.
                        <span className="text-blue-600 cursor-pointer ms-2 underline"> Terms & Privacy</span>
                    </div>

                </div>
            </Container>
        </section>

    );
}
