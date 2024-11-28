"use client";
import React, { useEffect, useState } from "react";
import CustomBreadCrumb, {
  BreadrumbPathType,
} from "@/components/modules/CustomBreadCrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { MessageSquareText, SquareFunction } from "lucide-react";
import TestimonialsTable from "@/components/templates/adminTables/TestimonialsTable";
import AutoDiscountForm from "@/components/modules/forms/AutoDiscountForm";

const Setting = () => {
  const pagesPath: BreadrumbPathType[] = [
    { page: "Dashboard", path: "/admin" },
    { page: "Settings", path: null },
  ];
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState<string>(
    (tab as string) || "testimonials"
  );

  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    }
  }, [tab]);

  return (
    <section>
      <div className="flex items-center justify-center mb-4 md:justify-start">
        <CustomBreadCrumb pagesPath={pagesPath} />
      </div>
      <div className="my-4 p-2 border rounded-lg">
        <Tabs
          defaultValue={activeTab}
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <div className="overflow-x-auto">
            <TabsList className="min-w-full mb-4">
              <TabsTrigger className="flex-1" value="testimonials">
                <div className="flex items-center justify-center gap-1">
                  <MessageSquareText size={15} />
                  Testimonials
                </div>
              </TabsTrigger>
              <TabsTrigger className="flex-1" value="autoDiscount">
                <div className="flex items-center justify-center gap-1">
                  <SquareFunction size={15} />
                  Auto discount generator
                </div>
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="testimonials">
            <TestimonialsTable />
          </TabsContent>
          <TabsContent value="autoDiscount">
            <AutoDiscountForm />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Setting;
