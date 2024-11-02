import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { TriangleAlert } from "lucide-react";

interface SectionNotFoundProps {
  title: string;
  message: string;
}

const SectionNotFound: React.FC<SectionNotFoundProps> = ({
  title,
  message,
}) => {
  return (
    <div>
      <Alert>
        <TriangleAlert className="h-4 w-4" />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </div>
  );
};

export default SectionNotFound;
