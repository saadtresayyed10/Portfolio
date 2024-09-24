import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "@portabletext/types";

// For the Simple Blog Card interface
export interface SimpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: SanityImageSource; // Proper type for Sanity image source
}

// For the Full Blog interface
export interface FullBlog {
  currentSlug: string;
  title: string;
  content: PortableTextBlock[]; // Using PortableTextBlock for content structure
  titleImage: SanityImageSource; // Proper type for the image
}
