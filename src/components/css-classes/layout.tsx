import dogsImg from '../../assets/dogs-unsplash.jpg';
import img1 from '../../assets/la01.jpg';
import img2 from '../../assets/la02.jpg';
import img3 from '../../assets/la03.jpg';
import img4 from '../../assets/la04.jpg';
import img5 from '../../assets/la05.jpg';
import img6 from '../../assets/la06.jpg';

const Layout = () => {
  return (
    <section style={{ maxWidth: '800px', margin: '0 auto'}}>
      <h3>Aspect Ratio</h3>
      <h4>aspect-ratio object-cover: </h4>
      <p>Not supported in warp yet</p>
      <div className="aspect-ratio">
        <img className="object-cover" src={dogsImg} alt="dogs" />
      </div>
      <h4>aspect-square object-cover: </h4>
      <p>Not supported in warp yet</p>
      <div className="aspect-square">
        <img className="object-cover" src={dogsImg} alt="dogs" />
      </div>
      <h4>aspect-video object-cover: </h4>
      <p>Not supported in warp yet</p>
      <div className="aspect-video">
        <img className="object-cover" src={dogsImg} alt="dogs" />
      </div>
      <h4>aspect-1/1 object-cover: </h4>
      <div className="aspect-1/1">
        <img className="object-cover" src={dogsImg} alt="dogs" />
      </div>
      <h4>aspect-4/3 object-cover: </h4>
      <div className="aspect-4/3">
        <img className="object-cover" src={dogsImg} alt="dogs" />
      </div>
      <h4>aspect-16/9 object-cover: </h4>
      <div className="aspect-16/9">
        <img className="object-cover" src={dogsImg} alt="dogs" />
      </div>
      <h4>aspect-3/1 object-cover: </h4>
      <div className="aspect-3/1">
        <img className="object-cover" src={dogsImg} alt="dogs" />
      </div>
      <h4>aspect-16/9 object-cover: </h4>
      <div className="aspect-16/9">
        <img className="object-cover" src={dogsImg} alt="dogs" />
      </div>
      <h4>iframe className="w-full aspect-16/9 md:aspect-1/1"</h4>
      <iframe className="w-full aspect-16/9 md:aspect-1/1" src={dogsImg}></iframe>

      <h3>Columns [unsupported]</h3>
      <p>columns-2 md:columns-3 gap-x-24:</p>
      <div className="columns-2 md:columns-3 gap-x-24">
        <img className="w-full" src={img1} />
        <img className="w-full" src={img2} />
        <img className="w-full" src={img3} />
        <img className="w-full" src={img4} />
        <img className="w-full" src={img5} />
        <img className="w-full" src={img6} />
      </div>

      <h3>Break After [unsupported]</h3>
      <div className="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p className="break-after-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>

      <h3>Break Before [unsupported]</h3>
      <div className="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p className="break-before-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>

      <h3>Break Inside [unsupported]</h3>
      <div className="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p className="break-inside-avoid-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>

      <h3>Box Sizing</h3>
      <p>box-border size=128px with p-16</p>
      <div className="box-border h-128 w-128 p-16 border-3 s-bg-primary-default s-border-positive-default" />
      <p>box-content size=128px with p-16</p>
      <div className="box-content h-128 w-128 p-16 border-3 s-bg-primary-default s-border-positive-default" />
      
      <h3>Display</h3>
      <p>Basic usage:</p>
      <div>
        When controlling the flow of text, using the CSS property
        <span className="inline">display: inline</span>
        will cause the text inside the element to wrap normally.
        <br/>
        While using the property <span className="inline-block">display: inline-block</span>
        will wrap the element to prevent the text inside from extending beyond its parent.
        <br/>
        Lastly, using the property <span className="block">display: block</span>
        will put the element on its own line and fill its parent.
      </div>
      <p>Flow Root:</p>
      <div className="flow-root ">
        <div className="my-16 ">Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"? Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.</div>
      </div>
      <div className="flow-root">
        <div className="my-16">Sure, go ahead, laugh if you want to. I've seen your type before: Flashy, making the scene, flaunting convention. Yeah, I know what you're thinking. What's this guy making such a big stink about old library books? Well, let me give you a hint, junior.</div>
      </div>
      <p>Flex</p>
      <div className="flex items-center">
        <div>Left div</div>
        <div>
          <div>div in Right div</div>
          <span>span in Right div</span>
        </div>
      </div>

      <p>Grid</p>
      <div>
        <div className="pd-bg-cyan-500 ex-box">01</div>
        <div className="pd-bg-cyan-500 ex-box">02</div>
        <div className="pd-bg-cyan-500 ex-box">03</div>
        <div className="pd-bg-cyan-500 ex-box">04</div>
        <div className="pd-bg-cyan-500 ex-box">05</div>
        <div className="pd-bg-cyan-500 ex-box">06</div>
        <div className="pd-bg-cyan-500 ex-box">07</div>
        <div className="pd-bg-cyan-500 ex-box">08</div>
      </div>
    </section>
  )

};

export default Layout;
