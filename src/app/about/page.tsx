import Link from "next/link";
import {
  ArrowRight,
  ShoppingBag,
  CheckCircle2,
  Star,
  Users,
  BarChart,
  MessageCircle,
  Target,
  Rocket,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ServiceCard } from "@/components/common";
import { GetStarted } from "@/components/common";
import { NavHeaderMenus } from "@/components/layout";
import { FooterMenus } from "@/components/layout";
import { services } from "@/data/services";
import { Title } from "@/components/common";
import { CalCom } from "@/components/common";
import Image from "next/image";

import teamMeeting from "@/assets/images/general/team-meeting.jpg";

export default function AboutPage() {
  return (
    <>
      <Title />
      <div className="flex min-h-screen flex-col">
        <NavHeaderMenus />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-emerald-50 to-white">
            <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                    About Us
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Where Expertise Meets{" "}
                    <span className="text-emerald-600">Excellence</span>
                  </h1>
                  <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
                    Welcome to Shopify Support Pro, where exceptional customer
                    service meets expert technical solutions in the e-commerce
                    world. With 8+ years of experience, we take pride in being
                    Top-Rated Plus Freelancers on Upwork.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      <Link href="#services">
                        Our Services <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <a className="cursor-pointer">
                        <CalCom btnTitle="Contact Us" />
                      </a>
                    </Button>
                  </div>
                  <div className="flex items-center pt-4 space-x-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-5 w-5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm font-medium">
                      Top-Rated on{" "}
                      <Link
                        href="https://www.upwork.com/agencies/1751209110057144320/"
                        target="_blank"
                        className="text-emerald-600 font-bold tracking-tighter"
                      >
                        Upwork
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                    <Image
                      src={teamMeeting}
                      alt="Team Meeting"
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-4xl font-bold text-emerald-600">
                        8+
                      </span>
                      <span className="text-sm font-medium">
                        Years of
                        <br />
                        Experience
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-emerald-200">
                  <CardHeader>
                    <div className="p-2 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-2">
                      <Target className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-2xl">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We are committed to empowering e-commerce brands by
                      providing seamless Shopify support, exceptional customer
                      service, and strategic digital solutions that drive
                      growth, efficiency, and profitability.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-emerald-200">
                  <CardHeader>
                    <div className="p-2 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-2">
                      <Rocket className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-2xl">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      To become the leading Shopify support agency, setting new
                      standards in e-commerce assistance and helping businesses
                      scale effortlessly in the competitive digital space.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Team Overview */}
          <section className="w-full py-12 md:py-24 bg-emerald-50">
            <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                  Our Team
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  E-Commerce Experts at Your Service
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                  Our team of skilled Shopify experts and e-commerce
                  professionals is dedicated to helping online businesses thrive
                  by providing seamless support, expert store development, and
                  top-tier customer service solutions.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3 mt-8">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Users className="h-12 w-12 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold">Shopify Specialists</h3>
                  <p className="text-muted-foreground">
                    Expert developers and designers who specialize in Shopify
                    store optimization and customization.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center">
                    <MessageCircle className="h-12 w-12 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold">Customer Support Pros</h3>
                  <p className="text-muted-foreground">
                    Dedicated support specialists who provide exceptional
                    service through email, chat, and virtual assistance.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center">
                    <BarChart className="h-12 w-12 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold">Marketing Strategists</h3>
                  <p className="text-muted-foreground">
                    Growth-focused marketers who develop and implement
                    strategies to boost your e-commerce performance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                  Why Choose Us
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  What Sets Us Apart
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                  Our commitment to excellence and proven track record make us
                  the ideal partner for your e-commerce success.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-8">
                <div className="flex flex-col p-6 bg-white rounded-lg border shadow-sm">
                  <div className="p-2 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <ShoppingBag className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Proven Shopify Expertise
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We specialize in Shopify support, store optimization, and
                    custom solutions tailored to your needs.
                  </p>
                  <ul className="space-y-2 mt-auto">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <span>Store setup and optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <span>Theme customization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <span>Technical troubleshooting</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col p-6 bg-white rounded-lg border shadow-sm">
                  <div className="p-2 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Reliable Customer Support
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our highly skilled team provides outstanding email, chat,
                    and virtual assistance to enhance your customer experience.
                  </p>
                  <ul className="space-y-2 mt-auto">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <span>Professional communication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <span>Quick response times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <span>Customer satisfaction focus</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col p-6 bg-white rounded-lg border shadow-sm">
                  <div className="p-2 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Top-Rated Upwork Agency
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our track record of excellence has earned us a Top-Rated
                    Plus status, showcasing our reliability and expertise.
                  </p>
                  <ul className="space-y-2 mt-auto">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <span>Consistent 5-star reviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <span>Long-term client relationships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <span>Proven project success</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col p-6 bg-white rounded-lg border shadow-sm">
                  <div className="p-2 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <BarChart className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Comprehensive E-Commerce Solutions
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    From store management to marketing, we provide full-scale
                    e-commerce support.
                  </p>
                  <ul className="space-y-2 mt-auto">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <span>End-to-end store management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <span>Marketing and growth strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <span>Content creation and design</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section
            id="services"
            className="w-full py-12 md:py-24 bg-emerald-50"
          >
            <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                  Our Services
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Comprehensive E-Commerce Solutions
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                  From store development to customer support, we offer a full
                  range of services to help your e-commerce business thrive.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                {services.map((service) => {
                  return (
                    <ServiceCard
                      key={service.title}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                    />
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <GetStarted
                  title={"Ready to Take Your Shopify Store to the Next Level?"}
                  description={
                    "Contact us today for expert e-commerce support and watch your business grow."
                  }
                  scheduleBtnText={"Schedule a Consultation"}
                  hasViewOurServices={false}
                  hasEmailUs={false}
                />
              </div>
            </div>
          </section>
        </main>
        <FooterMenus />
      </div>
    </>
  );
}
