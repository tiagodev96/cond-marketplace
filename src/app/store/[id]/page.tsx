"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function StorePage() {
  const [activeTab, setActiveTab] = useState("gallery");
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImageIndex, setZoomedImageIndex] = useState(0);

  const sellerInfo = {
    name: "João Silva",
    photo: "https://picsum.photos/150/150",
    hours: "Seg-Sex: 9h-18h",
    category: "Eletrônicos",
  };

  const galleryImages = [
    "https://picsum.photos/300/300",
    "https://picsum.photos/310/310",
    "https://picsum.photos/320/320",
    "https://picsum.photos/330/330",
    "https://picsum.photos/340/340",
    "https://picsum.photos/350/350",
  ];

  const catalogItems = [
    {
      image: "https://picsum.photos/100/100",
      name: "Produto 1",
      description: "Descrição do Produto 1",
      price: "R$ 99,99",
    },
    {
      image: "https://picsum.photos/110/110",
      name: "Produto 2",
      description: "Descrição do Produto 2",
      price: "R$ 149,99",
    },
    {
      image: "https://picsum.photos/120/120",
      name: "Produto 3",
      description: "Descrição do Produto 3",
      price: "R$ 199,99",
    },
    {
      image: "https://picsum.photos/130/130",
      name: "Produto 4",
      description: "Descrição do Produto 4",
      price: "R$ 79,99",
    },
  ];

  const handlePrevImage = () => {
    setZoomedImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setZoomedImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleImageClick = (index: number) => {
    setZoomedImageIndex(index);
    setIsZoomed(true);
  };

  return (
    <div className="container mx-auto p-4">
      <header className="flex items-center gap-4 mb-6">
        <Image
          src={sellerInfo.photo}
          alt={sellerInfo.name}
          width={100}
          height={100}
          className="rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold">{sellerInfo.name}</h1>
          <p className="text-muted-foreground">{sellerInfo.hours}</p>
          <Badge>{sellerInfo.category}</Badge>
        </div>
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="gallery">Galeria</TabsTrigger>
          <TabsTrigger value="catalog">Catálogo</TabsTrigger>
        </TabsList>
        <TabsContent value="gallery">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(index)}
                className="cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Galeria ${index + 1}`}
                  width={300}
                  height={300}
                  className="rounded-lg w-full object-fill"
                />
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="catalog">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {catalogItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 border rounded-lg"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="font-semibold mt-2">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

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
    </div>
  );
}
