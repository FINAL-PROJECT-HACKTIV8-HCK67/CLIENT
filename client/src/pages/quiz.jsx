import { useState } from "react";
export default function Quiz() {
    const [checkedItems, setCheckedItems] = useState({
        option1: false,
        option2: false,
        option3: false,
        option4: false,
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckedItems({ ...checkedItems, [name]: checked });
    };
    return (
        <div className="bg-yellow-50 flex justify-center items-center min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
                <h1 className="text-xl font-bold mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</h1>
                <form>
                    <div className="mb-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-teal-500"
                                name="option1"
                                checked={checkedItems.option1}
                                onChange={handleCheckboxChange}
                            />
                            <span className="ml-2">Pilihan ganda 1</span>
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-teal-500"
                                name="option2"
                                checked={checkedItems.option2}
                                onChange={handleCheckboxChange}
                            />
                            <span className="ml-2">Pilihan ganda 2</span>
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-teal-500"
                                name="option3"
                                checked={checkedItems.option3}
                                onChange={handleCheckboxChange}
                            />
                            <span className="ml-2">Pilihan ganda 3</span>
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-teal-500"
                                name="option4"
                                checked={checkedItems.option4}
                                onChange={handleCheckboxChange}
                            />
                            <span className="ml-2">Pilihan ganda 4</span>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
}