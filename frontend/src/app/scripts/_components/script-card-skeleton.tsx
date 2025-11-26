import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function ScriptCardSkeleton() {
  return (
    <Card className="bg-accent/30 border-2 flex flex-col h-full overflow-hidden relative">
      {/* Shimmer overlay */}
      <div className="absolute inset-0 shimmer pointer-events-none" />

      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          {/* Icon skeleton */}
          <div className="h-16 w-16 min-w-16 rounded-xl bg-accent/40 animate-pulse" />

          <div className="flex flex-col flex-1 min-w-0 gap-2">
            {/* Title skeleton */}
            <div className="h-4 bg-accent/40 rounded animate-pulse w-3/4" />
            {/* Date skeleton */}
            <div className="h-3 bg-accent/30 rounded animate-pulse w-1/2" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-grow space-y-3">
        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-3 bg-accent/40 rounded animate-pulse w-full" />
          <div className="h-3 bg-accent/40 rounded animate-pulse w-5/6" />
        </div>

        {/* Badges skeleton */}
        <div className="flex flex-wrap gap-1.5">
          <div className="h-5 w-16 bg-accent/30 rounded-full animate-pulse" />
          <div className="h-5 w-20 bg-accent/30 rounded-full animate-pulse" />
          <div className="h-5 w-14 bg-accent/30 rounded-full animate-pulse" />
        </div>
      </CardContent>
    </Card>
  );
}

export function ScriptCardSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <ScriptCardSkeleton key={i} />
      ))}
    </div>
  );
}
