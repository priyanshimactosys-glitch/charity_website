import Image from "next/image";
import NavMenu from "./NavMenu";
import { Globe, Droplet } from "lucide-react";
import Button from "../../common/Button";

export default function Header() {
    return (
        <nav className="py-3">
            <div className="">
                <div className="flex items-center justify-between h-20">
                    <div className="flex justify-between gap-10">
                        <Image
                            src="/images/logo.png"
                            alt="Veters Initiative Logo"
                            width={109}
                            height={70}
                            priority
                        />

                        <NavMenu />
                    </div>
                    <div className="flex items-center gap-6">

                        <button className="flex items-center gap-2 hover:text-red-600 font-semibold">
                            <Globe size={20} />
                            English
                        </button>
                        <button className="flex items-center gap-2 hover:text-red-600 font-semibold ">
                            Sign In
                        </button>
                        <div className="hidden sm:block w-0.5 h-6 bg-gray-700"></div>

                        <Button
                            variant="primary"
                            icon={
                                <img
                                    src="/images/drop.png"
                                    alt="Give"
                                    className="h-4 w-3   "
                                />
                            }
                        >
                            Give
                        </Button>


                    </div>

                </div>
            </div>
        </nav>
    );
}
