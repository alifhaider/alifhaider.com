import type { MetaFunction } from "@remix-run/node";
import Github from "~/assets/icons/Github";
import Twitter from "~/assets/icons/Twitter";

export const meta: MetaFunction = () => {
  return [
    { title: "Alif | Home" },
    { name: "description", content: "A Software Engineer" },
  ];
};

export default function Index() {
  return (
    <div className="max-w-5xl mx-auto border-t border-text">
      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-wide">
          Hey, I&apos;m Alif Haider.
        </h2>
        <p className="mt-4">
          I am a software engineer. I have completed my graduation with Computer
          Science and Engineering from North South University. <br /> I am
          building web applications for over two years. I am also a tech
          enthusiast and I love to learn new technologies. I am always open to
          new opportunities and challenges. <br />
          Feel free to reach out to me.
        </p>

        <div className="mt-2 flex gap-4">
          <IconButton href="https://twitter.com/haider_alif">
            <Twitter />
          </IconButton>
          <IconButton href="https://github.com/alifhaider">
            <Github />
          </IconButton>
        </div>
      </section>
    </div>
  );
}

function IconButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
