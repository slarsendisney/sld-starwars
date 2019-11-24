import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Music from "../music/imperialMarch.json";
import Tone from "tone";

export default function Start() {
  const playSong = () => {
    Tone.Transport.bpm.value = Music.bpm;
    var synth = new Tone.Synth().toMaster();
    const synthPart = new Tone.Sequence(
      function(time, note) {
        synth.triggerAttackRelease(note, "10hz", time);
      },
      Music.notes,
      "4n"
    );

    synthPart.humanise = "32n";
    synthPart.start();
    Tone.Transport.loop = false;
    Tone.Transport.start();
  };
  return (
    <Layout>
      <SEO title="STAR WARS" />
      <div className="row">
        <div className="col-xs-12">
          <pre className="margin-auto" style={{ width: 420 }}>
            <code className="is-orange">{`
                         .-.
                         |_:_|
                        /(_Y_)\\
   .                   ( \\/M\\/ )
    '.               _.'-/'-'\\-'._
      ':           _/.--'[[[[]'--.\\_
        ':        /_'  : |::"| :  '.\\
          ':     //   ./ |oUU| \\.'  :\\
            ':  _:'..' \\_|___|_/ :   :|
              ':.  .'  |_[___]_|  :.':\\
               [::\\ |  :  | |  :   ; : \\
                '-'   \\/'.| |.' \\  .;.' |
                |\\_    \\  '-'   :       |
                |  \\    \\ .:    :   |   |
                |   \\    | '.   :    \\  |
                /       \\   :. .;       |
               /     |   |  :__/     :  \\\\
              |  |   |    \\:   | \\   |   ||
             /    \\  : :  |:   /  |__|   /|
             |     : : :_/_|  /'._\\  '--|_\\
             /___.-/_|-'   \\  \\
                            '-'

             ------------------------------
               Imperial March with tone.js
             ------------------------------
  `}</code>
          </pre>
        </div>
        <div className="col-xs-12 text-align-center">
          <button
            className="btn"
            onClick={() => {
              playSong();
            }}
          >
            PLAY
          </button>

          <h4>
            This was a Sunday afternoon project into{" "}
            <a className="link" href="https://tonejs.github.io/">
              tone.js
            </a>
            . The code's messy but if you want to see it you can{" "}
            <a
              className="link"
              href="https://github.com/slarsendisney/sld-starwars"
            >
              check it on github
            </a>
            .
          </h4>
        </div>
      </div>
    </Layout>
  );
}
