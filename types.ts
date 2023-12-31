interface SortOption {
  value: string;
  label: string;
}

interface User {
  image: string;
  name: string;
  username: string;
}

interface Reply {
  content: string;
  replyingTo: string;
  user: User;
}

interface Comment {
  id: string;
  content: string;
  user: User;
  replies?: Reply[];
}

type Status = "suggestion" | "planned" | "in-progress" | "live";

type Category = "all" | "UI" | "UX" | "enhancement" | "bug" | "feature";

type TrackedStatus = Exclude<Status, "suggestion">;

interface ProductRequest {
  id: number;
  title: string;
  category: Category;
  upvotes: number;
  status: Status;
  description: string;
  comments?: Comment[];
}

interface Data {
  currentUser: User;
  productRequests: ProductRequest[];
}

export type {
  Category,
  Comment,
  Data,
  ProductRequest,
  Reply,
  SortOption,
  Status,
  TrackedStatus,
  User,
};
