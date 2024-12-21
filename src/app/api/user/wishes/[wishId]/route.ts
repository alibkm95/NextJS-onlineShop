import connectToDB from "@/configs/DB";
import { authenticateUser } from "@/lib/auth.server";
import WishModel from "@/models/wish.model";
import { NextRequest } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { wishId: string } }
) {
  connectToDB();
  try {
    const { wishId } = params;
    const user = await authenticateUser(undefined);
    if (!user) {
      return Response.json(
        { success: false, msg: "Unauthorized!" },
        { status: 401 }
      );
    }
    const wish = await WishModel.findOne({ _id: wishId, user: user._id });
    if (!wish) {
      return Response.json(
        {
          success: false,
          msg: "Requested wish does not exist in your wish list.",
        },
        { status: 404 }
      );
    }
    await WishModel.deleteOne({ _id: wishId, user: user._id });
    return Response.json(
      { success: true, removedWishItem: wishId },
      { status: 200 }
    );
  } catch (error) {
    console.log("Unknown error:", error);
    return Response.json(
      { success: false, msg: "Unknown error" },
      { status: 500 }
    );
  }
}
