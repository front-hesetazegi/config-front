import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={slice.variation === "anotherModel" ? "flex" : "block"}
    >
      <PrismicRichText
        components={{
          heading1: ({ children }) => (
            <h1 className="text-black text-7xl rtl:bg-green-600 ltr:bg-redAlert-800 ms-10">
              {children}
            </h1>
          ),
        }}
        field={slice.primary.heading}
      />
      <PrismicRichText
        components={{
          paragraph: ({ children }) => (
            <h1 className="text-black text-xl">{children}</h1>
          ),
        }}
        field={slice.primary.body}
      />
      <PrismicNextLink
        style={{ color: "black" }}
        field={slice.primary.button_link}
      >
        <button className="border p-3 shadow-lg">
          {slice.primary.button_text}
        </button>
      </PrismicNextLink>

      <div
        style={{
          margin: "45px",
          overflow: "hidden", // This will hide any overflow content
          boxSizing: "border-box",
        }}
      >
        <PrismicNextImage
          alt=""
          style={{ width: "500px", display: "block" }}
          field={slice.primary.image}
        />
      </div>
    </section>
  );
};

export default Hero;
