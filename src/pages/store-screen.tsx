import DefaultPagination from "@/components/default-pagination";
import StoreDialog from "@/components/store-dialog";
import StoreHeader from "@/components/store-header";
import StoreTabs from "@/components/store-tabs";
import React, { useState } from "react";

const StoreScreen = () => {
  const [activeTab, setActiveTab] = useState("gallery");
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImageIndex, setZoomedImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const TOTAL_PAGES = 2;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const sellerInfo = {
    name: "João Silva",
    photo: "https://picsum.photos/150/150",
    hours: "Seg-Sex: 9h-18h",
    category: "Eletrônicos",
    whatsapp: "https://wa.me/5511999999999",
    instagram: "https://instagram.com/joaosilva",
  };

  const galleryImages = [
    "https://picsum.photos/300/300",
    "https://picsum.photos/305/305",
    "https://picsum.photos/310/310",
    "https://picsum.photos/315/315",
    "https://picsum.photos/320/320",
    "https://picsum.photos/325/325",
  ];

  const catalogItems = [
    {
      image: "https://picsum.photos/330/330",
      name: "Produto 1",
      description: "Descrição do Produto 1",
      price: "R$ 99,99",
    },
    {
      image: "https://picsum.photos/335/335",
      name: "Produto 2",
      description: "Descrição do Produto 2",
      price: "R$ 149,99",
    },
    {
      image: "https://picsum.photos/340/340",
      name: "Produto 3",
      description: "Descrição do Produto 3",
      price: "R$ 199,99",
    },
    {
      image: "https://picsum.photos/345/345",
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
      <StoreHeader sellerInfo={sellerInfo} />

      <StoreTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        catalogItems={catalogItems}
        galleryImages={galleryImages}
        handleImageClick={handleImageClick}
      />

      <DefaultPagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={TOTAL_PAGES}
      />

      <StoreDialog
        isZoomed={isZoomed}
        setIsZoomed={setIsZoomed}
        zoomedImageIndex={zoomedImageIndex}
        galleryImages={galleryImages}
        handlePrevImage={handlePrevImage}
        handleNextImage={handleNextImage}
      />
    </div>
  );
};

export default StoreScreen;
