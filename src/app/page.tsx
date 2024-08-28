"use client";

import Filters from "@/components/filters";
import Navbar from "@/components/navbar";
import StoresGrid from "@/components/stores-grid";
import { useMemo, useState } from "react";

export type Store = {
  id: number;
  name: string;
  category: { value: string; label: string };
  image: string;
  description: string;
  hours: string;
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const stores: Store[] = useMemo(
    () => [
      {
        id: 1,
        name: "Supermercado Condomínio",
        category: { value: "alimentacao", label: "Alimentação" },
        image: "https://picsum.photos/200/300",
        description: "Supermercado com ampla variedade de produtos.",
        hours: "Seg - Sáb, 16h às 22h",
      },
      {
        id: 2,
        name: "Farmácia Saúde",
        category: { value: "farmacia", label: "Farmácia" },
        image: "https://picsum.photos/200/300",
        description: "Farmácia com atendimento personalizado.",
        hours: "Seg - Dom, 9h às 20h",
      },
      {
        id: 3,
        name: "Salão de Beleza Glamour",
        category: { value: "salao-de-beleza", label: "Salão de beleza" },
        image: "https://picsum.photos/200/300",
        description: "Salão de beleza com os melhores profissionais.",
        hours: "Seg - Sáb, 10h às 19h",
      },
      {
        id: 4,
        name: "Padaria Delícias",
        category: { value: "alimentacao", label: "Alimentação" },
        image: "https://picsum.photos/200/300",
        description: "Padaria com pães e doces frescos diariamente.",
        hours: "Segunda a Domingo, 6h às 20h",
      },
      {
        id: 5,
        name: "Clínica Médica Saúde",
        category: { value: "saude", label: "Saúde" },
        image: "https://picsum.photos/200/300",
        description: "Clínica médica com atendimento de qualidade.",
        hours: "Seg - Sex, 8h às 18h",
      },
      {
        id: 6,
        name: "Barbearia Homens",
        category: { value: "salao-de-beleza", label: "Salão de beleza" },
        image: "https://picsum.photos/200/300",
        description: "Barbearia com os melhores cortes de cabelo.",
        hours: "Seg - Sáb, 9h às 19h",
      },
    ],
    []
  );

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredStores: Store[] = useMemo(() => {
    const normalizedSearchTerm = searchTerm
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    return stores.filter((store) => {
      const normalizedStoreName = store.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      const normalizedStoreCategory = store.category.label
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      const matchesSearchTerm =
        normalizedStoreName.includes(normalizedSearchTerm) ||
        normalizedStoreCategory.includes(normalizedSearchTerm);

      const matchesCategory =
        selectedCategory === "all" || store.category.value === selectedCategory;

      return matchesSearchTerm && matchesCategory;
    });
  }, [searchTerm, selectedCategory, stores]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Filters
        onSelectCategory={handleSelectCategory}
        onSearch={handleSearch}
      />

      <StoresGrid stores={filteredStores} />
    </div>
  );
}
