import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import data from "@/data/data.json";
import {
  type Category,
  type ProductRequest,
  type TrackedStatus,
  type User,
} from "@/types";

interface Store {
  selectedCategory: Category;
  setSelectedCategory: (selectedCategory: Category) => void;
  selectedStatus: TrackedStatus;
  setSelectedStatus: (selectedStatus: TrackedStatus) => void;
  currentUser: User;
  productRequests: ProductRequest[];
  setProductRequests: (productRequests: ProductRequest[]) => void;
  votedFeedbacksId: number[];
  setVotedFeedbacksId: (votedFeedbacksId: number[]) => void;
}

const useStore = create<Store>()(
  persist(
    (set) => ({
      selectedCategory: "all",
      setSelectedCategory: (selectedCategory: Category) => {
        set(() => ({ selectedCategory }));
      },
      selectedStatus: "in-progress",
      setSelectedStatus: (selectedStatus: TrackedStatus) => {
        set(() => ({ selectedStatus }));
      },
      currentUser: data.currentUser,
      productRequests: data.productRequests as ProductRequest[],
      setProductRequests: (productRequests: ProductRequest[]) => {
        set(() => ({ productRequests }));
      },
      votedFeedbacksId: [],
      setVotedFeedbacksId: (votedFeedbacksId: number[]) => {
        set(() => ({ votedFeedbacksId }));
      },
    }),
    {
      name: "product-feedback-app-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useStore;
