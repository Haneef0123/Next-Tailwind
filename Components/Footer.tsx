import type { FC } from "react";
import Container from "./Container";
import Link from "next/link";
import Logo from "./Icons/Logo";
import { TwitterIcon } from "./Icons/Twitter";
import { GithubIcon } from "./Icons/Github";
import { SlackIcon } from "./Icons/Slack";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Docs", href: "#" },
      { title: "Linear Method", href: "#" },
      { title: "Download", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Brand", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
      { title: "DPA", href: "#" },
      { title: "Terms of service", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "GitHub", href: "#" },
    ],
  },
];

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className=" border-t border-transparent-white py-14 mt-12 text-sm">
      <Container className=" flex flex-col md:flex-row justify-between">
        <div className="flex flex-row md:flex-col justify-between">
          <div className=" text-grey flex items-center">
            <Logo className="mr-4 h-4 w-4" /> Linear - Designed Worldwide
          </div>
          <div className=" mt-auto flex space-x-4 text-grey">
            <TwitterIcon />
            <GithubIcon />
            <SlackIcon />
          </div>
        </div>
        <div className=" flex flex-wrap">
          {footerLinks.map((column) => {
            return (
              <div className=" min-w-[50%] md:min-w-[18rem] mt-10 md:mt-0">
                <h3 className=" font-medium mb-3">{column.title}</h3>
                <ul>
                  {column.links.map((link) => (
                    <li className="[&_a]:last:mb-0">
                      <Link
                        className=" text-grey mb-3 block hover:text-off-white transition-colors"
                        href={link.href}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
