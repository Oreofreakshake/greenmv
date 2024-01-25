import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ListBox from "./listbox";
import cookies from "js-cookie";
import axios from "axios";

export default function ViewDetail({
    issue,
    assignedTo,
    category,
    status,
    id,
}) {
    let [isOpen, setIsOpen] = useState(false);
    const [modalData, setmodalData] = useState({
        assignedTo: "",
    });
    function closeModal() {
        setIsOpen(false);
        axios
            .patch(`http://localhost:3010/api/data/${id}`, modalData)
            .catch((res) => {
                console.log(res.error);
            });
    }

    const InputChange = (event: { target: { name: any; value: any } }) => {
        const { name, value } = event.target;
        setmodalData((prevState) => ({ ...prevState, [name]: value }));
    };

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            {cookies.get("user") === "staff" ? (
                <div>
                    {" "}
                    <div className=" flex font-poppins">
                        <button
                            type="button"
                            onClick={openModal}
                            className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                        >
                            View
                        </button>
                    </div>
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog
                            as="div"
                            className="relative z-10"
                            onClose={closeModal}
                        >
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black/25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg font-medium leading-6 text-gray-900"
                                            >
                                                Details
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    Issue: {issue}
                                                </p>
                                            </div>
                                            <div className="mt-4">
                                                <p className="text-sm text-gray-500">
                                                    Assigned to: {assignedTo}
                                                </p>
                                            </div>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    Category: {category}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-3 mt-4 pb-12">
                                                <p className="text-sm text-gray-500">
                                                    Status:
                                                </p>
                                                <ListBox data={status} />
                                            </div>

                                            <div className="mt-4">
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    onClick={closeModal}
                                                >
                                                    Save and Close
                                                </button>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </div>
            ) : (
                <div>
                    <div className=" flex font-poppins">
                        <button
                            type="button"
                            onClick={openModal}
                            className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                        >
                            View
                        </button>
                    </div>
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog
                            as="div"
                            className="relative z-10"
                            onClose={closeModal}
                        >
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black/25" />
                            </Transition.Child>
                            <form action="">
                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-lg font-medium leading-6 text-gray-900"
                                                >
                                                    Details
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        Issue: {issue}
                                                    </p>
                                                </div>
                                                <div className="mt-4">
                                                   {/* <p className="text-sm text-gray-500">
                                                        <label
                                                            htmlFor="UserEmail"
                                                            className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                                                        >
                                                            <input
                                                                type="text"
                                                                placeholder="assignedto"
                                                                name="assignedto"
                                                                onChange={
                                                                    InputChange
                                                                }
                                                                value={
                                                                    modalData.assignedTo
                                                                }
                                                                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                                            />

                                                            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                                                                Assigned to:{" "}
                                                                {assignedTo}
                                                            </span>
                                                        </label>
                                                    </p> */}
                                                    <p className="text-sm text-gray-500">
                                                        <label
                                                            htmlFor="UserEmail"
                                                            className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                                                        >
                                                            <select
                                                                name="assignedTo"
                                                                onChange={InputChange}
                                                                value={modalData.assignedTo}
                                                                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                                            >
                                                                <option value="Abaas">Abaan</option>
                                                                <option value="Absal">Absal</option>
                                                                <option value="Ahzam">Ahzam</option>
                                                                <option value="Shimaah">Shimaah</option>
                                                                <option value="Affaan">Affaan</option>
                                                                <option value="Aswaaru">Aswaaru</option>
                                                                <option value="Shaimal">Shaimal</option>
                                                            </select>

                                                            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                                                                Assigned to: {modalData.assignedTo}
                                                            </span>
                                                        </label>
                                                    </p>
                                                </div>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                       

                                                                Category: {category}
                                                            
                                                    
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-3 mt-4 pb-12">
                                                    <p className="text-sm text-gray-500">
                                                        Status: {status}
                                                    </p>
                                                </div>

                                                <div className="mt-4">
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                        onClick={closeModal}
                                                    >
                                                        Save and Close
                                                    </button>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </form>
                        </Dialog>
                    </Transition>
                </div>
            )}
        </>
    );
}
