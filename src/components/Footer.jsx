import { Linkedin, Github, Globe } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-brown-200 px-[16px] py-[40px] md:px-[120px] md:py-[60px]">
      <div className="flex flex-col justify-center items-center gap-[16px] md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-[16px]">
          <span className="text-body-1 text-brown-500">Get in touch</span>

          <div className="flex items-center gap-[12px]">
            <a className="text-brown-500 hover:text-brown-600 transition">
              <Linkedin
                className="w-[24px] text-brown-200 bg-brown-600 rounded-full"
                fill="currentColor"
              />
            </a>
            <a className="text-brown-500 hover:text-brown-600 transition">
              <Github
                className="w-[24px] text-brown-200 bg-brown-600 rounded-full"
                fill="currentColor"
              />
            </a>
          </div>
        </div>
        <a
          href="/"
          className="text-body-1 text-brown-500 hover:text-brown-600 transition underline"
        >
          Home page
        </a>
      </div>
    </footer>
  );
}

export default Footer;
