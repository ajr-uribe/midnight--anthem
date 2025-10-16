import { getAllSongs } from "../../../lib/songs";
import { NextResponse } from "next/server";

export async function GET() {
	const songs = getAllSongs();
	return NextResponse.json(songs);
}
