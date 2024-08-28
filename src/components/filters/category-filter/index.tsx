"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const categories = [
  { value: "alimentacao", label: "Alimentação" },
  { value: "farmacia", label: "Farmácia" },
  { value: "salao-de-beleza", label: "Salão de beleza" },
  { value: "saude", label: "Saúde" },
];

type CategoryFilterProps = {
  onSelectCategory: (category: string) => void;
};

const CategoryFilter = ({ onSelectCategory }: CategoryFilterProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState("");

  const handleSelect = (category: string) => {
    const finalCategory = category === selectedCategory ? "all" : category;
    const finalLabel = finalCategory === "all" ? "" : finalCategory;

    onSelectCategory(finalCategory);
    setSelectedCategory(finalLabel);
    setIsOpen(false);
  };

  const selectedLabel = selectedCategory
    ? categories.find((cat) => cat.value === selectedCategory)?.label
    : "Selecione uma categoria";

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          className="w-[250px] justify-between"
        >
          {selectedLabel}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Pesquise..." />
          <CommandList>
            <CommandEmpty>Categoria não encontrada</CommandEmpty>
            <CommandGroup>
              {categories.map(({ value, label }) => (
                <CommandItem
                  key={value}
                  value={value}
                  onSelect={() => handleSelect(value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedCategory === value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CategoryFilter;
