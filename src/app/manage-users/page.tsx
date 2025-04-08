import UserList from "@/components/view-list/UserList";

async function page() {
	const users = await fetch("http://localhost:3000/api/users");
	const data = await users.json();

	return <UserList users={data} />;
}

export default page;
