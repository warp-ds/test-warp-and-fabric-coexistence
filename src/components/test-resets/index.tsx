const TestResets = () => {
  return (
    <div>
      <p>The Fabric/Warp resets should affect the styling of some of the html tags used here. </p>
      <p>Clickable button element (button):</p>
      <button onClick={() => console.log('clicked')}>Click me</button>
      <p>(anchor):</p>
      <a href="#">Anchor Link</a>

      <hr/>

      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>Paragraph (p):</p>
      <p>Paragraph content</p>
      <p>Bold text (b):</p>
      <b>Bold content</b>
      <p>Strong text (strong):</p>
      <strong>Strong content</strong>
      <p>Summary for a details/accordion element(summary):</p>
      <summary>Summary content</summary>
      <p>Block-level quotation (blockquote):</p>
      <blockquote>
        <p>Quoted content:</p>
        <footer>Author</footer>
      </blockquote>
      <p>Inline element for indicating computer code (code):</p>
      <code>&lt;code&gt; HTML tag</code>
      <p>Keyboard input (kbd):</p>
      <kbd>Keyboard input content</kbd>
      <p>Sample output (samp):</p>
      <samp>Sample output content</samp>
      <p>Subscript text (sub):</p>
      <sub>Subscript content</sub>
      <p>Superscript text (sup):</p>
      <sup>Superscript content</sup>

      <hr/>

      <p>Single-line text input field (input):</p>
      <input type="text" placeholder="Enter your name"/>
      <p>Text area for multi-line input (textarea):</p>
      <textarea rows={4} cols={50}></textarea>

      <hr/>

      <p>Progress indicator (progress):</p>
      <progress value="50" max="100"></progress>
      <p>Figure element, used for images and captions (figure):</p>
      <figure>
        <img src="../../assets/dogs-unsplash.jpg" alt="Image description"/>
        <figcaption>Caption for the image</figcaption>
      </figure>
      <p>Fieldset for grouping form elements (fieldset) :</p>
      <fieldset>
        <legend>Legend for the fieldset</legend>
      </fieldset>

      <hr/>

      <p>Definition list (dl):</p>
      <dl>
        <dt>Term 1</dt>
        <dd>Definition 1</dd>
        <dt>Term 2</dt>
        <dd>Definition 2</dd>
      </dl>
      <p>Ordered list (ol):</p>
      <ol>
        <li>List item 1</li>
        <li>List item 2</li>
      </ol>
      <p>Unordered list (ul):</p>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
      <p>Menu list (menu):</p>
      <menu>
        <li>Menu item 1</li>
        <li>Menu item 2</li>
      </menu>
      <p>Option group  (optgroup):</p>
      <optgroup label="Group 1">
        <option>Option 1</option>
        <option>Option 2</option>
      </optgroup>
    </div>

  )
}

export default TestResets;
