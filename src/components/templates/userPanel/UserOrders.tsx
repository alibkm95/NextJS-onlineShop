import CustomBadge from "@/components/modules/CustomBadge";
import SectionNotFound from "@/components/modules/SectionNotFound";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import OrderDetailModal from "./OrderDetailModal";

const UserOrders = () => {
  return (
    <div className="p-2 min-h-64">
      <SectionNotFound
        title="Not found!"
        message="There is no previouse order!"
      />
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableCaption>All previous orders</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-8">#</TableHead>
              <TableHead className="min-w-[100px]">Order</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>53b1c579bdf3de74f76bdac9</TableCell>
              <TableCell>2024/07/08</TableCell>
              <TableCell>
                <CustomBadge
                  badgeText="Pending"
                  className="bg-amber-500/20 border-amber-500 text-amber-500 text-xs"
                />
              </TableCell>
              <TableCell>$250.00</TableCell>
              <TableCell>
                <OrderDetailModal />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>53b1c579bdf3de74f76bdac9</TableCell>
              <TableCell>2024/07/08</TableCell>
              <TableCell>
                <CustomBadge
                  badgeText="Completed"
                  className="bg-blue-500/20 border-blue-500 text-blue-500 text-xs"
                />
              </TableCell>
              <TableCell>$250.00</TableCell>
              <TableCell>
                <OrderDetailModal />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>53b1c579bdf3de74f76bdac9</TableCell>
              <TableCell>2024/07/08</TableCell>
              <TableCell>
                <CustomBadge
                  badgeText="Canceled"
                  className="bg-destructive/20 border-destructive text-destructive text-xs"
                />
              </TableCell>
              <TableCell>$250.00</TableCell>
              <TableCell>
                <OrderDetailModal />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>53b1c579bdf3de74f76bdac9</TableCell>
              <TableCell>2024/07/08</TableCell>
              <TableCell>
                <CustomBadge
                  badgeText="Shipping"
                  className="bg-emerald-600/20 border-emerald-600 text-emerald-600 text-xs"
                />
              </TableCell>
              <TableCell>$250.00</TableCell>
              <TableCell>
                <OrderDetailModal />
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default UserOrders;
