
const Navigation = () => {
return (
	<nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  p-2">
		<ul className="flex flex-row justify-evenly items-center">
			<li>
				<a href="/" className="hover:bg-black hover:text-white">Home</a>
			</li>
			<li>
				<a href="/recipes" className="hover:bg-black hover:text-white">Recipes</a>
			</li>
			<li>
				<a href="/about" className="hover:bg-black hover:text-white">About</a>
			</li>
			<li>
				<a href="/contact" className="hover:bg-black hover:text-white">Contact</a>
			</li>
		</ul>

	</nav>
)
}

export default Navigation