import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <Container>
        {/* Hero Section */}
        <section className="mb-16">
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">About Us</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
              We are revolutionizing interview preparation. With personalized insights, AI-powered practice, and detailed feedback, we help candidates secure their dream jobs.
            </p>
            <Link to="/contact">
              <Button className="mt-6 text-white bg-primary hover:bg-primary/80 rounded-lg px-6 py-3 flex items-center justify-center space-x-2">
                <Sparkles className="text-lg" />
                <span>Get in Touch</span>
              </Button>
            </Link>
          </div>
        </section>

        {/* Our Story */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center justify-center text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-800">Our Story</h2>
            <p className="mt-4 text-muted-foreground text-base">
              We believe in the power of personalized interview preparation. With AI-powered tools and a commitment to excellence, we’re here to help job seekers stand out and excel.
            </p>
          </div>
          <div className="relative w-full h-72 md:h-[500px] rounded-xl overflow-hidden bg-gradient-to-r from-primary-500 to-primary-700">
            <img
              src="/assets/img/team.jpg"
              alt="Our Team"
              className="w-full h-full object-cover absolute inset-0 opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-semibold bg-black/40 p-4 rounded-md">
                Meet Our Team
              </h3>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our mission is simple: To empower job seekers by providing tools that help them practice, improve, and succeed in their interviews.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We envision a future where anyone, regardless of background or location, has access to the tools they need to succeed in their career journey.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Core Values */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Our Core Values</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe in honesty and transparency in everything we do, fostering trust with our users and partners.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Innovation drives our team. We constantly evolve to provide the most effective and cutting-edge solutions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Empathy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We understand the challenges faced by job seekers and offer a platform designed with their needs in mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-100 py-12 mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">What Our Users Say</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">"A Game Changer"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "I used this platform to prepare for my interviews and landed my dream job! The personalized feedback was exactly what I needed."
                </p>
                <div className="mt-4 text-sm text-muted-foreground">- John Doe, Software Engineer</div>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">"Highly Recommended"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "This is the best interview prep tool I’ve ever used! The AI-driven insights helped me ace my interviews."
                </p>
                <div className="mt-4 text-sm text-muted-foreground">- Jane Smith, Data Scientist</div>
              </CardContent>
            </Card>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default AboutPage;
