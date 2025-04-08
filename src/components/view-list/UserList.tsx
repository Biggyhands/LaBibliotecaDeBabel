import { User } from "@/lib/types/globals";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Mail, User as UserIcon } from "lucide-react";

type Props = {
	users: User[];
};

function UserList({ users }: Props) {
	if (!users.length) {
		return <div className='text-center p-8 text-gray-500'>No users found in the system.</div>;
	}

	return (
		<div className=' w-full px-4 overflow-y-auto my-42'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
				{users.map((user) => (
					<Card key={user.id} className='hover:shadow-lg transition-shadow hover:cursor-pointer'>
						<CardHeader className='flex flex-row items-center gap-4'>
							<div className='h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold'>
								{user.username.slice(0, 2).toUpperCase()}
							</div>
							<div>
								<CardTitle className='text-xl'>{user.username}</CardTitle>
								<div className='flex items-center gap-2'>
									<span
										className={`px-2 py-1 rounded-full text-xs font-semibold
                    ${
											user.role === "ADMIN"
												? "bg-primary text-primary-foreground"
												: "bg-secondary text-secondary-foreground"
										}`}
									>
										{user.role}
									</span>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<div className='space-y-4'>
								<div className='flex items-center gap-2 text-sm text-gray-600'>
									<Mail className='h-4 w-4' />
									<span>{user.email}</span>
								</div>
								<div className='flex items-center gap-2 text-sm text-gray-600'>
									<UserIcon className='h-4 w-4' />
									<span>ID: {user.id}</span>
								</div>
								<div className='flex items-center gap-2 text-sm text-gray-600'>
									<CalendarDays className='h-4 w-4' />
									<span>Joined: {new Date(user.createdAt).toLocaleDateString()}</span>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}

export default UserList;
