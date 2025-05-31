"use client";

import { Bell, Sun, Heart, MessageCircle, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import feedImage from "@/assets/feed-1.png";
import avatarimage from "@/assets/profile.png";
import { useState } from "react";

import postsData from "./post-data";

export default function JobFeedsPage() {
  const users = [
    { name: "Md. Arafat Hossain", role: "GM at Ha-Meem Group", initials: "AH" },
    { name: "Md. Benjir Islam", role: "GM at Ha-Meem Group", initials: "BI" },
    { name: "Md. Mamun Rashid", role: "GM at Ha-Meem Group", initials: "MR" },
    { name: "Md. Reyad rasha", role: "GM at Ha-Meem Group", initials: "RR" },
    { name: "Jeba Tasnia Jemmi", role: "GM at Ha-Meem Group", initials: "JJ" },
    { name: "Tasfia Tabassum", role: "GM at Ha-Meem Group", initials: "TT" },
    { name: "Tasnia Jemmi", role: "GM at Ha-Meem Group", initials: "TJ" },
    { name: "Tasfia Tabassum", role: "GM at Ha-Meem Group", initials: "TT" },
  ];

  const [selectedTab, setSelectedTab] = useState("all");

  const filteredPosts =
    selectedTab === "all"
      ? postsData
      : postsData.filter((post) => post.type === selectedTab);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="col-span-3 lg:col-span-2 space-y-4">
            {/* Start a post */}
            <Card className="shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={avatarimage.src} />
                    <AvatarFallback className="bg-purple-600 text-white">
                      U
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 bg-gray-100 rounded-full px-4 py-3 text-gray-500 cursor-pointer">
                    Start a post
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs
              defaultValue="all"
              className="w-full"
              onValueChange={setSelectedTab}
            >
              <TabsList className="p-1 flex gap-2">
                {["all", "job-post", "success-stories", "internship"].map(
                  (tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="rounded-lg cursor-pointer px-4 py-1 bg-white text-gray-700 border border-transparent data-[state=active]:border-blue-600"
                    >
                      {tab
                        .replace("-", " ")
                        .replace(/\b\w/g, (l) => l.toUpperCase())}
                    </TabsTrigger>
                  )
                )}
              </TabsList>

              {/* Cards */}
              <div className="mt-4 space-y-4">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="shadow-sm">
                    <CardContent className="p-0">
                      {/* Post Header */}
                      <div className="p-4 pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src="/placeholder.svg?height=48&width=48" />
                              <AvatarFallback className="bg-blue-600 text-white">
                                {post.name.slice(0, 2).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold text-gray-900">
                                {post.name}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {post.title}
                              </p>
                              <p className="text-xs text-gray-500">
                                {post.time}
                              </p>
                            </div>
                          </div>
                          <Badge className={post.badgeColor}>
                            {post.type
                              .replace("-", " ")
                              .replace(/\b\w/g, (l) => l.toUpperCase())}
                          </Badge>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="px-4 pb-3">
                        <p className="text-gray-700">
                          {post.content}{" "}
                          <span className="text-blue-600 cursor-pointer">
                            ... more
                          </span>
                        </p>
                      </div>

                      {/* Image */}
                      <div className="px-4 pb-3">
                        <div className="relative w-full h-80 rounded-lg overflow-hidden">
                          <Image
                            src={post.image}
                            alt="Post image"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Reactions */}
                      <div className="px-4 pb-3">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                              <Heart className="h-3 w-3 text-white fill-current" />
                            </div>
                            <span>
                              {post.likedBy} & {post.likesCount} Other
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="border-t px-4 py-2">
                        <div className="flex items-center justify-between">
                          <Button
                            variant="ghost"
                            className="flex items-center gap-2 text-gray-600 hover:bg-gray-50 flex-1"
                          >
                            <Heart className="h-4 w-4" />
                            Like
                          </Button>
                          <Button
                            variant="ghost"
                            className="flex items-center gap-2 text-gray-600 hover:bg-gray-50 flex-1"
                          >
                            <MessageCircle className="h-4 w-4" />
                            Comment
                          </Button>
                          <Button
                            variant="ghost"
                            className="flex items-center gap-2 text-gray-600 hover:bg-gray-50 flex-1"
                          >
                            <Link2 className="h-4 w-4" />
                            Copy Link
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Tabs>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-4 hidden lg:block">
            <Card className="shadow-sm">
              <CardContent className="p-4">
                <div className="space-y-4">
                  {users.map((user, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" />
                          <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-white text-xs">
                            {user.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm text-gray-900">
                            {user.name}
                          </p>
                          <p className="text-xs text-gray-600">{user.role}</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-400"
                      >
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 text-gray-600 border-gray-300"
                >
                  View More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
