import React from 'react';
import { Menu, Search, Github, Moon, Sun, X } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export function AppShell() {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const location = useLocation();

    // Close sidebar on route change
    React.useEffect(() => {
        setSidebarOpen(false);
    }, [location]);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <button
                                    type="button"
                                    className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden"
                                    onClick={() => setSidebarOpen(true)}
                                >
                                    <Menu className="h-6 w-6" />
                                </button>
                                <Link to="/" className="flex items-center pl-4 lg:pl-0 gap-2">
                                    <div className="h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-xl">U</span>
                                    </div>
                                    <span className="font-bold text-xl tracking-tight text-gray-900">UltraTools</span>
                                </Link>
                            </div>

                            <div className="hidden lg:ml-8 lg:flex lg:space-x-8">
                                <Link to="/" className="inline-flex items-center px-1 pt-1 border-b-2 border-primary-500 text-sm font-medium text-gray-900">
                                    All Tools
                                </Link>
                                <Link to="/categories" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                                    Categories
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="hidden md:flex relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition-colors"
                                    placeholder="Search 150+ tools..."
                                />
                            </div>
                            <button className="p-2 text-gray-400 hover:text-gray-500">
                                <Github className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-50 flex lg:hidden">
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
                    <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                            <button
                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={() => setSidebarOpen(false)}
                            >
                                <X className="h-6 w-6 text-white" />
                            </button>
                        </div>
                        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                            <div className="flex-shrink-0 flex items-center px-4 mb-5">
                                <span className="font-bold text-xl">UltraTools</span>
                            </div>
                            <nav className="px-2 space-y-1">
                                <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 bg-gray-50 hover:bg-gray-100">Home</Link>
                                <Link to="/categories" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">All Categories</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 mt-auto">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Tools</h3>
                            <ul className="mt-4 space-y-4">
                                <li><Link to="/tools/text" className="text-base text-gray-500 hover:text-gray-900">Text Tools</Link></li>
                                <li><Link to="/tools/image" className="text-base text-gray-500 hover:text-gray-900">Image Tools</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                            <ul className="mt-4 space-y-4">
                                <li><Link to="/about" className="text-base text-gray-500 hover:text-gray-900">About</Link></li>
                                <li><Link to="/contact" className="text-base text-gray-500 hover:text-gray-900">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
                        <p className="text-base text-gray-400">&copy; 2026 UltraTools. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
