import React, { ComponentType } from "react";

import dynamic from "next/dynamic";
import { Section } from "@kickstartds/base/lib/section";

export const DynamicComponent: React.FC<any> = (props) => {
  const modelName = props.type as string;
  if (!modelName) {
    throw new Error(
      `Object does not have a 'type' property: ${JSON.stringify(
        props,
        null,
        2
      )}`
    );
  }

  const Component = components[modelName] as ComponentType;
  if (!Component) {
    throw new Error(`No component matches type: '${modelName}'`);
  }

  return <Component {...props} />;
};

export const components: Record<string, any> = {
  "blog-teaser": dynamic(() =>
    import("@kickstartds/ds-agency/blog-teaser").then(
      (mod) => mod.BlogTeaserContextDefault
    )
  ),
  "blog-aside": dynamic(() =>
    import("@kickstartds/ds-agency/blog-aside").then(
      (mod) => mod.BlogAsideContextDefault
    )
  ),
  "blog-head": dynamic(() =>
    import("@kickstartds/ds-agency/blog-head").then(
      (mod) => mod.BlogHeadContextDefault
    )
  ),
  section: Section,
  cta: dynamic(() =>
    import("@kickstartds/ds-agency/cta").then((mod) => mod.CtaContextDefault)
  ),
  faq: dynamic(() =>
    import("@kickstartds/ds-agency/faq").then((mod) => mod.FaqContextDefault)
  ),
  features: dynamic(() =>
    import("@kickstartds/ds-agency/features").then(
      (mod) => mod.FeaturesContextDefault
    )
  ),
  feature: dynamic(() =>
    import("@kickstartds/ds-agency/feature").then(
      (mod) => mod.FeatureContextDefault
    )
  ),
  gallery: dynamic(() =>
    import("@kickstartds/ds-agency/gallery").then(
      (mod) => mod.GalleryContextDefault
    )
  ),
  headline: dynamic(() =>
    import("@kickstartds/ds-agency/headline").then((mod) => mod.Headline)
  ),
  split: dynamic(() =>
    import("@kickstartds/ds-agency/split").then((mod) => mod.Split)
  ),
  stats: dynamic(() =>
    import("@kickstartds/ds-agency/stats").then(
      (mod) => mod.StatsContextDefault
    )
  ),
  stat: dynamic(() =>
    import("@kickstartds/ds-agency/stat").then((mod) => mod.StatContextDefault)
  ),
  "teaser-card": dynamic(() =>
    import("@kickstartds/ds-agency/teaser-card").then((mod) => mod.TeaserCard)
  ),
  testimonials: dynamic(() =>
    import("@kickstartds/ds-agency/testimonials").then(
      (mod) => mod.Testimonials
    )
  ),
  testimonial: dynamic(() =>
    import("@kickstartds/ds-agency/testimonial").then(
      (mod) => mod.TestimonialContextDefault
    )
  ),
  text: dynamic(() =>
    import("@kickstartds/ds-agency/text").then((mod) => mod.TextContextDefault)
  ),
  "image-text": dynamic(() =>
    import("@kickstartds/ds-agency/image-text").then(
      (mod) => mod.ImageTextContextDefault
    )
  ),
  logos: dynamic(() =>
    import("@kickstartds/ds-agency/logos").then(
      (mod) => mod.LogosContextDefault
    )
  ),
  logo: dynamic(() =>
    import("@kickstartds/ds-agency/logo").then((mod) => mod.LogoContextDefault)
  ),
};
