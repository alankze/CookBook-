//import { createClient } from 'contentful';
import * as contentful from 'contentful';
import { useEffect, useState } from "react";

const Hero = () => {

const [hero, setHeroSection] = useState(null);

const client = contentful.createClient({
	space: import.meta.env.VITE_SPACE_ID,
	environment: import.meta.env.VITE_ENVIRONMENT_NAME, // defaults to 'master' if not set
	accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

useEffect(()=> {
	client
	.getEntries({ content_type: 'kitchenCarousel' })
	.then(response => setHeroSection(response.items))
	.catch(console.error);
}, []);

console.log(hero);
return (
	<>
{hero && 
	hero.map( (item) => (
<div className="flex flex-row justify-center items-center p-20" key={item.sys.id}>
		<div className="text-center px-7 m-4" >
			<h2 className="font-bold text-xl py-2">{item.fields.title}</h2>
			<p>{item.fields.description}</p>
		</div>
		<div className="px-4 m-4" style={{width:"100%"}}>
			<img src={item.fields.image.fields.file.url} alt={item.fields.title}/>
		</div>
	</div>
	))
}
	</>
)
}

export default Hero