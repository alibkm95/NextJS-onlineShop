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
              <BreadcrumbItem key={index}>
                <BreadcrumbLink asChild>
                  <Link href={item.path}>{item.page}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem key={index}>
                <BreadcrumbPage>{item.page}</BreadcrumbPage>
              </BreadcrumbItem>
            )}
            {index + 1 < pagesPath.length && <BreadcrumbSeparator key={index} />}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadCrumb;
