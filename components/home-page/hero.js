import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/harsh.jpg"
          alt="An image showing Harsh"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&#39;m Harsh</h1>
      <p>
        I blog about web development on technologies
        <br /> like React Js and Node Js.
      </p>
    </section>
  );
}
export default Hero;
