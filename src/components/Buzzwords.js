import React from 'react';
import '../styles/App.scss';

function Buzzwords() {
  return (
    <section id="buzzwords">
        <h2>Buzzwords</h2>
        <div class="filter-tool" aria-role="">
            <p>filter by:</p>
            <ul>
                <li class="software">software</li>
                <li class="development">development</li>
                <li class="etc">etc.</li>
            </ul>
        </div>
        <ul>
            <li class="software">Figma</li>
            <li class="development">JavaScript</li>
            <li class="software">Adobe Illustrator</li>
            <li class="etc">Web Accessibility</li>
            <li class="development">HTML</li>
            <li class="software">Invision</li>
            <li class="development">CSS</li>
            <li class="etc">Public Speaking</li>
            <li class="development">Sass</li>
            <li class="development">AngularJS</li>
            <li class="software">Adobe Photoshop</li>
            <li class="development">XAML</li>
            <li class="software">Adobe XD</li>
            <li class="etc">Digital Illustration</li>
            <li class="development">Xamarin.Forms</li>
            <li class="etc">Digital Photography</li>
            <li class="software">Adobe Lightroom</li>
            <li class="development">React</li>
            <li class="software">Adobe InDesign</li>
            <li class="development">TypeScript</li>
            <li class="software">Adobe Premiere</li>
            <li class="software">Adobe After Effects</li>
            <li class="development">LESS</li>
        </ul>
    </section>
  );
}

export default Buzzwords;