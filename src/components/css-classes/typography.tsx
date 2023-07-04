
const Typography = () => {
  return (
    <section style={{ maxWidth: '800px', margin: '0 auto'}}>
      <h2>Font Size</h2>
      <div className="rounded-8 bg bg-color p-24">
        <span className="text-xs">text-xs</span>
        <p className="text-xs mt-0!">The quick warp scientist</p>
        <span className="text-s">text-s</span>
        <p className="text-s mt-0!">The quick warp scientist</p>
        <span className="text-m">text-m</span>
        <p className="text-m mt-0!">The quick warp scientist</p>
        <span className="text-ml">text-ml</span>
        <p className="text-ml mt-0!">The quick warp scientist</p>
        <span className="text-l">text-l</span>
        <p className="text-l mt-0!">The quick warp scientist</p>
        <span className="text-xl">text-xl</span>
        <p className="text-xl mt-0!">The quick warp scientist</p>
        <span className="text-xxl">text-xxl</span>
        <p className="text-xxl mt-0!">The quick warp scientist</p>
        <span className="text-xxxl">text-xxxl</span>
        <p className="text-xxxl mt-0!">The quick warp scientist</p>
      </div>
      <h2>Font Style</h2>
      <div className="mx-24">
       <span className="italic">italic</span>
       <p className="italic">The quick smart warp scientist</p>
       <span className="not-italic">not-italic</span>
       <p className="not-italic">The quick smart warp scientist</p>
      </div>

      <h2>Font Variant Numeric [unsupported] </h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Scientist</th>
            <th># Coffee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Justina Matter</td>
            <td className="tabular-nums font-mono text-body leading-6">1 111 111</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Narve Hoops</td>
            <td className="tabular-nums font-mono text-body leading-6">4 444 444</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Dagny Calamity</td>
            <td className="tabular-nums font-mono text-body leading-6">88 888 888</td>
          </tr>
        </tbody>
      </table>

      <h2>Line Height [unsupported]</h2>
      <p className="text-body leading-6">The quick smart warp scientist -- text-body leading-6</p>
      <p className="text-body leading-5">The quick smart warp scientist -- text-body leading-5</p>
      <p className="text-body leading-4">The quick smart warp scientist -- text-body leading-4</p>
      <p className="text-body leading-3">The quick smart warp scientist -- text-body leading-3</p>
      <p className="text-body leading-2">The quick smart warp scientist -- text-body leading-2</p>
      <p className="text-body leading-1">The quick smart warp scientist -- text-body leading-1</p>
      <p className="text-body leading-[30]">The quick smart warp scientist -- text-body leading-[30]</p>

      <h2>Text Align</h2>
      <p className="text-left">The quick smart warp scientist -- text-left</p>
      <p className="text-center">The quick smart warp scientist -- text-center</p>
      <p className="text-right">The quick smart warp scientist -- text-right</p>
      <p className="text-justify">The quick smart warp scientist -- text-justify</p>
      <p className="text-start">The quick smart warp scientist -- text-start</p>
      <p className="text-end">The quick smart warp scientist -- text-end</p>
      <p className="text-left md:text-center">The quick smart warp scientist -- text-left md:text-center </p>


      <h2>Text Color</h2>
      <p className="s-text-default">The quick smart warp scientist -- s-text-default</p>
      <p className="s-text-subtle">The quick smart warp scientist -- s-text-subtle</p>
      <p className="s-text-placeholder">The quick smart warp scientist -- s-text-placeholder</p>
      <p className="s-text-inverted">The quick smart warp scientist -- s-text-inverted</p>
      <p className="s-text-inverted-subtle">The quick smart warp scientist -- s-text-inverted-subtle</p>
      <p className="s-text-link active:s-text-link-active hover:s-text-link-hover">The quick smart warp scientist -- s-text-link active:s-text-link-active hover:s-text-link-hover</p>
      <p className="s-text-link-disabled">The quick smart warp scientist -- s-text-link-disabled</p>
      <p className="s-text-positive">The quick smart warp scientist -- s-text-link-positive</p>
      <p className="s-text-negative">The quick smart warp scientist -- s-text-link-negative</p>
      <p className="s-text-default hover:s-text-positive">The quick smart warp scientist -- s-text-default hover:s-text-positive</p>

      <h2>Text Decoration</h2>
      <p className="underline">The quick smart warp scientist </p>
      <p className="line-through">The quick smart warp scientist</p>
      <p className="no-underline">The quick smart warp scientist</p>

      <h2>Text Transform</h2>
      <p className="normal-case ">The quick smart warp scientist -- normal-case</p>
      <p className="uppercase">The quick smart warp scientist -- uppercase</p>
      <p className="lowercase">The quick smart warp scientist -- lowercase</p>
      <p className="capitalize">The quick smart warp scientist -- capitalize</p>

      <h2>Text Overflow</h2>
      <p className="truncate">truncate -- Lorem ipsum dolor sit amet, consecteturadipiscingelit,seddoeiusmodtemporincididuntutlaboreetdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p className="text-ellipsis">text-ellipsis -- not working -- Lorem ipsum dolor sit amet, consecteturadipiscingelit,seddoeiusmodtemporincididuntutlaboreetdoloreconsecteturadipiscingelit,seddoeiusmodtemporincididuntutlaboreetdoloreconsecteturadipiscingelit,seddoeiusmodtemporincididuntutlaboreetdoloreconsecteturadipiscingelit,seddoeiusmodtemporincididuntutlaboreetdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p className="text-clip">text-clip -- not working -- Lorem ipsum dolor sit amet, consecteturadipiscingelit,seddoeiusmodtemporincididuntutlaboreetdoloreconsecteturadipiscingelit,seddoeiusmodtemporincididuntutlaboreetdoloreconsecteturadipiscingelit,seddoeiusmodtemporincididuntutlaboreetdoloreconsecteturadipiscingelit,seddoeiusmodtemporincididuntutlaboreetdoloreconsecteturadipiscingelit,seddoeiusmodtemporincididuntutlaboreetdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <h2>Vertical Align</h2>
      <table>
        <tbody>      
          <tr>
            <td className="align-baseline">align-baseline</td>
            <td className="align-top">align-top	</td>
            <td className="align-middle">align-middle</td>
            <td className="align-bottom">align-bottom</td>
            <td className="align-text-top">align-text-top</td>
            <td className="align-text-bottom">align-text-bottom</td>
            <td className="align-sub">align-sub</td>
            <td className="align-super">align-super</td>
            <td>
              <p>Just a long text</p>
              <p>
                There is a theory which states that if ever anyone discovers exactly
                what the Universe is for and why it is here, it will instantly disappear
                and be replaced by something even more bizarre and inexplicable.
              </p>
              <p>
                There is another theory which states that this has already happened.
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Whitespace</h2>
      <div className="whitespace-normal">whitespace-normal -- Hey everyone!

      It's almost 2042       and we still don't know if there is aliens living among us, or do we? Maybe the person writing this is an alien.

      You will never know.
      </div>
      <div className="whitespace-nowrap">whitespace-nowrap --Hey everyone!

      It's almost 2042       and we still don't know if there is aliens living among us, or do we? Maybe the person writing this is an alien.

      You will never know.</div>
      <div className="whitespace-pre">whitespace-pre -- Hey everyone!

      It's almost 2042       and we still don't know if there is aliens living among us, or do we? Maybe the person writing this is an alien.

      You will never know.</div>
      <div className="whitespace-pre-ine">whitespace-pre-line -- Hey everyone!

      It's almost 2042       and we still don't know if there is aliens living among us, or do we? Maybe the person writing this is an alien.

      You will never know.</div>
      <div className="whitespace-pre-wrap">whitespace-pre-wrap -- Hey everyone!

      It's almost 2042       and we still don't know if there is aliens living among us, or do we? Maybe the person writing this is an alien.

      You will never know.</div>

      <h2>Word Break</h2>
      <p className="break-normal">
        break-normal - A really long finnish word that has nothing to do with warp technology is LentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilasLentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilasLentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilas meaning Aeroplane jet turbine motor assistant mechanic non-commissioned officer in training.
      </p>
      <p className="break-words">
        break-words - A really long finnish word that has nothing to do with warp technology is LentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilasLentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilasLentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilas meaning Aeroplane jet turbine motor assistant mechanic non-commissioned officer in training.
      </p>
      <p className="break-all">
        break-all - A really long finnish word that has nothing to do with warp technology is LentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilasLentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilasLentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilas meaning Aeroplane jet turbine motor assistant mechanic non-commissioned officer in training.
      </p>


      <h2>Content [unsupported]</h2>
      <span className="before:content-['Before'] after:content-['after']"> TEST - before:content-['Before'] after:content-['after'] </span>
      <div className="before:content-['Hello_World!']">TEST - before:content-['Hello_World!'] </div>
      <div className="before:content-['Hello\_World!']">TEST - before:content-['Hello\_World!']</div>
      <div className="before:content-none">TEST - before:content-none</div>
    </section>
  )
}

export default Typography;
