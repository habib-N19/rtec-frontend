import { Button } from "@/components/ui/button";
import { HeroSection } from "@/features/hero/hero-section";
import { Section } from "@/features/common/section";
import { SectionTitle } from "@/features/common/section-title";
import { Card } from "@/components/ui/card";
import { ActivityCard } from "@/features/activities/activity-card";
import { FAQSection } from "@/features/faq/faq-section";


export default function RCCPage() {
    return (
        <main className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <HeroSection
                title={
                    <>
                        Welcome to
                        <br />
                        <span className="text-primary font-bold">Robotics & Computing Club</span>
                    </>
                }
                description="Empowering Students in Robotics, Programming, and Innovation through hands-on learning and exciting projects"
                action={{
                    label: "Join Now",
                    href: "#join",
                }}
                infoCards={[
                    {
                        title: "50+",
                        description: "Active Members"
                    },
                    {
                        title: "20+",
                        description: "Projects Completed"
                    },
                    {
                        title: "15+",
                        description: "Awards Won"
                    }
                ]}
                backgroundImage="/images/clubs/rcc-hero.jpg"
                className="bg-gradient-to-r from-slate-900/90 to-slate-800/90"
            />

            {/* Why Join Section */}
            <Section className="bg-muted/50">
                <SectionTitle
                    title="Why Join RCC"
                    description="Join the Robotics & Computing Club to explore the future of technology"
                    className="text-center max-w-2xl mx-auto mb-16"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="p-6 space-y-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="text-primary text-2xl">🤖</span>
                        </div>
                        <h3 className="text-xl font-semibold">Skill Building</h3>
                        <p className="text-muted-foreground">
                            Learn robotics, programming, and problem-solving skills through hands-on projects and workshops.
                        </p>
                    </Card>
                    <Card className="p-6 space-y-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="text-primary text-2xl">🔗</span>
                        </div>
                        <h3 className="text-xl font-semibold">Networking</h3>
                        <p className="text-muted-foreground">
                            Connect with like-minded peers and industry professionals in the tech field.
                        </p>
                    </Card>
                    <Card className="p-6 space-y-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="text-primary text-2xl">🚀</span>
                        </div>
                        <h3 className="text-xl font-semibold">Innovation</h3>
                        <p className="text-muted-foreground">
                            Work on cutting-edge projects and participate in robotics competitions.
                        </p>
                    </Card>
                </div>
            </Section>

            {/* Recent Activities */}
            <Section>
                <SectionTitle
                    title="Recent Activities"
                    description="Check out our latest workshops, competitions, and projects"
                    className="text-center max-w-2xl mx-auto mb-16"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ActivityCard
                        title="Robotics Workshop"
                        date="April 10, 2025"
                        description="Hands-on workshop on building and programming autonomous robots"
                        image="/images/robotics-workshop.jpg"
                    />
                    <ActivityCard
                        title="Coding Competition"
                        date="March 15, 2025"
                        description="Annual coding competition with exciting challenges and prizes"
                        image="/images/coding-competition.jpg"
                    />
                    <ActivityCard
                        title="Tech Talk"
                        date="February 28, 2025"
                        description="Industry experts sharing insights on AI and robotics"
                        image="/images/tech-talk.jpg"
                    />
                </div>
            </Section>

            {/* FAQ Section */}
            <Section className="bg-muted/50">
                <SectionTitle
                    title="Frequently Asked Questions"
                    description="Find answers to common questions about RCC"
                    className="text-center max-w-2xl mx-auto mb-16"
                />
                <div className="max-w-3xl mx-auto">
                    <FAQSection
                        title="Frequently Asked Questions"
                        description="Find answers to common questions about RCC"
                        faqs={[
                            {
                                question: "How can I join RCC?",
                                answer: "You can join RCC by filling out the membership form and attending our next orientation session."
                            },
                            {
                                question: "What activities do you organize?",
                                answer: "We organize workshops, coding competitions, robotics projects, tech talks, and industry visits."
                            },
                            {
                                question: "Do I need prior experience?",
                                answer: "No prior experience is required! We welcome members of all skill levels and provide training."
                            }
                        ]}
                    />
                </div>
            </Section>

            {/* Contact Section */}
            <Section>
                <SectionTitle
                    title="Get in Touch"
                    description="Have questions? Reach out to us!"
                    className="text-center max-w-2xl mx-auto mb-16"
                />
                <div className="max-w-xl mx-auto">
                    <Card className="p-6">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Name</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded-md"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    className="w-full p-2 border rounded-md"
                                    placeholder="Your email"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message</label>
                                <textarea
                                    className="w-full p-2 border rounded-md"
                                    rows={4}
                                    placeholder="Your message"
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </Card>
                </div>
            </Section>
        </main>
    );
}