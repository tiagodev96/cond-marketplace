import React from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type StoreDialogProps = {
  isZoomed: boolean;
  setIsZoomed: (value: boolean) => void;
  zoomedImageIndex: number;
  galleryImages: string[];
  handlePrevImage: () => void;
  handleNextImage: () => void;
};

const StoreDialog = ({
  isZoomed,
  setIsZoomed,
  zoomedImageIndex,
  galleryImages,
  handlePrevImage,
  handleNextImage,
}: StoreDialogProps) => {
  return (
    <Dialog open={isZoomed} onOpenChange={setIsZoomed}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-transparent border-none">
        <div className="relative w-full h-full">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${zoomedImageIndex * 100}%)` }}
          >
            {galleryImages.map((src, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Image
                  src={src}
                  alt={`Galeria ${index + 1}`}
                  width={800}
                  height={800}
                  className="rounded-lg mx-auto"
                />
              </div>
            ))}
          </div>
          <button
            className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white z-10"
            onClick={() => setIsZoomed(false)}
            aria-label="Fechar"
          >
            <X size={24} />
          </button>
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-1 bg-black/50 rounded-full text-white z-10"
            onClick={handlePrevImage}
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-black/50 rounded-full text-white z-10"
            onClick={handleNextImage}
            aria-label="Próxima imagem"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StoreDialog;
