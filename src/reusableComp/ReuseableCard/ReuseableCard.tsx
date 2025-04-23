import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ReuseableCardProps {
  title: string;
  club: string;
  date: string;
  imageUrl: string;
  showButton?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const ReuseableCard = ({
  title,
  club,
  date,
  imageUrl,
  showButton = true,
  buttonText = "Do Registration",
  onButtonClick,
  className,
}: ReuseableCardProps) => {
  return (
    <div
      className={cn("shadow-sm border  rounded-md overflow-hidden", className)}
    >
      {/* Image */}
      <div>
        <Image
          src={imageUrl}
          alt="Card Image"
          height={200}
          width={400}
          className="w-full object-cover h-[280px]"
        />
      </div>

      {/* Content */}
      <div className="px-4 pt-4 pb-3 bg-white space-y-3">
        {/* Club + Date */}
        <div className="flex items-center justify-between">
          <p className="font-semibold">{club}</p>
          <p className="text-sm text-gray-400">{date}</p>
        </div>

        {/* Title + Button */}
        <div className="flex items-center justify-between gap-4">
          <h6 className="text-xs md:text-xl text-gray-800 font-bold flex-1">
            {title}
          </h6>

          {showButton && (
            <Button
              className="bg-orange-400 text-white rounded-sm md:py-6 text-xs md:text-sm"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReuseableCard;
