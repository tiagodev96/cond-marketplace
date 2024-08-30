import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Instagram } from "lucide-react";
import whatsappIcon from "../../../public/whatsapp-icon.svg";

type StoreHeaderProps = {
  sellerInfo: {
    name: string;
    photo: string;
    hours: string;
    category: string;
    whatsapp?: string;
    instagram?: string;
  };
};

const StoreHeader = ({ sellerInfo }: StoreHeaderProps) => {
  return (
    <header className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
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
      </div>

      <div className="flex gap-4">
        {sellerInfo.whatsapp && (
          <Link
            href={sellerInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <Image src={whatsappIcon} alt="Link Whatsapp" className="w-6 h-6" />
          </Link>
        )}

        {sellerInfo.instagram && (
          <Link
            href={sellerInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-600 transition-colors" />
          </Link>
        )}
      </div>
    </header>
  );
};

export default StoreHeader;
