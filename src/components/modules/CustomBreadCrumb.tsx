import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export type BreadrumbPathType = {
  page: string;
  path?: string | null | undefined;
};

type CustomBreadCrumbPropsType = {
  pagesPath: BreadrumbPathType[];
};

const CustomBreadCrumb = ({ pagesPath }: CustomBreadCrumbPropsType) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pagesPath.map((item, index) => (
          <>
            {item.path ? (
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={item.path}>{item.page}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem>
                <BreadcrumbPage>{item.page}</BreadcrumbPage>
              </BreadcrumbItem>
            )}
            {index + 1 < pagesPath.length && <BreadcrumbSeparator />}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadCrumb;
