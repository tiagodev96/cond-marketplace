import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Image from "next/image";

type StoreTabsProps = {
  activeTab: string;
  setActiveTab: (value: string) => void;
  galleryImages: string[];
  handleImageClick: (index: number) => void;
  catalogItems: {
    image: string;
    name: string;
    description: string;
    price: string;
  }[];
};

const StoreTabs = ({
  activeTab,
  setActiveTab,
  galleryImages,
  handleImageClick,
  catalogItems,
}: StoreTabsProps) => {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="gallery">Galeria</TabsTrigger>
        <TabsTrigger value="catalog">Catálogo</TabsTrigger>
      </TabsList>
      <TabsContent value="gallery">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(index)}
              className="cursor-pointer w-full max-w-[300px]"
            >
              <Image
                src={src}
                alt={`Galeria ${index + 1}`}
                width={300}
                height={300}
                className="rounded-lg w-full h-auto object-cover"
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
  );
};

export default StoreTabs;
