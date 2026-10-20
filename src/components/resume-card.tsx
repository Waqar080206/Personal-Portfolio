"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";

interface Role {
  title: string;
  period: string;
  description?: string;
}

interface ResumeCardProps {
  icon: boolean;
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  roles?: Role[];
}

const toHardBreaks = (text: string) => text.replace(/\n\s*/g, "  \n");
export const ResumeCard = ({
  icon,
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  roles,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const roleList = roles ?? [];
  const hasRoles = roleList.length > 0;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description || hasRoles) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  const card = (
    <Card className="flex bg-background">
      <div className="flex-none">
        <Avatar className="size-12 m-auto bg-gray-300 dark:bg-transparent">
          <>
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </>
        </Avatar>
      </div>
      <div
        className={cn(
          "flex-grow ml-4 flex-col group min-w-0",
          !hasRoles && "items-center"
        )}
      >
        <CardHeader>
          <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-base">
            <h3 className="inline-flex flex-wrap items-center font-semibold leading-snug text-xs sm:text-sm min-w-0">
              {title}
              {badges && (
                <span className="inline-flex ml-2 gap-x-1">
                  {badges.map((badge, index) => (
                    <Badge
                      variant="secondary"
                      className="align-middle text-xs dark:bg-card"
                      key={index}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
              <ChevronRightIcon
                className={cn(
                  "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                  isExpanded ? "rotate-90" : "rotate-0"
                )}
              />
            </h3>
            <div className="ml-auto text-xs sm:text-sm tabular-nums text-muted-foreground text-right whitespace-nowrap">
              {period}
            </div>
          </div>
          {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
        </CardHeader>
        {hasRoles && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden"
          >
            <div className="mt-1 border-t border-border/60 pt-4 pb-4">
            {roleList.map((role, index) => {
              const isCurrent = index === 0;
              const isLast = index === roleList.length - 1;
              return (
                <div key={index} className="flex gap-3">
                  <div
                    className={cn(
                      "flex w-2 flex-none flex-col items-center",
                      isCurrent ? "pt-[9px]" : "pt-[5px]"
                    )}
                    aria-hidden="true"
                  >
                    <span
                      className={cn(
                        "size-2 shrink-0 rounded-full",
                        isCurrent ? "bg-foreground" : "bg-muted-foreground/40"
                      )}
                    />
                    {!isLast && (
                      <span className="-mb-1.5 w-px flex-1 bg-border" />
                    )}
                  </div>
                  <div
                    className={cn("min-w-0 flex-1", !isLast && "pb-4")}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                      <span
                        className={cn(
                          isCurrent
                            ? "text-sm sm:text-base font-semibold"
                            : "text-xs sm:text-sm font-medium text-foreground/90"
                        )}
                      >
                        {role.title}
                      </span>
                      <span className="text-xs tabular-nums text-muted-foreground whitespace-nowrap">
                        {role.period}
                      </span>
                    </div>
                    {role.description && (
                      <Markdown className="prose max-w-full text-pretty font-sans text-xs sm:text-sm dark:prose-invert mt-1">
                        {toHardBreaks(role.description)}
                      </Markdown>
                    )}
                  </div>
                </div>
              );
            })}
            </div>
          </motion.div>
        )}
        {!hasRoles && description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-2 text-xs sm:text-sm"
          >
            <Markdown className="prose max-w-full text-pretty font-sans text-sm dark:prose-invert">
              {description}
            </Markdown>
          </motion.div>
        )}
      </div>
    </Card>
  );

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      {card}
    </Link>
  );
};
