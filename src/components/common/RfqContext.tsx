"use client";

import React, { createContext, useContext, useState } from "react";
import { Product } from "@/data/products";

export interface RfqItem {
  product: Product;
  selectedSize?: string;
  quantity?: string;
}

interface RfqContextType {
  isModalOpen: boolean;
  openModal: (initialProduct?: Product, initialSize?: string) => void;
  closeModal: () => void;
  activeProduct: Product | null;
  activeSize: string | null;
  items: RfqItem[];
  addItem: (product: Product, selectedSize?: string) => void;
  removeItem: (productId: number) => void;
  clearItems: () => void;
}

const RfqContext = createContext<RfqContextType | undefined>(undefined);

export function RfqProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [activeSize, setActiveSize] = useState<string | null>(null);
  const [items, setItems] = useState<RfqItem[]>([]);

  const openModal = (initialProduct?: Product, initialSize?: string) => {
    if (initialProduct) {
      setActiveProduct(initialProduct);
      setActiveSize(initialSize || initialProduct.sizes[0]?.size || "");
      if (!items.some((i) => i.product.id === initialProduct.id)) {
        setItems((prev) => [
          ...prev,
          { product: initialProduct, selectedSize: initialSize || initialProduct.sizes[0]?.size },
        ]);
      }
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addItem = (product: Product, selectedSize?: string) => {
    if (!items.some((i) => i.product.id === product.id)) {
      setItems((prev) => [
        ...prev,
        { product, selectedSize: selectedSize || product.sizes[0]?.size },
      ]);
    }
    openModal(product, selectedSize);
  };

  const removeItem = (productId: number) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const clearItems = () => {
    setItems([]);
  };

  return (
    <RfqContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        activeProduct,
        activeSize,
        items,
        addItem,
        removeItem,
        clearItems,
      }}
    >
      {children}
    </RfqContext.Provider>
  );
}

export function useRfq() {
  const context = useContext(RfqContext);
  if (!context) {
    throw new Error("useRfq must be used within an RfqProvider");
  }
  return context;
}
