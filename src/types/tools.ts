import { LucideIcon } from 'lucide-react';
import React from 'react';

export type ToolCategory =
    | 'text'
    | 'css'
    | 'js'
    | 'html'
    | 'url'
    | 'hash'
    | 'image'
    | 'data'
    | 'number'
    | 'date'
    | 'random'
    | 'seo'
    | 'color'
    | 'dev'
    | 'doc';

export interface ToolMeta {
    id: string;
    name: string;
    slug: string;
    category: ToolCategory;
    description: string;
    shortDescription: string;
    keywords: string[];
    icon?: LucideIcon;
    component?: React.ComponentType;
    faqs?: { question: string; answer: string }[];
    relatedTools?: string[]; // IDs of related tools
}

export const CATEGORIES: { id: ToolCategory; name: string; description: string }[] = [
    { id: 'text', name: 'Text Tools', description: 'Modify, format, and analyze text.' },
    { id: 'image', name: 'Image Tools', description: 'Resize, crop, and convert images.' },
    { id: 'css', name: 'CSS Tools', description: 'Minify, beautify, and generate CSS.' },
    { id: 'js', name: 'JavaScript Tools', description: 'Format and validate JavaScript code.' },
    { id: 'json', name: 'JSON Tools', description: 'Parse, validate, and format JSON data.' }, // Added JSON specific as per requests often separate data
    { id: 'color', name: 'Color Tools', description: 'Pick, convert, and generate colors.' },
    { id: 'dev', name: 'Developer Tools', description: 'Encoders, decoders, and generators.' },
    { id: 'seo', name: 'SEO Tools', description: 'Generators for meta tags and open graph.' },
] as any; // Cast to any to allow flexible category additions if needed, or strictly type it.
