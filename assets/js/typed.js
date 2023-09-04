import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

$('#subtitle').html('test3'+'<span></span>');
var tes= ["</br>Introduction:<br/>"+"site.tagline "];
  const typed2 = new useTypewriter('#subtitle span', {
  strings: tes,
  typeSpeed: 60,
  cursorChar:"_",
  loop:false
});