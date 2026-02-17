import Button from '@/src/components/common/Button'
import Container from '@/src/components/common/Container'
import Image from 'next/image'
import React from 'react'

const GetHelpSection = () => {
    return (
        <div className="bg-gradient-to-b from-pink-100 via-pink-100 to-pink-50 py-10">
            <Container>
                <div className="bg-white rounded-xl p-12 shadow-lg">
                    <div className="flex flex-col md:flex-row gap-7">
                        <div className="md:w-3/5 md:pr-12 md:border-r-2 md:border-gray-200">
                            <p className="text-4xl font-bold text-black mb-5">Get Help</p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-3">
                                    <Image
                                        src="/images/Phone.png"
                                        alt="Veters Initiative Logo"
                                        width={18}
                                        height={18}
                                        priority
                                        className='mt-1'
                                    />
                                    <span className="text-base text-black font-medium">(253) 555-1234</span>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Image
                                        src="/images/mail.png"
                                        alt="Veters Initiative Logo"
                                        width={18}
                                        height={15}
                                        priority
                                        className='mt-1'
                                    />
                                    <span className="text-base text-black font-medium">info@vpetersinitiative.org</span>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Image
                                        src="/images/location.png"
                                        alt="Veters Initiative Logo"
                                        width={17}
                                        height={19}
                                        priority
                                        className='mt-1'
                                    />
                                    <span className="text-base text-black font-medium">456 Community Center Dr., Seattle, WA 98109</span>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-3/4">
                            <div className="flex items-start gap-3">
                                <div className="text-3xl flex-shrink-0">📅</div>
                                <div>
                                    <p className="text-2xl font-bold text-text mb-3">
                                        Identity & Government Services
                                    </p>
                                    <p className="text-gray-700 text-md leading-relaxed mb-6">
                                        Schedule a consultation for services like passport help, notary services, or tutoring. Find a time that works for you
                                    </p>
                                    <Button >
                                        Make Appointment
                                        <span className="text-lg">›</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default GetHelpSection