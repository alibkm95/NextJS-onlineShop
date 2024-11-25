import CustomBreadCrumb, {
  BreadrumbPathType,
} from "@/components/modules/CustomBreadCrumb";
import CommentsTable from "@/components/templates/adminTables/CommentsTable";

const Comments = () => {
  const pagesPath: BreadrumbPathType[] = [
    { page: "Dashboard", path: "/admin" },
    { page: "Products", path: "/admin/products" },
    { page: "Comments", path: null },
  ];

  return (
    <section>
      <div className="flex items-center justify-center mb-4 md:justify-start">
        <CustomBreadCrumb pagesPath={pagesPath} />
      </div>
      <div>
        <CommentsTable />
      </div>
    </section>
  );
};

export default Comments;
