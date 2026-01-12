import React, { useState } from 'react';
import { ToolMeta } from '../types/tools';
import { SEO } from './SEO';
import { Copy, RefreshCw, Download, Check } from 'lucide-react';
import clsx from 'clsx';

interface ToolLayoutProps {
    tool: ToolMeta;
    children: React.ReactNode;
    initialValue?: string; // For tools that have inputs
    onCopy?: () => void;
    onClear?: () => void;
    actions?: React.ReactNode;
}

export function ToolLayout({ tool, children, actions }: ToolLayoutProps) {
    // Generate Schema.org data
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": tool.name,
        "description": tool.description,
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Any",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <SEO
                title={`${tool.name} - Free Online Tool | UltraTools`}
                description={tool.metaDescription || tool.description}
                keywords={tool.keywords}
                type="WebApplication"
                schema={schema}
            />

            <div className="mb-8">
                <nav className="text-sm font-medium text-gray-500 mb-4">
                    <a href="/" className="hover:text-primary-600">Home</a>
                    <span className="mx-2">/</span>
                    <a href={`/tools/${tool.category}`} className="hover:text-primary-600 capitalize">{tool.category} Tools</a>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900">{tool.name}</span>
                </nav>

                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-3">
                    {tool.name}
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl">
                    {tool.description}
                </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-12">
                <div className="p-6 sm:p-8">
                    {children}

                    {actions && (
                        <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-end gap-3">
                            {actions}
                        </div>
                    )}
                </div>
            </div>

            {/* SEO Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <section className="prose prose-blue max-w-none bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                        <h2>How to use {tool.name}</h2>
                        <ol>
                            <li>Enter your data in the input field above.</li>
                            <li>Wait for the tool to process immediately or click the action button.</li>
                            <li>View your result in the output field.</li>
                            <li>Copy the result to your clipboard or download it.</li>
                        </ol>

                        <h2>Features of this tool</h2>
                        <ul>
                            <li><strong>Fast & Secure:</strong> All processing happens in your browser. No data is sent to our servers.</li>
                            <li><strong>Free:</strong> Unlimited usage with no hidden fees.</li>
                            <li><strong>Mobile Friendly:</strong> Works perfectly on phones and tablets.</li>
                        </ul>

                        {tool.faqs && tool.faqs.length > 0 && (
                            <>
                                <h2>Frequently Asked Questions</h2>
                                {tool.faqs.map((faq, i) => (
                                    <div key={i} className="mb-4">
                                        <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </>
                        )}
                    </section>
                </div>

                <div className="space-y-6">
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Tools</h3>
                        <ul className="space-y-3">
                            {/* Placeholder for related tools logic */}
                            <li><a href="#" className="text-primary-600 hover:text-primary-700 hover:underline">Related Tool 1</a></li>
                            <li><a href="#" className="text-primary-600 hover:text-primary-700 hover:underline">Related Tool 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
