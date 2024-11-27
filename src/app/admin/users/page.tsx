import React from 'react'
import CustomBreadCrumb, {
  BreadrumbPathType,
} from "@/components/modules/CustomBreadCrumb";
import UsersTable from '@/components/templates/adminTables/UsersTable';

const Users = () => {
  const pagesPath: BreadrumbPathType[] = [
    { page: "Dashboard", path: "/admin" },
    { page: "Users", path: null },
  ];

  return (
    <section>
      <div className="flex items-center justify-center mb-4 md:justify-start">
        <CustomBreadCrumb pagesPath={pagesPath} />
      </div>
      <div>
        <UsersTable />
      </div>
    </section>
  );
}

export default Users