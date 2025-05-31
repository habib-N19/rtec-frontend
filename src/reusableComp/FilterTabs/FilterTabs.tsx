"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  { id: 1, title: "How to Write a Great CV", tag: "cv" },
  { id: 2, title: "Excel Tips for Beginners", tag: "excel" },
  { id: 3, title: "Latest Company Updates", tag: "recent" },
  { id: 4, title: "BOM Sheet S1 Explained", tag: "bom-s1" },
  { id: 5, title: "BOM Sheet S2 Overview", tag: "bom-s2" },
  { id: 6, title: "General Announcements", tag: "recent" },
];

const tabs = [
  { label: "All", value: "all" },
  { label: "Recent", value: "recent" },
  { label: "CV", value: "cv" },
  { label: "Excel", value: "excel" },
  { label: "BOM s1", value: "bom-s1" },
  { label: "BOM s2", value: "bom-s2" },
];

const FilterTabs = () => {
  const [search, setSearch] = useState("");

  const filterPosts = (tag: string) => {
    const normalizedSearch = search.toLowerCase();
    console.log(normalizedSearch);
    return blogPosts.filter((post) => {
      const matchesTag = tag === "all" || post.tag === tag;
      const matchesSearch = post.tag.toLowerCase().includes(normalizedSearch);
      return matchesTag && matchesSearch;
    });
  };

  return (
    <Tabs defaultValue="all" className="mt-10">
      <div className="flex flex-wrap items-center gap-2">
        <TabsList className="flex flex-wrap gap-2 bg-none">
          {tabs.map(({ label, value }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white bg-gray-200/85"
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Search input */}
        <div className="relative ml-auto">
          <Input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 w-48"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      {/* Tab Contents */}
      <div className="my-10">
        {tabs.map(({ value }) => (
          <TabsContent key={value} value={value}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filterPosts(value).length > 0 ? (
                filterPosts(value).map((post) => (
                  <Card key={post.id}>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1 capitalize">
                        Tag: {post.tag}
                      </p>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-muted-foreground col-span-full">
                  No blog posts found.
                </p>
              )}
            </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};

export default FilterTabs;
