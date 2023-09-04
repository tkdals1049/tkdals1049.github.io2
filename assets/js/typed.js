import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

$('#subtitle').html('test2'+'<span></span>');
var tes= ["</br>Introduction:<br/>"+"site.tagline "];
const words = ["해적왕이야", "멋진 개발자가 될 거야"];
const { text } = useTypewriter({
    words,
    loop: 0, 
    cursorStyle: '|',
});
<Contain>
        <Text>
            나는
            <span>
                {text}
            </span>
            <Cursor />
            <h5>velog.io</h5>
        </Text>
    </Contain>
  const typed2 = new useTypewriter('#subtitle span', {
  strings: tes,
  typeSpeed: 60,
  cursorChar:"_",
  loop:false
});