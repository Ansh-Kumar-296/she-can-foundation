import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function GET() {
  try {
    await connectDB();

    const admins = await Admin.find()
      .select("-password")
      .sort({ createdAt: -1 });

    return Response.json({
      success: true,
      admins,
    });
  } catch (error) {
    return Response.json(
      { success: false, message: "Failed to fetch admins" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    await connectDB();

    const { id } = await req.json();

    await Admin.findByIdAndDelete(id);

    return Response.json({
      success: true,
      message: "Admin deleted successfully",
    });
  } catch (error) {
    return Response.json(
      { success: false, message: "Failed to delete admin" },
      { status: 500 }
    );
  }
}