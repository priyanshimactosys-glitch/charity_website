import Button from "@/src/components/common/Button";
import Container from "@/src/components/common/Container";
import Image from "next/image";

export default function SupportSection() {
    return (
        <section
            className="pt-8 "
            style={{
                background: "linear-gradient(to bottom, #222520 50%, #F7CCCC 50%)"
            }}
        >
            <p className="text-white text-center text-4xl font-semibold mb-10">
                Support V'Peters Initiative
            </p>

            <Container>
                <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-[#1E211D] text-white rounded-lg p-18 text-center shadow-xl">
                        <Image
                            src="/images/support1.png"
                            alt="Veters Initiative Logo"
                            width={80}
                            height={80}
                            priority
                            className="mx-auto mb-4"
                        />
                        <p className="text-2xl font-semibold mb-2">
                            Donate Money
                        </p>

                        <p className="text-gray-300 text-lg mb-6">
                            Your financial contribution supports vital services for our community.
                        </p>

                        <Button>
                            Give Online →
                        </Button>

                        <div className="flex justify-around gap-3 mt-6">
                            {["$25", "$50", "$100", "Other"].map((amt) => (
                                <button
                                    key={amt}
                                    className="bg-[#F6F6F6] text-text px-7 py-1 rounded text-base"
                                >
                                    {amt}
                                </button>
                            ))}
                        </div>

                        <hr className="border-[#FFFFFF] my-5" />
                        <p className="text-[#FFFFFF] text-lg">Give by Mail</p>
                    </div>

                    <div className="bg-[#1E211D] text-white rounded-lg p-12 text-center shadow-xl">
                        <Image
                            src="/images/support2.png"
                            alt="Veters Initiative Logo"
                            width={80}
                            height={80}
                            priority
                            className="mx-auto mb-4"
                        />

                        <p className="text-2xl font-semibold mb-2">
                            Donate Goods
                        </p>

                        <p className="text-gray-300 text-lg mb-4">
                            Provide much-needed items to support our programs and clients.
                        </p>

                        <ul className="text-[#FFFFFF] text-lg text-left space-y-1 mb-6 list-disc list-inside">
                            <li>School and office supplies</li>
                            <li>Non-perishable food</li>
                            <li>Toiletries and hygiene products</li>
                            <li>Clothing, coats, shoes</li>
                            <li>New or gently used electronics</li>
                        </ul>

                        <div className="flex justify-start gap-4">
                            <Button variant="secondary">
                                Drop-Off Donations
                            </Button>

                            <Button>
                                Request Pickup
                            </Button>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
