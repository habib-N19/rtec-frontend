import { MessageSquare } from "lucide-react";
import { Button } from "./button";

export function HeroSection() {
    return (
        <section className="relative min-h-[80vh] w-full">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="relative h-full w-full">
                    {/* Add your hero image here */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-[#272727]/0" />
                </div>
            </div>

            {/* Content */}
            <div className="container relative z-10 mx-auto flex min-h-[80vh] max-w-[895px] flex-col justify-center px-4">
                <div className="space-y-6">
                    <h1 className="font-poppins text-5xl font-bold leading-tight text-white md:text-6xl">
                        Welcome to Rangpur Textile Engineering College
                    </h1>
                    <p className="text-base text-white/90">
                        Lorem Ipsum is placeholder text commonly used in design and development to mimic natural language content. It helps designers focus on layout.
                    </p>
                    <Button className="bg-[#133C69] px-10 py-4 text-lg hover:bg-[#133C69]/90">
                        About us
                    </Button>
                </div>

                {/* Floating info card */}
                <div className="absolute -bottom-16 right-4 max-w-xs rounded-lg bg-white p-6 shadow-lg">
                    <p className="text-right text-slate-800">
                        Lorem Ipsum is placeholder text commonly used in design and development to mimic natural language content.
                    </p>
                </div>

                {/* Chat button */}
                <div className="absolute bottom-8 left-4">
                    <Button size="icon" className="h-16 w-16 rounded-full bg-[#194F8A] hover:bg-[#194F8A]/90">
                        <MessageSquare className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </section>
    );
}