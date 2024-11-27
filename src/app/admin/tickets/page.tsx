import React from "react";
import CustomBreadCrumb, {
  BreadrumbPathType,
} from "@/components/modules/CustomBreadCrumb";
import TicketsTable from "@/components/templates/adminTables/TicketsTable";

const Tickets = () => {
  const pagesPath: BreadrumbPathType[] = [
    { page: "Dashboard", path: "/admin" },
    { page: "Tickets", path: null },
  ];

  return (
    <section>
      <div className="flex items-center justify-center mb-4 md:justify-start">
        <CustomBreadCrumb pagesPath={pagesPath} />
      </div>
      <div>
        <TicketsTable />
      </div>
    </section>
  );
};

export default Tickets;
