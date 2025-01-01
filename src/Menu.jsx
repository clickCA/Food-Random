import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Spicy from "./Spicy";
import NotSpicy from "./NotSpicy";

function Menu() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-16 md:py-24">
                <div className="space-y-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-bold text-center">
                        Menu Collection
                    </h1>

                    <section className="space-y-8">
                        <div className="relative">
                            <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold text-center">
                                <i className="fas fa-pepper-hot mr-2"></i>
                                Spicy Menu
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                                {Spicy.map((item, index) => (
                                    <div
                                        key={index}
                                        className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 text-center"
                                    >
                                        <span className="text-lg font-medium">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative pt-8">
                            <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold text-center">
                                <i className="fas fa-smile mr-2"></i>
                                Non-Spicy Menu
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                                {NotSpicy.map((item, index) => (
                                    <div
                                        key={index}
                                        className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 text-center"
                                    >
                                        <span className="text-lg font-medium">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Menu;
