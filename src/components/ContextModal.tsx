import React from "react";
import { motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import { SquareMousePointer } from "lucide-react";

const ContextModal = () => {
  return (
    <Modal>
      <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center h-6 w-auto items-center text-sm group/modal-btn">
        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
          Ver Contexto
        </span>
        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          <SquareMousePointer size={16} />
        </div>
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
            Lorem ipsum
            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
              dolor
            </span>
            sit amet.
          </h4>
          <div className="flex justify-center items-center"></div>
        </ModalContent>

        <ModalFooter className="gap-4">
          <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
            Cancel
          </button>
          <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
            Not Cancel
          </button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
};

export default ContextModal;
