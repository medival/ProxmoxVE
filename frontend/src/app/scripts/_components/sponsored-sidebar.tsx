"use client";

import { useMemo, useState, useEffect } from "react";
import { Crown, Mail, CalendarPlus, LayoutGrid } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import type { Category, Script } from "@/lib/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { extractDate } from "@/lib/time";

interface SponsoredSidebarProps {
  items: Category[];
  onScriptSelect?: (slug: string) => void;
}

// Icon loader with fallback
function AppIcon({ src, name, size = 48 }: { src?: string | null; name: string; size?: number }) {
  const [errored, setErrored] = useState(false);

  useEffect(() => setErrored(false), [src]);

  const imgClass = size <= 48 ? "h-8 w-8 object-contain rounded-md p-0.5" : "h-11 w-11 object-contain rounded-md p-1";
  const fallbackIconClass = size <= 48 ? "h-8 w-8" : "h-11 w-11";

  const resolvedSrc = src && !errored ? src : undefined;

  return (
    <>
      {resolvedSrc ? (
        <Image
          src={resolvedSrc}
          unoptimized
          height={size}
          width={size}
          alt={`${name} icon`}
          onError={() => setErrored(true)}
          className={imgClass}
        />
      ) : (
        <LayoutGrid className={`${fallbackIconClass} text-muted-foreground`} aria-hidden />
      )}
    </>
  );
}

export function SponsoredSidebar({ items, onScriptSelect }: SponsoredSidebarProps) {
  const sponsoredScripts = useMemo(() => {
    if (!items) return [];

    const scripts = items.flatMap(category => category.scripts || []);
    const now = new Date();

    // Filter out duplicates and get only active sponsored scripts
    const uniqueScriptsMap = new Map<string, Script>();
    scripts.forEach(script => {
      if (!uniqueScriptsMap.has(script.slug) && script.sponsored) {
        // Check if sponsored period has expired
        if (script.sponsored_expired) {
          const expirationDate = new Date(script.sponsored_expired);
          if (expirationDate < now) {
            return; // Skip expired sponsored scripts
          }
        }
        uniqueScriptsMap.set(script.slug, script);
      }
    });

    return Array.from(uniqueScriptsMap.values()).slice(0, 5); // Max 5 sponsored scripts
  }, [items]);

  const MAX_SPOTS = 5;
  const availableSpots = MAX_SPOTS - sponsoredScripts.length;
  const isFull = sponsoredScripts.length >= MAX_SPOTS;

  if (!items) return null;

  return (
    <aside className="hidden lg:block lg:min-w-[250px] lg:max-w-[250px]">
      <div className="sticky top-4 space-y-3">
        {/* Header */}
        <div className="px-1">
          <div className="flex items-center gap-2 mb-1">
            <Crown className="h-3.5 w-3.5 text-muted-foreground/60" />
            <h2 className="text-sm font-semibold text-muted-foreground">Ads</h2>
          </div>
          {sponsoredScripts.length > 0 && (
            <p className="text-[10px] text-muted-foreground/60">
              {isFull ? (
                "All spots taken"
              ) : (
                `${availableSpots} spot${availableSpots !== 1 ? 's' : ''} available`
              )}
            </p>
          )}
        </div>

        {/* Sponsored Scripts */}
        {sponsoredScripts.length > 0 ? (
          <div className="space-y-3">
          {sponsoredScripts.map(script => (
            <Card
              key={script.slug}
              className="bg-accent/10 border border-border/40 hover:border-border/60 transition-all duration-300 hover:shadow-md flex flex-col relative overflow-hidden opacity-85"
            >
              {/* Sponsored Badge */}
              <div className="absolute top-2 right-2 z-10">
                <Badge variant="secondary" className="text-[9px] px-1.5 py-0.5 bg-muted/50">
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/40 mr-1" />
                  AD
                </Badge>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="flex items-start gap-2">
                  <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent/40 to-accent/60 p-1 shadow-sm">
                    <AppIcon src={script.logo} name={script.name || script.slug} size={48} />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <h3 className="font-semibold text-sm line-clamp-2 leading-tight">{script.name}</h3>
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-grow py-2">
                <CardDescription className="line-clamp-2 text-xs leading-snug">
                  {script.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="pt-0">
                <Button asChild variant="outline" className="w-full h-8 text-xs">
                  <Link
                    href={{
                      pathname: "/scripts",
                      query: { id: script.slug },
                    }}
                  >
                    View Details
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        ) : (
          <Card className="border border-dashed border-border/30 bg-accent/5">
            <CardContent className="text-center py-6 space-y-2">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-muted/20">
                <Crown className="h-5 w-5 text-muted-foreground/60" />
              </div>
              <CardTitle className="text-sm text-muted-foreground">5 Spots Available</CardTitle>
              <CardDescription className="text-xs">
                Be the first to sponsor
              </CardDescription>
            </CardContent>
          </Card>
        )}

        {/* Advertise Here Card */}
        <Card className="border border-dashed border-border/30 bg-accent/5">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-muted/20">
              <Crown className="h-4 w-4 text-muted-foreground/60" />
            </div>
            <CardTitle className="text-sm text-muted-foreground">Advertise Here</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-2">
            <CardDescription className="text-[11px]">
              Reach developers
            </CardDescription>
            <ul className="text-[10px] space-y-1 text-muted-foreground/70">
              <li className="flex items-center justify-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                Engaged audience
              </li>
              <li className="flex items-center justify-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                Premium visibility
              </li>
              <li className="flex items-center justify-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                Flexible terms
              </li>
            </ul>
            <Button asChild variant="outline" className="w-full h-7 opacity-80" size="sm">
              <a href="mailto:support@example.com" className="flex items-center gap-1.5 text-[11px]">
                <Mail className="h-3 w-3" />
                Get In Touch
              </a>
            </Button>
            <p className="text-[9px] text-muted-foreground/60 pt-1">
              Starting at $99/month
            </p>
          </CardContent>
        </Card>
      </div>
    </aside>
  );
}
