import Image from "next/image";
import { Badge } from "../ui/badge";
import { Store } from "@/app/page";
import { Clock } from "lucide-react";

type StoreProps = {
  store: Store;
};

const StoreImage = ({ image }: { image: string }) => (
  <Image
    src={image}
    alt=""
    width={400}
    height={300}
    className="w-full h-48 object-cover rounded-sm"
    style={{ aspectRatio: "400/300", objectFit: "cover" }}
  />
);

const StoreDetails = ({
  name,
  description,
  hours,
}: {
  name: string;
  description: string;
  hours: string;
}) => (
  <div className="pt-4 flex-1">
    <h3 className="font-semibold text-lg h-[60px]">{name}</h3>
    <p className="text-muted-foreground text-sm line-clamp-2 h-[40px]">
      {description}
    </p>
    <div className="flex items-center gap-2 mt-4">
      <span className="aspect-square w-2 h-2 rounded-full bg-green-500" />
      <span className="text-muted-foreground text-xs flex items-center gap-1">
        <Clock size={12} />
        {hours}
      </span>
    </div>
  </div>
);

const StoreCategoryBadge = ({
  category,
}: {
  category: { value: string; label: string };
}) => (
  <div>
    <Badge className="mt-2">{category.label}</Badge>
  </div>
);

export default function StoreCard({ store }: StoreProps) {
  return (
    <div className="bg-background rounded-lg overflow-hidden p-4 flex flex-col hover:shadow-md">
      <StoreImage image={store.image} />
      <StoreDetails
        name={store.name}
        description={store.description}
        hours={store.hours}
      />
      <StoreCategoryBadge category={store.category} />
    </div>
  );
}
