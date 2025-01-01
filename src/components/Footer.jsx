function Footer() {
    return (
        <footer className="bg-blue-50 border-t border-blue-100 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center space-y-4">
                    <i className="fas fa-utensils text-2xl text-blue-400"></i>
                    <p className="text-gray-600 text-sm hover:text-blue-500 transition-colors">
                        Crafted with passion by{" "}
                        <a
                            href="https://linktr.ee/clickCA"
                            className="font-medium hover:text-blue-600"
                        >
                            clickCA
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
