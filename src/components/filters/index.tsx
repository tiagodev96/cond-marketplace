import React from "react";
import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";

import CategoryFilter from "./category-filter";

type CategoryFilterProps = {
  onSelectCategory: (category: string) => void;
  onSearch: (term: string) => void;
};

export default function Filters({
  onSelectCategory,
  onSearch,
}: CategoryFilterProps) {
  return (
    <div className="bg-muted/40 py-6 px-6">
      <div className="max-w-4xl mx-auto flex items-center gap-4">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Procure pelo nome ou categoria"
            className="w-full bg-background pl-10 pr-4 py-2 rounded-md shadow-sm"
            onChange={(event) => onSearch(event.target.value)}
          />
        </div>
        <CategoryFilter onSelectCategory={onSelectCategory} />
      </div>
    </div>
  );
}
