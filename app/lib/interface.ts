import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "@portabletext/types";

// For the Simple Blog Card interface
export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: SanityImageSource; // Proper type for Sanity image source
}

// For the Full Blog interface
export interface fullBlog {
  currentSlug: string;
  title: string;
  content: PortableTextBlock[]; // Using PortableTextBlock for content structure
  titleImage: SanityImageSource; // Proper type for the image
}
