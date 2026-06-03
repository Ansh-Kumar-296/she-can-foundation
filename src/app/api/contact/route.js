import { connectDB } from "@/lib/mongodb";
import Submission from "@/models/Submission";

export async function POST(req) {
  try {
    await connectDB();

    const { name, email, message } = await req.json();

    await Submission.create({ name, email, message });

    return Response.json({
      success: true,
      message: "Form Submitted Successfully",
    });
  } catch (error) {
    return Response.json(
      { success: false, message: "Failed to submit form" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const submissions = await Submission.find().sort({ createdAt: -1 });

    return Response.json({
      success: true,
      submissions,
    });
  } catch (error) {
    return Response.json(
      { success: false, message: "Failed to fetch submissions" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    await connectDB();

    const { id } = await req.json();

    await Submission.findByIdAndDelete(id);

    return Response.json({
      success: true,
      message: "Submission deleted successfully",
    });
  } catch (error) {
    return Response.json(
      { success: false, message: "Failed to delete submission" },
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  try {
    await connectDB();

    const { id, status } = await req.json();

    if (!["Pending", "Approved", "Rejected"].includes(status)) {
      return Response.json(
        { success: false, message: "Invalid status" },
        { status: 400 }
      );
    }

    const updatedSubmission = await Submission.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    return Response.json({
      success: true,
      message: "Status updated successfully",
      submission: updatedSubmission,
    });
  } catch (error) {
    return Response.json(
      { success: false, message: "Failed to update status" },
      { status: 500 }
    );
  }
}