import { useState } from "react";
import { Button, Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import "./PdfModal.css";

function PdfModal() {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <Button
        onClick={open}
        className="border-[#522930] border rounded-full pr-2.5 pl-2.5 p-1 text-[#522930] hover:border-transparent hover:bg-[#522930] hover:text-[#e1c8c7]"
      >
        View Application
      </Button>
      <Dialog open={isOpen} as="div" className="relative z-10" onClose={close}>
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-3xl rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <img src="./public/resume.png" alt="Resume Application" />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default PdfModal;
