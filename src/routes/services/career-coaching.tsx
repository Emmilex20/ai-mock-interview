import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Sparkles } from "lucide-react";

const CareerCoaching = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Personalized Career Coaching
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Unlock your full potential with strategic career guidance tailored to your aspirations. Whether you're switching industries or climbing the ladder, we're here to guide every step of the way.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800">
                  What You’ll Gain from Career Coaching
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-base leading-relaxed">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-blue-500 mt-1" />
                  <span>Clarity in your career direction, strengths, and long-term goals.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-blue-500 mt-1" />
                  <span>Custom strategies for advancing, pivoting, or launching your career.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-blue-500 mt-1" />
                  <span>Expert advice on networking, personal branding, and visibility.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-blue-500 mt-1" />
                  <span>Ongoing accountability to ensure consistent progress.</span>
                </div>
              </CardContent>
            </Card>

            <div>
              <Link to="/contact">
                <Button className="bg-primary text-white hover:bg-primary/90 px-6 py-3 mt-4 text-lg rounded-lg">
                  <Sparkles className="mr-2" />
                  Schedule Your Discovery Call
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/assets/img/career-coach.jpeg"
              alt="Career Coaching"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Our Coaching Framework */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Coaching Framework</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our coaching programs are structured yet flexible, built to suit your needs whether you're early in your career or at a leadership level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">1. Career Discovery</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Understand your values, strengths, and interests to shape a fulfilling path.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">2. Strategy & Growth</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Build a personalized career roadmap with short- and long-term goals, skill upgrades, and milestones.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">3. Execution & Support</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Receive continuous guidance, accountability, and tools to overcome barriers and stay motivated.
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold mb-4">Let’s Build the Career You Deserve</h3>
          <p className="text-muted-foreground mb-6">
            Your career is too important to leave to chance. Let’s work together to shape a path with clarity and confidence.
          </p>
          <Link to="/contact">
            <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3 text-lg rounded-lg">
              Get Started with Coaching
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareerCoaching;
