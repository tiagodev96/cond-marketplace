import React from "react";

type StorePageParams = {
  params: {
    id: string;
  };
};

const StorePage = ({ params }: StorePageParams) => {
  return <div>Page: {params.id}</div>;
};

export default StorePage;
