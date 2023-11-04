import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="bg-dark100 text-white py-4 w-full self-center max-w-full overflow-hidden px-5">
      <div className="lg:flex lg:items-center lg:justify-center">
        <b className="text-center w-full block">
          © Universidade Católica de Santos 2023
        </b>

        <div className="flex w-full items-center justify-center mt-4 lg:mt-0">
          <a
            href="https://www.linkedin.com/in/unisantos/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50 active:opacity-30 transition-all py-2 lg:py-0 px-4"
          >
            <LinkedinLogo size={26} weight="bold" />
          </a>
          <a
            href="https://www.facebook.com/catolicaunisantos/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50 active:opacity-30 transition-all py-2 lg:py-0 px-4"
          >
            <FacebookLogo size={26} weight="bold" />
          </a>
          <a
            href="https://x.com/unisantosweb?s=11"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50 active:opacity-30 transition-all py-2 lg:py-0 px-4"
          >
            <TwitterLogo size={26} weight="bold" />
          </a>
          <a
            href="https://www.instagram.com/catolicadesantos/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50 active:opacity-30 transition-all py-2 lg:py-0 px-4"
          >
            <InstagramLogo size={26} weight="bold" />
          </a>
        </div>
      </div>

      <p className="mt-4 text-center italic text-sm lg:mt-10">
        “The art of programming consists of organizing and mastering
        complexity.” Edsger W. Dijkstra
      </p>
    </footer>
  );
}
