import Image from "next/image";
import myImage from "./me.png";
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <article className={styles.root}>
      <Image src={myImage} alt="about" loading="eager" width="250" height="250" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ea! Vel obcaecati facilis impedit a ad modi, mollitia voluptates! Natus dignissimos, autem, laborum nobis incidunt voluptatum, illo iusto iste recusandae id optio asperiores vero neque dolorum? Nesciunt placeat totam, possimus impedit sint at deleniti praesentium vel illum aperiam, adipisci consequuntur. Earum odit minus dicta! Expedita id corporis sed ab alias eos impedit, consequuntur minus? Dolorem incidunt illum numquam quam et nemo commodi consequuntur, pariatur nihil magnam molestiae. Consequuntur sequi possimus alias quibusdam, natus tempora porro minima quae iusto. Facilis dolores a velit nisi repudiandae, eaque labore non consequatur voluptates repellat qui mollitia nam eos ducimus doloribus porro sit alias assumenda esse reprehenderit id amet? Laboriosam dolorem eveniet accusantium et sequi distinctio alias facere esse quae a aperiam soluta tenetur modi perferendis, eum autem voluptatibus. Recusandae at dolorem eligendi voluptatum accusantium esse, libero, facere ducimus, sint architecto similique temporibus amet placeat inventore porro fugiat tempora voluptatibus. Ab, tempore architecto. Pariatur hic dignissimos, quibusdam officiis neque laudantium expedita odit sequi accusamus libero eum? Doloremque sit, similique itaque ex nisi blanditiis voluptates molestiae, facere earum ipsam reprehenderit laudantium perspiciatis autem. Qui atque incidunt veritatis. Consectetur architecto reprehenderit provident repellat tenetur alias. Ipsam, laborum.</p>
    </article>
);
}
