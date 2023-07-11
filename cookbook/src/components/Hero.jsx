import introImg from "../assets/hero.jpeg";

const Hero = () => {

return (

	<div className="flex flex-row justify-center items-center p-20">
				<div className="text-center px-7 m-4">
					<h2 className="font-bold text-xl py-2">Lorem ipsum dolor sit</h2>
					<p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed consequat accumsan, 
					sapien massa quisque aliquet ipsum et. In etiam iaculis libero, porttitor quam neque sit. Quisque sed 
					commodo quam nibh augue ante sed tortor. Quam pharetra molestie quis suspendisse
					ut. Tortor dictum urna, nisi, vitae leo varius elementum amet. 
					Nulla augue ultricies bibendum mauris ullamcorper bibendum. Feugiat enim felis, arcu mattis. 
					</p>
				</div>
				<div className="px-4 m-4" style={{width:"100%"}}>
					<img src={introImg} alt="intro"/>
				</div>
			</div>
)
}

export default Hero