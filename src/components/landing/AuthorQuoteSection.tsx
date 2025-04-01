"use client";

import { useEffect, useState } from "react";
import { getRandomQuote } from "@/lib/helpers/quotes";
import { Skeleton } from "@/components/ui/skeleton";
import { Quote } from "lucide-react";

export function AuthorQuoteSection() {
  const [quote, setQuote] = useState({ autor: "", frase: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadQuote = () => {
      setIsLoading(true);
      setTimeout(() => {
        setQuote(getRandomQuote());
        setIsLoading(false);
      }, 1000);
    };

    loadQuote();
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex items-center space-x-4 max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
            {isLoading ? (
              <Skeleton className="w-8 h-8 rounded-full" />
            ) : (
              <Quote className="w-8 h-8 text-gray-700" />
            )}
          </div>
          <div className="flex-1">
            {isLoading ? (
              <>
                <Skeleton className="h-7 w-48 mb-2" />
                <Skeleton className="h-8 w-full" />
              </>
            ) : (
              <>
                <h3 className="font-semibold text-xl mb-2">{quote.autor}</h3>
                <p className="text-gray-600 italic">
                  &ldquo;{quote.frase}&rdquo;
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
