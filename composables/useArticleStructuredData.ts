import { articleStructuredDataConfig } from './useArticleStructuredDataConfig'
import type { Article } from '../components/types/Article';

// --- Custom Error ---
class ArticleNotFoundError extends Error {
  constructor(path: string) {
    super(`記事が見つかりませんでした: ${path}`);
    this.name = 'ArticleNotFoundError';
  }
}

// --- Type Definitions ---

/**
 * Configuration options for the structured data composable.
 */
interface StructuredDataConfig {
  authorName: string;
  publisherName: string;
  publisherLogoUrl: string;
  siteUrl: string;
}

/**
 * Represents the structure for Schema.org Person or Organization.
 */
interface SchemaPersonOrOrganization {
  '@type': 'Person' | 'Organization';
  name: string;
}

/**
 * Represents the structure for Schema.org ImageObject.
 */
interface SchemaImageObject {
  '@type': 'ImageObject';
  url: string;
}

/**
 * Represents the structure for Schema.org WebPage.
 */
interface SchemaWebPage {
  '@type': 'WebPage';
  '@id': string;
}

/**
 * Represents the structure for Schema.org Article.
 * Based on https://schema.org/Article
 */
interface SchemaArticle {
  '@context': 'https://schema.org';
  '@type': 'Article';
  mainEntityOfPage: SchemaWebPage;
  headline: string;
  description?: string; // Optional but recommended
  image: string | SchemaImageObject | string[]; // Can be URL, ImageObject, or array of URLs
  datePublished?: string; // ISO 8601 format
  dateModified?: string;  // ISO 8601 format
  author: SchemaPersonOrOrganization;
  publisher: {
    '@type': 'Organization';
    name: string;
    logo: SchemaImageObject;
  };
}

// --- Composable Implementation ---

export const useArticleStructuredData = (
  config: StructuredDataConfig = articleStructuredDataConfig.common,
  article: Article
): void => {
  const route = useRoute()

  if (!article) {
    throw new ArticleNotFoundError(route.fullPath)
  }

  // Determine image URL with fallback
  const imageUrl = article.cover
    ? `${config.siteUrl}${article.cover.startsWith('/') ? '' : '/'}${article.cover}`
    : articleStructuredDataConfig.layouts[
        route.path.includes('/tech/') ? 'tech' : 'default'
      ].fallbackImageUrl

  // Prepare JSON-LD structured data object adhering to SchemaArticle type
  const jsonLd: SchemaArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${config.siteUrl}${route.path}`,
    },
    headline: article.title || '記事タイトル', // Provide a sensible fallback
    description: article.description || undefined, // Use undefined if not present
    image: imageUrl, // Normalized image URL
    datePublished: article.createDate ? new Date(article.createDate).toISOString() : undefined,
    dateModified: article.updated ? new Date(article.updated).toISOString() : undefined,
    author: {
      '@type': 'Person', // Assuming Person, could be configurable
      name: config.authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: config.publisherName,
      logo: {
        '@type': 'ImageObject',
        url: config.publisherLogoUrl,
      },
    },
  }

  useHead({
    // Add JSON-LD script
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(jsonLd, null, 2),
      },
    ],
  })
}
