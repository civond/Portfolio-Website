import { TwitterTweetEmbed, TwitterVideoEmbed} from 'react-twitter-embed';
import './about.css';

const Neuroscience = () => {
    return(
        <div>
            <h3>SmearLab</h3><hr width="100%" color="black"></hr>
            <div class="leftbox">
                <br/>I have had the privillege of spending the past three years in SmearLab. 
                Our research focus is on olfactory search behavior in mice and use electrophysiological and 
                cutting-edge computational techniques (such as DeepLabCut and MoSeq)
                to reveal the structure of such behaviors.
                <br/><br/>
                During this time, I have been a part of multiple projects. In particular, I have spent most 
                most of my time working on our FMON Assay <em>(freely-moving olfactory navigation)</em> under Dr. Reese Findley. 
                Since my promotion to lab tech, I have been operating independently
                and am now heading a pilot study on the effects of vibrissal paralysis on our findings
                in olfactory search behavior.

                <br/><br/>We currently have a <a href="https://www.biorxiv.org/content/10.1101/2020.04.29.069252v1.abstract">publication</a>&nbsp; in the works!
                For more information, visit our lab website (also designed by me)! But for now, check out this tweet from Matt~! (video included below)
            </div>
            <br/>

            <div class="rightbox">
                <div class="scrollboxunderlay">
                    <div id="scrollbox" class="contentfade">
                        <div>
                            <TwitterVideoEmbed
                                    id={'1256228345097920513'}
                                />
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><hr width="100%" color="black"></hr><br/>
        </div>
    );
};

export default Neuroscience