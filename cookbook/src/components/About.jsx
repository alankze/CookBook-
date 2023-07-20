const About = () => {
  return (
    <about
      id="about"
      className="flex flex-col items-center gap-5  text-center bg-about p-[6rem] w-full"
    >
      <div>
        <h1 className="text-3xl  pb-10">About Us</h1>
        <span className="text-2xl">We Serve You Healthy & Fresh!!</span>
        <p className="font-mono text-xl">
          {" "}
          The cookbook contains many simple yet highly nutritious meals.
          <br></br>We provide Delicious and Authentic Food! Food brings
          different Culture together!We care for your health and taste with
          fresh Homemade Food. For more details,Contact Us:+49 1234567890.
        </p>
      </div>
    </about>
  );
};
export default About;
