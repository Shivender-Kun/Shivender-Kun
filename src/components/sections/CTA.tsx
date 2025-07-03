import { Button } from "../ui/button";
import { Section } from "../layout";

const CTA = () => {
  return (
    <Section fullHeight={false} title="Contact Me">
      <div className="text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-semibold">
          Let’s build something amazing together
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          I’m open to full-time, freelance, or remote collaboration.
        </p>
        <Button variant="outline" asChild>
          <a href="mailto:shivenderkumar761@gmail.com">Start a conversation</a>
        </Button>
      </div>
    </Section>
  );
};

export default CTA;
