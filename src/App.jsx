import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import Spicy from "./Spicy";
import NotSpicy from "./NotSpicy";
import Swal from "sweetalert2";

function App() {
    const [selectedItem, setSelectedItem] = useState("");
    const [isSpicy, setIsSpicy] = useState(null);

    const HandleRandomSelect = () => {
        const items = isSpicy ? Spicy : NotSpicy;
        if (isSpicy === null) {
            Swal.fire({
                title: "โปรดเลือกก่อนที่จะสุ่ม​ !!",
                icon: "warning",
            });
            return;
        }
        const randomIndex = Math.floor(Math.random() * items.length);
        setSelectedItem(items[randomIndex]);
        document.getElementById("my_modal_1").showModal();
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-xl mx-auto">
                    <div className="text-center space-y-8">
                        <div className="relative">
                            <i className="fas fa-utensils text-6xl md:text-8xl text-blue-500 hover:scale-110 transition-all duration-300"></i>
                            <div className="absolute -top-4 -right-4">
                                <i className="fas fa-sparkles text-3xl text-yellow-400 animate-pulse"></i>
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent font-bold">
                            Random Food Generator
                        </h1>

                        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow">
                            <label className="block text-base md:text-lg text-slate-700 mb-4 font-medium">
                                Select Your Preference
                            </label>
                            <select
                                className="select select-bordered w-full text-slate-700 mb-6 hover:border-blue-500 transition-colors bg-gray-50"
                                onChange={(e) =>
                                    setIsSpicy(e.target.value === "spicy")
                                }
                            >
                                <option disabled selected>
                                    Choose your spice level
                                </option>
                                <option value="spicy">🌶️ Spicy</option>
                                <option value="not-spicy">😌 Not Spicy</option>
                            </select>

                            <button
                                className="btn w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:scale-102 active:scale-98 transition-all duration-300 border-none text-lg"
                                onClick={HandleRandomSelect}
                            >
                                <i className="fas fa-random mr-2"></i>
                                Generate Random Meal
                            </button>
                        </div>
                    </div>
                </div>

                <dialog id="my_modal_1" className="modal text-slate-700">
                    <div className="modal-box bg-white rounded-3xl max-w-sm mx-auto">
                        <div className="text-center space-y-4">
                            <h3 className="font-bold text-2xl text-blue-600">
                                Your Random Pick
                            </h3>
                            <hr className="border-blue-100" />
                            <i className="fa-solid fa-bowl-food text-5xl md:text-6xl text-blue-500"></i>
                            <p className="text-2xl md:text-3xl font-bold text-blue-600 break-words">
                                {selectedItem}
                            </p>
                            <form method="dialog" className="mt-6">
                                <button className="btn bg-blue-500 hover:bg-blue-600 text-white border-none w-full">
                                    Try Again
                                </button>
                            </form>
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </main>
            <Footer />
        </div>
    );
}

export default App;
