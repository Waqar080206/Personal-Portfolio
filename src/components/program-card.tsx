"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon, AwardIcon } from "lucide-react";
import Link from "next/link";

const statusDot: Record<string, string> = {
  Completed: "bg-emerald-500",
  "In Progress": "bg-sky-500 animate-pulse",
  Selected: "bg-violet-500",
};

interface ProgramCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  organization: string;
  category: string;
  dates: string;
  status: string;
  description?: string;
  designation?: string;
  platform?: string;
  href?: string;
  accent?: boolean;
}

export const ProgramCard = ({
  logoUrl,
  altText,
  title,
  organization,
  category,
  dates,
  status,
  description,
  designation,
  platform,
  href,
  accent,
}: ProgramCardProps) => {
  const card = (
    <Card
      className={cn(
        "group flex h-full flex-col border bg-background p-4 transition-all duration-300 ease-out hover:border-foreground/20 hover:shadow-lg",
        accent && "border-l-2 border-l-foreground/25"
      )}
    >
      <div className="flex items-start gap-3">
        <Avatar className="size-10 flex-none bg-gray-300 ring-1 ring-border dark:bg-transparent">
          <AvatarImage
            src={logoUrl}
            alt={altText}
            className="object-contain"
          />
          <AvatarFallback className="text-xs">{altText[0]}</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-x-2">
            <div className="min-w-0 space-y-0.5">
              <p className="truncate text-xs text-muted-foreground">
                {organization}
              </p>
              <h3 className="text-[13px] font-semibold leading-snug sm:text-sm">
                {title}
              </h3>
            </div>
            <ArrowUpRightIcon
              className={cn(
                "mt-0.5 size-3.5 shrink-0 -translate-x-1 text-muted-foreground opacity-0 transition-all duration-300 ease-out",
                "group-hover:translate-x-0 group-hover:opacity-100"
              )}
            />
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
            <Badge
              variant="secondary"
              className="gap-1.5 px-1.5 py-0.5 text-[10px] font-medium dark:bg-card"
            >
              <span
                className={cn(
                  "size-1.5 rounded-full",
                  statusDot[status] ?? "bg-muted-foreground"
                )}
              />
              {status}
            </Badge>
            <span className="text-xs tabular-nums text-muted-foreground">
              {dates}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <Badge
          variant="outline"
          className="px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground"
        >
          {category}
        </Badge>
        {designation && (
          <span className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-secondary/60 px-1.5 py-0.5 text-[10px] font-medium text-foreground/80">
            <AwardIcon className="size-3" />
            {designation}
          </span>
        )}
        {platform && (
          <span className="text-[11px] text-muted-foreground">
            Learning platform: {platform}
          </span>
        )}
      </div>

      {description && (
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-[13px]">
          {description}
        </p>
      )}
    </Card>
  );

  if (!href) {
    return card;
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full cursor-pointer"
    >
      {card}
    </Link>
  );
};
