import connectDB from "@/config/db";
import { uploadImage } from "@/lib/actions";
import { createNewProject } from "@/models/project";

export const POST = async (req) => {
  const { form, creatorId, token } = await req.json();
  try {
    await connectDB();
    const imageUrl = await uploadImage(form.image);
    form.image = imageUrl.url;

    const project = await createNewProject(form, creatorId, token);
    return new Response(JSON.stringify({ success: true, data: project }), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to Create a Project", { status: 500 });
  }
};
