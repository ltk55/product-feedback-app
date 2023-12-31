"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import CategoryTag from "@/components/CategoryTag/CategoryTag";
import iconComment from "@/public/img/shared/icon-comments.svg";
import { type Category } from "@/types";

import UpvoteBtn from "../Buttons/UpvoteBtn";

interface SuggestionCardProps {
  feedbackId: number;
  title: string;
  description: string;
  category: Category;
  upvoteCount: number;
  commentCount: number;
}

export default function SuggestionCard({
  feedbackId,
  title,
  description,
  category,
  upvoteCount,
  commentCount,
}: SuggestionCardProps): React.ReactNode {
  const pathname = usePathname();

  const activeLink = !pathname.includes("feedback-detail");

  return (
    <div className="flex flex-col rounded-lg bg-white p-6 md:w-full md:flex-row md:justify-between">
      <div className="hidden md:block">
        <UpvoteBtn upvote={upvoteCount} feedbackId={feedbackId} responsive />
      </div>

      <div className="w-full md:pl-10">
        <Link
          href={`./feedback-detail/${feedbackId}`}
          className={activeLink ? "" : "pointer-events-none"}
        >
          <h3 className="pb-[0.56rem] text-xs font-bold text-slate-600 md:text-lg">
            {title}
          </h3>
          <p className="pb-2 text-xs font-normal text-slate-500 md:text-base">
            {description}
          </p>
        </Link>
        <div className="pb-4">
          <CategoryTag categoryName={category} />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="md:hidden">
          <UpvoteBtn upvote={upvoteCount} feedbackId={feedbackId} />
        </div>

        <div className="flex items-center gap-1">
          <Image priority src={iconComment} alt="comment" />
          <div className="min-w-[18px] text-center text-xs font-bold text-slate-600 md:text-base">
            {commentCount}
          </div>
        </div>
      </div>
    </div>
  );
}
