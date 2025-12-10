import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-pink-50 via-white to-pink-50">
      <div className="container mx-auto py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-3">
            <div className="space-y-1">
              <Image
                src={"/footer-logo.png"}
                width={175}
                height={60}
                className=" object-cover "
                alt="footer logo"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Get In Touch</h4>
            <div className="space-y-2 text-sm text-gray-600 inline-flex flex-col">
              <a href="tell:3202501317" className="inline">
                <span className="font-medium">Phone:</span> 320-250-1317
              </a>
              <a href="mailto:lindy@centralmnrealty.com" className="inline">
                <span className="font-medium">Email:</span>{" "}
                lindy@centralmnrealty.com
              </a>
              <p>
                <span className="font-medium">Office:</span> 80 37th Ave S #200,
                St. Cloud, MN 56301
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4 md:text-end">
            <div className="flex gap-4 md:justify-end">
              <a
                href="https://www.facebook.com/p/Lindy-Hennen-Central-MN-Realty-61566614890390"
                target="_blank"
                aria-label="Globe"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/lindyhennen/?hl=en"
                target="_blank"
                aria-label="Globe"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                <Instagram />
              </a>
              <a
                href="https://www.zillow.com/profile/Lindy%20Hennen"
                target="_blank"
                aria-label="LinkedIn"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                <Image
                  src="/zillow.png"
                  width={25}
                  height={25}
                  alt="Zillow"
                  className="saturate-0 hover:saturate-100 duration-300"
                />
              </a>
              <a
                href="https://www.realtor.com/realestateagents/669fde267a0551d13088d374"
                target="_blank"
                aria-label="LinkedIn"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                <Image
                  src="/realtor.png"
                  width={25}
                  height={25}
                  alt="Realtor"
                  className="saturate-0 hover:saturate-100 duration-300"
                />
              </a>
              <a
                href="https://www.homes.com/real-estate-agents/lindy-hennen/mfp63hj"
                target="_blank"
                aria-label="LinkedIn"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                <Image
                  src="/homes.png"
                  width={25}
                  height={25}
                  alt="Homes"
                  className="saturate-0 hover:saturate-100 duration-300"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-pink-200 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} - Central MN Realty. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
