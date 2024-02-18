import connectDB from "@/config/db";
import Project from "@/models/project";

export const dynamic = "force-dynamic";


export async function GET(request: Request) {


    try {
        await connectDB();
    
        const project = await Project.find({}).populate("user");
    
        return new Response(JSON.stringify(project), {
          status: 200,
        });
      } catch (error) {
        return new Response("Failed to fetch all project", { status: 500 });
      }

}


