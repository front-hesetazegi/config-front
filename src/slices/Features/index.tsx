import { Heading } from "components/Heading";
import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Link from "next/link";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h1" size="lg">
      {children}
    </Heading>
  ),
};

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      
      {/* <Heading as="h1" size="lg"  > */}
      <PrismicRichText components={components} field={slice.primary.heading} />
      {/* </Heading> */}
      <Heading as="h3" size="lg">
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading1: ({ children }) => (
              <span className="font-body">{children}</span>
            ),
          }}
        />
      </Heading>
      {/* <div className="flex flex-col gap-5">
        {slice.items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 bg-slate-500 max-w-fit"
          >
            <PrismicRichText field={item.title} />
            <PrismicRichText field={item.description} />
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Features;
