import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function FilterBar({
	search,
	setSearch,
	genre,
	setGenre,
	genres,
}: {
	search: string;
	setSearch: (s: string) => void;
	genre: string;
	setGenre: (g: string) => void;
	genres: string[];
}) {
	return (
		<div className='bg-white p-4 rounded-lg shadow-sm mb-6 sticky top-0 z-10'>
			<div className='flex flex-col md:flex-row gap-4'>
				<div className='relative flex-1'>
					<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
					<Input
						placeholder='Search by title or author...'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className='pl-10 w-full'
					/>
				</div>
				<div className='flex gap-2 flex-wrap'>
					<Button
						variant={genre === "" ? "default" : "outline"}
						onClick={() => setGenre("")}
						className='text-sm'
					>
						All
					</Button>
					{genres.map((g) => (
						<Button
							key={g}
							variant={genre === g ? "default" : "outline"}
							onClick={() => setGenre(g)}
							className='text-sm'
						>
							{g}
						</Button>
					))}
				</div>
			</div>
		</div>
	);
}

export default FilterBar;
