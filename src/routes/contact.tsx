import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);

 

  return (
    <div className="flex-col w-full pb-24">
      <Container>
        <div className="my-8 text-center md:text-left">
          <h2 className="text-3xl md:text-6xl font-extrabold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-4 text-muted-foreground text-sm md:text-base">
            Have a question? Reach out to us below and we’ll get back shortly.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          <div className="flex items-start gap-4">
            <Mail className="text-primary" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-muted-foreground text-sm">aginaemmanuel44@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="text-primary" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-muted-foreground text-sm">+234 891 320 62212</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="text-primary" />
            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-muted-foreground text-sm">Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          action="https://formspree.io/f/xjkwygbv"
          method="POST"
          encType="multipart/form-data"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            rows={6}
            placeholder="Your Message"
            required
            className="md:col-span-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          ></textarea>

          {/* File Upload */}
          <input
            type="file"
            name="attachment"
            className="md:col-span-2"
          />

          <div className="md:col-span-2 text-center md:text-left">
            <Button
              type="submit"
              className="w-full md:w-auto"
            >
              Send Message
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default ContactPage;
