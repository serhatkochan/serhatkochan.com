import { NextRequest } from "next/server";
import OpengraphImage from 'components/OpengraphImage';

// Route segment config
export const runtime = "edge";

// Define a function to handle GET requests
export async function GET(req: NextRequest) {
    // Extract title from query parameters
    const { searchParams } = req.nextUrl;
    const title = searchParams.get("title") as string;
    const description = searchParams.get("description") as string;

    // Create an ImageResponse with dynamic content
    return await OpengraphImage({title, description})
}
