function App() {
  const [isShow1, setIsShow1] = React.useState(false);
  const handleToggle1 = () => setIsShow1(!isShow1);

  const [isShow2, setIsShow2] = React.useState(false);
  const handleToggle2 = () => setIsShow2(!isShow2);

  const [isShow3, setIsShow3] = React.useState(false);
  const handleToggle3 = () => setIsShow3(!isShow3);

  const [isShow4, setIsShow4] = React.useState(false);
  const handleToggle4 = () => setIsShow4(!isShow4);

  const [isShow5, setIsShow5] = React.useState(false);
  const handleToggle5 = () => setIsShow5(!isShow5);

  // const [isShow, setIsShow] = React.useState(false);
  // const handleToggle = () => setIsShow(!isShow);

  return (
    <div className="container">
      <h1>Accordion in Figma</h1>
      <div className="body">
        <div className="box1">
          <h3 onClick={handleToggle1}>Section Title</h3>
          {isShow1 && (
            <p>
              Lorem ipsum dolor sit amet consectetur. Cursus nisl purus tempor
              sapien est. Integer sed viverra pellentesque orci erat viverra
              hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci
              tellus purus quis. Venenatis semper ac volutpat nec semper
              tincidunt. Leo ultricies felis elementum rhoncus tristique nulla
              justo. Vitae consectetur phasellus magna tellus. Feugiat id
              maecenas auctor ut sit dui pretium orem ipsum dolor sit amet
              consectetur. Cursus nisl purus tempor sapien est. Integer sed
              viverra pellentesque orci erat viverra hendrerit duis cursus. Diam
              pellentesque commodo arcu nunc orci tellus purus quis. Venenatis
              semper ac volutpat nec semper tincidunt. Leo ultricies felis
              elementum rhoncus tristique nulla justo. Vitae consectetur
              phasellus magna tellus. Feugiat id maecenas auctor ut sit dui
              pretium.
            </p>
          )}
        </div>
        <div className="box1">
          <h3 onClick={handleToggle2}>Section Title</h3>
          {isShow2 && (
            <p>
              Lorem ipsum dolor sit amet consectetur. Cursus nisl purus tempor
              sapien est. Integer sed viverra pellentesque orci erat viverra
              hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci
              tellus purus quis. Venenatis semper ac volutpat nec semper
              tincidunt. Leo ultricies felis elementum rhoncus tristique nulla
              justo. Vitae consectetur phasellus magna tellus. Feugiat id
              maecenas auctor ut sit dui pretium orem ipsum dolor sit amet
              consectetur. Cursus nisl purus tempor sapien est. Integer sed
              viverra pellentesque orci erat viverra hendrerit duis cursus. Diam
              pellentesque commodo arcu nunc orci tellus purus quis. Venenatis
              semper ac volutpat nec semper tincidunt. Leo ultricies felis
              elementum rhoncus tristique nulla justo. Vitae consectetur
              phasellus magna tellus. Feugiat id maecenas auctor ut sit dui
              pretium.
            </p>
          )}
        </div>
        <div className="box1">
          <h3 onClick={handleToggle3}>Section Title</h3>
          {isShow3 && (
            <p>
              Lorem ipsum dolor sit amet consectetur. Cursus nisl purus tempor
              sapien est. Integer sed viverra pellentesque orci erat viverra
              hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci
              tellus purus quis. Venenatis semper ac volutpat nec semper
              tincidunt. Leo ultricies felis elementum rhoncus tristique nulla
              justo. Vitae consectetur phasellus magna tellus. Feugiat id
              maecenas auctor ut sit dui pretium orem ipsum dolor sit amet
              consectetur. Cursus nisl purus tempor sapien est. Integer sed
              viverra pellentesque orci erat viverra hendrerit duis cursus. Diam
              pellentesque commodo arcu nunc orci tellus purus quis. Venenatis
              semper ac volutpat nec semper tincidunt. Leo ultricies felis
              elementum rhoncus tristique nulla justo. Vitae consectetur
              phasellus magna tellus. Feugiat id maecenas auctor ut sit dui
              pretium.
            </p>
          )}
        </div>
        <div className="box1">
          <h3 onClick={handleToggle4}>Section Title</h3>
          {isShow4 && (
            <p>
              Lorem ipsum dolor sit amet consectetur. Cursus nisl purus tempor
              sapien est. Integer sed viverra pellentesque orci erat viverra
              hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci
              tellus purus quis. Venenatis semper ac volutpat nec semper
              tincidunt. Leo ultricies felis elementum rhoncus tristique nulla
              justo. Vitae consectetur phasellus magna tellus. Feugiat id
              maecenas auctor ut sit dui pretium orem ipsum dolor sit amet
              consectetur. Cursus nisl purus tempor sapien est. Integer sed
              viverra pellentesque orci erat viverra hendrerit duis cursus. Diam
              pellentesque commodo arcu nunc orci tellus purus quis. Venenatis
              semper ac volutpat nec semper tincidunt. Leo ultricies felis
              elementum rhoncus tristique nulla justo. Vitae consectetur
              phasellus magna tellus. Feugiat id maecenas auctor ut sit dui
              pretium.
            </p>
          )}
        </div>
        <div className="box1">
          <h3 onClick={handleToggle5}>Section Title</h3>
          {isShow5 && (
            <p>
              Lorem ipsum dolor sit amet consectetur. Cursus nisl purus tempor
              sapien est. Integer sed viverra pellentesque orci erat viverra
              hendrerit duis cursus. Diam pellentesque commodo arcu nunc orci
              tellus purus quis. Venenatis semper ac volutpat nec semper
              tincidunt. Leo ultricies felis elementum rhoncus tristique nulla
              justo. Vitae consectetur phasellus magna tellus. Feugiat id
              maecenas auctor ut sit dui pretium orem ipsum dolor sit amet
              consectetur. Cursus nisl purus tempor sapien est. Integer sed
              viverra pellentesque orci erat viverra hendrerit duis cursus. Diam
              pellentesque commodo arcu nunc orci tellus purus quis. Venenatis
              semper ac volutpat nec semper tincidunt. Leo ultricies felis
              elementum rhoncus tristique nulla justo. Vitae consectetur
              phasellus magna tellus. Feugiat id maecenas auctor ut sit dui
              pretium.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ReacDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

root.render(<App />);
