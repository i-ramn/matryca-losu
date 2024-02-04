'use client';

import { FormattedMessage } from 'react-intl';

export const About = () => {
  return (
    <section id="about-section" className="container pt-9">
      <h2 className="mb-4 text-center uppercase md:mb-10 lg:text-left">
        <FormattedMessage id="home.about.title" />
      </h2>
      <article className="flex flex-col gap-5 text-left font-inder text-purple md:gap-10 lg:w-2/3">
        <p>
          <FormattedMessage id="home.about.description.p1" />
        </p>
        <p>
          <FormattedMessage id="home.about.description.p2" />
        </p>
        <p>
          <FormattedMessage id="home.about.description.p3" />
        </p>
        <p>
          <FormattedMessage id="home.about.description.p4" />
        </p>
      </article>
    </section>
  );
};
