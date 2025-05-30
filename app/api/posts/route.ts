import { getPublishedPosts } from '@/lib/notion';
import { NextResponse, type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const tag = searchParams.get('tag') || undefined;
  const sort = searchParams.get('sort') || undefined;
  const pageSize = searchParams.get('pageSize')
    ? parseInt(searchParams.get('pageSize')!)
    : undefined;
  const startCursor = searchParams.get('startCursor') || undefined;

  const response = await getPublishedPosts({ tag, sort, pageSize, startCursor });

  return NextResponse.json(response);
}
