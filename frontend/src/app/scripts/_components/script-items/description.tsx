import type { Script } from "@/lib/types";

import TextCopyBlock from "@/components/text-copy-block";
import { CheckCircle2 } from "lucide-react";

export default function Description({ item }: { item: Script }) {
  // Extract first sentence as summary if features exist
  const summary = item.features
    ? item.description.split(/[.!?]/)[0] + "."
    : item.description;

  return (
    <div className="p-2 space-y-4">
      <div>
        <h2 className="mb-3 text-lg font-semibold">Description</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {TextCopyBlock(summary)}
        </p>
      </div>

      {item.features && item.features.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-base font-semibold">Key Features</h3>
          <ul className="space-y-2">
            {item.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
