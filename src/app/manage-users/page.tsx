import UserList from "@/components/view-list/UserList";

export default async function page() {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
	const users = await fetch(`${baseUrl}/api/users`, {
		// Add cache options for better performance
		cache: "no-store", // or 'force-cache' if you want to cache the response
		// Add next options for server-side requests
		next: {
			revalidate: 60, // Revalidate every 60 seconds
		},
	});
	const data = await users.json();

	return <UserList users={data} />;
}
