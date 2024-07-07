import Container from "@/components/layout/shared/Container";
import about from "@/assets/hero-about.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-slate-200">
      <div className="relative">
        <img src={about} alt="" className="h-[750px] w-full object-cover" />
        <div className="h-[750px] w-full absolute top-0 bg-slate-500 bg-opacity-45"></div>
        <Container>
          <div className="bg-gray-100 w-[450px] h-[550px] p-16 rounded-md absolute top-[3%] right-[15%]">
            <h1 className="text-5xl font-bold ">
              Individually, we are one drop.
            </h1>
            <h1 className="text-5xl font-bold mt-5">Together, we are ocean</h1>
            <p className="mt-5 text-zinc-600">
              Earl belive care is a right, diversity is a strength, the economy
              should work for everyone, and facts and truth matter.
            </p>
            <Link to="/donations">
              <Button
                variant="outline"
                className="border border-red-600 mt-5 text-red-600 text-lg font-semibold rounded-sm h-[60px]"
              >
                Help our community
              </Button>
            </Link>
          </div>
          <div className="flex">
            <div className="mr-16 pt-32">
              <h1 className="text-5xl font-bold">Together we can</h1>
              <h1 className="text-5xl font-bold text-blue-600 mt-5">
                do so much
              </h1>
              <p className="mt-4">
                Remember, teamwork beings by building trust. and only the way to
                do that is to overcome our need for invulnerability
              </p>
              <Link to="/members">
                <Button className="text-lg font-semibold bg-blue-600 rounded-sm mt-5 h-[60px] w-[180px]">
                  Our Team
                </Button>
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551731409-43eb3e517a1a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-[1025px] h-[600px] object-cover"
              />
            </div>
          </div>
          <div className="flex">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560439513-74b037a25d84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-[1255px] h-[600px] object-cover"
              />
            </div>
            <div className="ml-16 pt-32">
              <h1 className="text-5xl font-bold">
                Focus on <span className="text-red-700">being</span>
              </h1>
              <h1 className="text-red-700 font-bold text-5xl mt-3">
                productive
              </h1>
              <h1 className="text-5xl font-bold mt-3">instead of busy</h1>
              <p className="mt-5 text-zinc-500">
                No matter how great the talent or efforts, some things just take
                time. You can't produce a baby in one month by getting women
                pregnant.
              </p>
              <Button className="text-lg font-semibold bg-red-700 rounded-sm mt-5 h-[60px] w-[180px]">
                Join with us
              </Button>
            </div>
          </div>
          <div>
            <h1 className="mt-20 text-5xl font-bold text-center">
              Rebuild Rising vision
            </h1>
            <div className="text-lg text-zinc-600">
              <p className="mt-8 ">
                At Rebuild Rising, our vision is to create a world where every
                community and individual has the resources and support they need
                to overcome challenges and thrive. We aim to build a global
                network of compassionate donors and resilient recipients, united
                by a shared commitment to fostering sustainable growth,
                development, and empowerment.
              </p>
              <p className="font-semibold mt-10">Our vision encompasses</p>
              <p className="mt-7">
                <span className=" font-semibold">
                  Empowerment Through Support :
                </span>
                <span className="ml-2">
                  Providing the necessary tools, resources, and funds to help
                  individuals and communities rebuild and flourish.
                </span>
              </p>
              <p className="mt-7">
                <span className=" font-semibold">Global Impact:</span>
                <span className="ml-2">
                  Expanding our reach to address diverse needs across the world,
                  making a positive impact on both local and international
                  levels.
                </span>
              </p>
              <p className="mt-7">
                <span className=" font-semibold">Sustainable Solutions:</span>
                <span className="ml-2">
                  Fostering long-term, sustainable development projects that
                  create lasting change and improve quality of life.
                </span>
              </p>
              <p className="mt-7">
                <span className=" font-semibold">Community Building:</span>
                <span className="ml-2">
                  Strengthening the bonds within and between communities,
                  fostering a sense of unity and shared purpose.
                </span>
              </p>
              <p className="mt-7">
                <span className=" font-semibold">Innovative Philanthropy:</span>
                <span className="ml-2">
                  Leveraging technology and innovative approaches to maximize
                  the efficiency, transparency, and impact of every donation.
                </span>
              </p>
              <p className="mt-7">
                Together, we envision a future where generosity knows no bounds,
                where every act of giving contributes to a brighter, more
                resilient world. We see a future where the spirit of giving
                transcends geographical boundaries and cultural differences,
                uniting people from all walks of life in a shared mission of
                compassion and solidarity. In this future, every individual has
                the opportunity to rise above their circumstances, empowered by
                the collective support of a global community dedicated to making
                a difference. At Rebuild Rising, we are committed to turning
                this vision into reality, one donation at a time, and building a
                legacy of hope and resilience for generations to come.
              </p>
            </div>
          </div>
          <div className="mt-16 text-lg text-zinc-600">
            <h1 className="text-center font-bold text-5xl text-black">
              Privacy Policy
            </h1>
            <p className="mt-10">
              Welcome to Rebuild Rising! Your privacy is important to us. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website and use our
              services. We collect personal data such as your name, email
              address, and payment information, as well as usage data including
              your IP address and browser type. We use this information to
              provide and improve our services, process donations, and
              communicate with you. We may share your information with service
              providers, for legal obligations, or in business transfers. We
              implement measures to protect your data but note that no method is
              entirely secure. You have rights to access, correct, or delete
              your data and can opt out of marketing communications. We may
              update this policy, and changes will be posted with an updated
              effective date. For any inquiries, please contact us at
              rebuildrising@gmail.com.
            </p>
          </div>
          <div className="mt-16 text-lg text-zinc-600 pb-20">
            <h1 className="text-center font-bold text-5xl text-black">
              Terms of Use
            </h1>
            <p className="mt-10">
              By accessing or using our website and services, you agree to be
              bound by these Terms of Use. You must be at least 18 years old to
              use our services, and you are responsible for maintaining the
              confidentiality of your account information. Donations are
              processed through third-party payment processors and are generally
              non-refundable. All content on our site is protected by copyright
              and other intellectual property laws. Our services are provided
              "as is" without any warranties, and we are not liable for any
              indirect or consequential damages.For any inquiries, please
              contact us at rebuildrising@gmail.com.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About;
