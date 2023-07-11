
const Navigation = () => {
return (
	<nav>
		<ul className="flex flex-row justify-evenly items-center m-2 p-4">
			<li>
				<a href="/" className="">Home</a>
			</li>
			<li>
				<a href="/recipes" className="">Recipes</a>
			</li>
			<li>
				<a href="/recipes" className="text-3xl">LOGO</a>
			</li>
			<li>
				<a href="/about" className="">About</a>
			</li>
			<li>
				<a href="/contact" className="">Contact</a>
			</li>
		</ul>

	</nav>
)
}

export default Navigation