'use client';

import Footer from '@/components/app/footer';
import Header from '@/components/app/header';
import { Button } from '@/components/ui/button';
import useUserInfo from '@/hooks/useUserInfo';

export default function Home() {
  const {
    userInfo: { id, name, email },
  } = useUserInfo();

  return (
    <>
      <title>Risecruit | Home</title>
      <Header />
      <main>
        <div className="md:pt-14 px-5 md:px-0 max-w-[75rem] mx-auto">
          <Button
            onClick={async () => {
              const res = await fetch('/api/user');
              const data = await res.json();
              console.log(data);
            }}
          >
            Click
          </Button>
          <p>{id}</p>
          <p>{name}</p>
          <p>{email}</p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, adipisci.
          Libero excepturi, quia nobis, soluta assumenda quaerat aspernatur
          deleniti tenetur eum cum nulla ipsa numquam? Placeat totam at ex esse!
          Corrupti cupiditate maxime eveniet aliquam voluptates odit soluta
          explicabo facilis atque sapiente! Aliquam doloremque natus nostrum
          aspernatur tenetur sit. Explicabo reiciendis quibusdam ducimus
          repudiandae dolorum facere quas adipisci dignissimos eos! Eaque
          nostrum quibusdam blanditiis quo voluptates omnis natus in vitae iure
          esse sequi nihil et hic nobis, debitis laboriosam vero, dicta
          repellendus deserunt laborum! Maiores pariatur odit exercitationem
          impedit debitis. Non nisi dicta ut animi fugit harum repellat quisquam
          iste tempore, sed accusamus incidunt quos ipsa iure corporis eveniet
          facilis impedit? Beatae libero est reprehenderit doloribus delectus
          distinctio modi ducimus. Ipsum nemo adipisci dolorem architecto
          voluptate sunt provident, minus illum, quis et possimus cumque ipsam
          est tenetur deleniti expedita quam fugit pariatur saepe nihil
          repellendus aut, vel velit! Illo, quae. Ipsa odit ratione possimus
          repellat nobis quas mollitia, culpa totam nostrum esse aperiam ut cum
          asperiores enim inventore accusantium odio. Hic ad quia veritatis
          placeat officiis itaque ex voluptates magni? Eum delectus dolor
          voluptates officia, tempore quidem natus hic accusamus, dolorum
          assumenda repellendus animi iste facere odio aliquid saepe in? Placeat
          omnis voluptatibus reprehenderit non sint ipsa est vitae labore.
          Quaerat natus dolorem doloribus consequuntur iste tempore impedit quas
          autem ex quae, esse, excepturi culpa itaque suscipit reiciendis
          temporibus? Earum in sunt commodi asperiores! Delectus possimus
          impedit dolore placeat ab. Quam, ex aperiam. Iure optio reiciendis est
          nemo aut dolores ipsa tempora illo numquam! Voluptate, numquam nulla!
          Assumenda iste natus ex non, quod ipsa incidunt earum eius itaque
          molestias blanditiis! Illum eum pariatur non rerum expedita sunt nihil
          ex aliquid accusamus vitae similique ullam, illo aperiam nostrum
          doloremque commodi. Pariatur eligendi temporibus totam sunt quis minus
          voluptas est quas dignissimos! Voluptatum repudiandae ab libero ad!
          Voluptas eligendi beatae ut quo commodi fugit neque consequatur eaque
          laboriosam delectus. Dignissimos exercitationem sunt magnam deserunt,
          consequuntur a, perferendis, officiis reprehenderit recusandae nihil
          quod. Veritatis, eaque animi! Itaque nisi expedita eveniet doloremque
          reprehenderit ipsum atque cupiditate non aliquid numquam vel, tenetur
          labore ullam a in at natus assumenda dignissimos perspiciatis quasi
          asperiores quidem consectetur. Reprehenderit excepturi, aperiam odit
          ex debitis architecto doloribus repellendus minus perferendis ad
          facere officiis laboriosam asperiores possimus expedita saepe
          inventore magni provident totam. Quas velit doloribus magnam corporis
          maxime sit? Laborum molestiae quia saepe? Corporis dolor autem facere
          perferendis non in, veniam distinctio iste. Ex pariatur, placeat
          sapiente, sit voluptatem facere perferendis nisi error quo alias ullam
          accusamus, esse tempore. Error laudantium a rerum amet necessitatibus
          facere similique quibusdam sed adipisci, ex iure aspernatur, officia
          aut esse voluptatibus. Optio placeat accusantium mollitia consequatur
          corporis impedit dolorum enim ab qui quos? Laborum earum est,
          praesentium recusandae voluptatibus deserunt reiciendis et delectus
          sequi quas nesciunt beatae alias tempore eum fugit asperiores aut
          animi cupiditate, repudiandae eius non dolorem! Sapiente rerum culpa
          voluptatem. Ex, suscipit rerum. Aliquam repellat modi, accusantium
          magnam ea suscipit at deleniti est iste, odio dolorum atque veniam
          eveniet provident dolor rem expedita illum necessitatibus delectus
          libero assumenda dolores? Fugit! Repudiandae reprehenderit autem saepe
          doloribus perferendis odio quisquam sapiente consequatur ipsam neque
          illo quidem quia optio debitis doloremque a officiis beatae,
          consectetur minus aliquam ratione repellat quasi nostrum? Repudiandae,
          aspernatur? Mollitia, natus ex unde repellendus suscipit nam? Nesciunt
          voluptate facere adipisci culpa, quo labore fugiat tempore ipsa minus
          eius natus officiis dolorem fugit ea commodi excepturi vel totam!
          Eligendi, facere? Ullam amet consequatur laboriosam dolore nulla illo
          enim nisi iure repellendus? Aliquam sapiente consectetur laboriosam
          nostrum rerum magnam, laudantium illo, error culpa ullam numquam
          quisquam quibusdam quos voluptas ab laborum! Eaque qui numquam
          recusandae dicta voluptatibus modi, quaerat enim iste suscipit quod
          repellat dolorum ad voluptate accusamus fugit impedit facilis nobis
          corporis, et nesciunt nulla. Tenetur eius quibusdam repellendus nisi.
          Iure magnam similique sunt! Eveniet quaerat corporis ullam at,
          quibusdam facilis, modi velit magni tempora sapiente iure, saepe sed
          eius esse dicta culpa soluta et deserunt architecto omnis alias
          aliquid. Iusto mollitia sapiente sequi? Sapiente corporis temporibus
          minima, molestiae est repellendus voluptas magni illo, atque impedit
          id veritatis consectetur pariatur non necessitatibus laborum. Corporis
          earum aliquid, esse totam nesciunt sequi. Quibusdam ex nobis
          laudantium velit a odio ducimus eveniet fugiat nemo officia? Suscipit
          autem dolorum quia voluptate nihil non eveniet, harum voluptatem fugit
          cumque aliquid ducimus atque natus tempore deleniti? Nisi eveniet
          soluta id distinctio repudiandae sed obcaecati dolore provident, totam
          cum laudantium ducimus rem, maxime facilis tempore sequi, asperiores
          doloribus exercitationem. Excepturi veritatis sunt iusto ipsum hic
          aperiam ex! Dicta cumque laboriosam nobis dolorum, exercitationem,
          perspiciatis maiores voluptate quia quas doloribus ex nulla mollitia
          earum dolorem nam. Debitis, odio? Quas excepturi corrupti veniam
          numquam, quibusdam dolorem autem commodi doloremque! Incidunt quo unde
          placeat perferendis sequi maxime repudiandae mollitia, autem error,
          quam magnam ad voluptas! Corporis, ipsa! Veniam eligendi, ea sed
          incidunt sint odio, ad iusto tempore voluptatibus doloribus enim.
          Officia exercitationem ullam, quasi est necessitatibus dolorem autem
          neque illo, laboriosam dolorum, consectetur animi beatae nisi rem et
          recusandae accusamus quo! Assumenda reiciendis iusto explicabo sint
          asperiores, id adipisci voluptatibus! Dolor eos eligendi delectus
          assumenda qui atque tempore vel perspiciatis illum sunt nam hic
          itaque, dicta, ducimus iure rerum, sint doloremque reprehenderit?
          Ipsum modi odit molestias sit rerum incidunt necessitatibus. Quam sit
          est saepe perferendis quisquam voluptatem eius unde nisi ad? Quasi
          distinctio quidem aliquam dolores eius. Facere voluptas ad dolores aut
          sunt? Consequuntur, ipsam dignissimos. Ipsam voluptatibus voluptatem
          rerum? Ipsam eveniet perferendis eligendi beatae quis earum esse
          repudiandae in consequuntur dignissimos dolorem tempore reprehenderit,
          adipisci consectetur nostrum a, eos pariatur. Molestiae nulla
          praesentium voluptate corrupti ad, tenetur recusandae officia. Sequi
          ipsum assumenda exercitationem voluptatem beatae debitis aspernatur
          placeat ut illum earum tempore maiores, labore ullam laboriosam facere
          voluptates facilis reiciendis sed magni et eum accusamus! Ullam
          recusandae pariatur magni. Laborum id, ad distinctio assumenda beatae,
          placeat corporis asperiores, voluptas labore ducimus praesentium unde?
          Aliquid beatae tempore labore odit provident aut illum deleniti.
          Labore molestias nobis ullam tenetur dignissimos molestiae! Nemo
          labore autem enim laboriosam tempore, eligendi ab repellendus sit non
          vel nam voluptatibus? Culpa iure accusamus, eligendi ut cumque
          quisquam harum, nemo natus saepe iusto maxime praesentium fuga
          quibusdam! Consequatur suscipit incidunt eius quibusdam? Facere
          ratione optio fugit libero voluptatum expedita sunt autem. Repudiandae
          distinctio, sapiente, deserunt doloremque cumque doloribus laborum
          assumenda corporis odit velit porro aut eaque adipisci! Expedita,
          voluptas nihil! Modi dolores est perspiciatis officia, enim optio
          porro, a architecto repudiandae exercitationem quae ullam numquam,
          doloribus animi! Obcaecati, ab. Reiciendis nobis laborum consectetur
          praesentium deleniti porro illo. Minima harum possimus, cum ut
          doloribus unde, facilis voluptatem repudiandae, non dolor delectus
          perspiciatis fuga cupiditate? Quasi, dolores illum dolore repudiandae
          impedit tenetur placeat beatae perferendis. Deserunt quis dolor
          commodi? Recusandae ratione minus mollitia explicabo natus maiores
          tempora voluptate tenetur facere officia error, quidem fugiat optio
          odio officiis, quia similique qui delectus porro quam dolorum et.
          Magnam cumque odit odio! Labore eveniet doloremque temporibus,
          similique fuga ipsam mollitia, voluptatem harum error blanditiis
          rerum, eius illum eum exercitationem dolore. Facilis pariatur
          assumenda quo aliquid nesciunt sed sapiente, atque in aliquam ad.
          Itaque ut, libero fugit dolores maiores, assumenda inventore ipsam,
          iure ducimus magnam at quis. Assumenda consequatur unde accusamus
          possimus architecto nesciunt, doloribus quis explicabo, dolorem iste
          distinctio suscipit? Aut, obcaecati. Ut officia a quaerat cum rerum.
          Maxime, delectus consequuntur atque harum sint sunt voluptates veniam
          voluptatem ut, qui in rerum. Eaque sed harum voluptatem nulla
          consectetur perspiciatis maxime necessitatibus dolorem. Iure modi vero
          mollitia soluta! Velit nobis similique, id consequuntur sit quos
          explicabo ratione ut perspiciatis blanditiis. Dicta nesciunt, delectus
          est libero ut facere numquam soluta reprehenderit. Aliquam, impedit
          sequi. Modi iusto earum debitis officia possimus dolores voluptas
          ipsam, quia quaerat reprehenderit voluptatum nihil autem dolore, fugit
          id officiis consectetur magnam? Ducimus nemo unde quam fuga modi rem
          saepe dicta! Hic sit pariatur non maiores minima natus perspiciatis
          deserunt odit, omnis cumque fuga quisquam vel. Dolorem atque unde
          dolorum ratione consequuntur rerum accusamus officia asperiores
          nostrum, mollitia, debitis maxime minima! Atque molestias optio, ad
          officiis veniam qui quae neque nostrum et! Nemo adipisci officiis,
          unde inventore, reiciendis labore consectetur praesentium ullam
          quidem, rem ut repudiandae laudantium rerum culpa neque corporis.
          Aliquid, vero consectetur. Voluptate, fuga adipisci voluptatum
          laudantium numquam quisquam, repellendus quaerat ipsam est ea quae
          nemo. Error molestiae sunt vel, tenetur, libero consectetur optio
          numquam, quis dolorum obcaecati accusantium? Temporibus quam fugiat ea
          aliquid obcaecati saepe suscipit dolores, a ratione dolorem velit
          blanditiis expedita neque impedit, laboriosam maxime aliquam ut
          accusamus aut distinctio nam, perspiciatis dolore? Quidem, ullam
          autem. Excepturi magnam, itaque voluptate architecto maxime aspernatur
          nesciunt quos non, eligendi sunt beatae quisquam voluptates illo?
          Consequatur placeat sunt sint, atque fugiat incidunt ducimus, fuga
          explicabo nulla ipsa, sed ex. Eligendi veniam asperiores, laudantium
          ipsam sequi quisquam molestias quae ipsum doloribus, iste suscipit
          ipsa repellendus eaque ut nobis fugiat ab mollitia aliquam omnis nemo
          reiciendis. Voluptatibus rem magni tempora perspiciatis. Fugit,
          officiis molestiae. Ex molestias hic nam nostrum autem. Alias
          temporibus placeat rem ratione ex excepturi harum, est nemo
          exercitationem quas soluta eveniet incidunt dolorem quam. Numquam et
          rerum dolorum.
        </div>
      </main>
      <Footer />
    </>
  );
}
