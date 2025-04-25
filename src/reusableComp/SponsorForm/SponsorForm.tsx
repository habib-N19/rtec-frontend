import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const SponsorForm = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 sm:py-12">
      <Card className="border-none shadow-none">
        <CardHeader className="text-center space-y-3 pb-7">
          <CardTitle className="text-3xl sm:text-4xl font-bold">
            Become a <span className="text-orange-400">Sponsor</span>
          </CardTitle>
          <CardDescription className="text-gray-600 text-sm sm:text-base">
            Partner with our Career Club to shape the future of young
            professionals.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-5 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter name"
                  className="border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your mail"
                  className="border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-700">
                Send Us a Message
              </Label>
              <Textarea
                id="message"
                rows={6}
                placeholder="Enter message"
                className="border-gray-300 resize-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 min-h-[165px]"
              />
            </div>

            <div className="flex justify-center mt-6">
              <Button
                type="submit"
                className="px-8 py-5 md:py-6 text-sm rounded-sm bg-orange-400 hover:bg-orange-500 text-white font-medium"
              >
                Get in Touch
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SponsorForm;
