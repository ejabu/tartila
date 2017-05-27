/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import s from './style';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';

import styled from 'styled-components';

import ReactAudioPlayer from 'react-audio-player';
import Headroom from 'react-headroom'
//...

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }


  onPlay = (event) => {
    event.stopPropagation();
    // console.log('onPLAY');
    // console.log(this.rap.audioEl);
    // this.rap.audioEl.pause()
    var myAudio = this.rap.audioEl
    return myAudio.paused ? myAudio.play() : myAudio.pause();
  }
  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    if (true) {
      var TomatoButton = styled(H2)`
        color: yellow;
      `;
    }

    return (
      <article>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'Learn Tajweed in Small Steps' },
          ]}
        />
        <div>

          <Headroom>
            <s.Header>
              TARTILA
            </s.Header>
          </Headroom>

          <s.Player>
          <ReactAudioPlayer
            ref={(element) => { this.rap = element; }}
            src="http://localhost:5000/01/main.mp3"
            // src="http://192.168.2.148:5000/01/main.mp3"
            // src="http://192.168.43.109:5000/01/main.mp3"
            autoPlay
            controls
          />
          </s.Player>
          <CenteredSection>
            <s.Post>
              <s.Left>
                <s.Level>
                  a
                </s.Level>

              </s.Left>
              <s.Right>
                <s.Materi>
                  Mad
                </s.Materi>
                <s.Sub>
                  Bacaan panjang
                </s.Sub>
                <s.Arabic>
                    وَخَٰلَٰتُكُمۡ
                </s.Arabic>
                <s.PostFooter>
                  <s.More>
                  </s.More>
                  <s.Like>
                  </s.Like>
                  <s.Play onClick={this.onPlay.bind(this)}>
                  </s.Play>
                </s.PostFooter>
                <s.Title>
                  Qs An Nuur [24] : 3
                </s.Title>

              </s.Right>

            </s.Post>
            <s.Post>
              <s.Left>
                <s.Level>
                  a
                </s.Level>

              </s.Left>
              <s.Right>
                <s.Materi>
                  Mad
                </s.Materi>
                <s.Sub>
                  Bacaan panjang
                </s.Sub>
                <s.Arabic>
                  مَآ أَنزَلۡنَا
                </s.Arabic>
                <s.PostFooter>
                  <s.More>
                  </s.More>
                  <s.Like>
                  </s.Like>
                  <s.Play onClick={this.onPlay.bind(this)}>
                  </s.Play>
                </s.PostFooter>
                <s.Title>
                  Qs Thahaa [20] : 2
                </s.Title>

              </s.Right>

            </s.Post>
            <s.Post>
              <s.Left>
                <s.Level>
                  a
                </s.Level>

              </s.Left>
              <s.Right>
                <s.Materi>
                  Mad
                </s.Materi>
                <s.Sub>
                  Bacaan panjang
                </s.Sub>
                <s.Arabic>
                  مَآ أَنزَلۡنَا
                </s.Arabic>
                <s.PostFooter>
                  <s.More>
                  </s.More>
                  <s.Like>
                  </s.Like>
                  <s.Play onClick={this.onPlay.bind(this)}>
                  </s.Play>
                </s.PostFooter>
                <s.Title>
                  Qs Thahaa [20] : 2
                </s.Title>

              </s.Right>

            </s.Post>
            <s.Post>
              <s.Left>
                <s.Level>
                  a
                </s.Level>

              </s.Left>
              <s.Right>
                <s.Materi>
                  Mad
                </s.Materi>
                <s.Sub>
                  Bacaan panjang
                </s.Sub>
                <s.Arabic>
                  مَآ أَنزَلۡنَا
                </s.Arabic>
                <s.PostFooter>
                  <s.More>
                  </s.More>
                  <s.Like>
                  </s.Like>
                  <s.Play onClick={this.onPlay.bind(this)}>
                  </s.Play>
                </s.PostFooter>
                <s.Title>
                  Qs Thahaa [20] : 2
                </s.Title>

              </s.Right>

            </s.Post>
            <s.Post>
              <s.Left>
                <s.Level>
                  a
                </s.Level>

              </s.Left>
              <s.Right>
                <s.Materi>
                  Mad
                </s.Materi>
                <s.Sub>
                  Bacaan panjang
                </s.Sub>
                <s.Arabic>
                  مَآ أَنزَلۡنَا
                </s.Arabic>
                <s.PostFooter>
                  <s.More>
                  </s.More>
                  <s.Like>
                  </s.Like>
                  <s.Play onClick={this.onPlay.bind(this)}>
                  </s.Play>
                </s.PostFooter>
                <s.Title>
                  Qs Thahaa [20] : 2
                </s.Title>

              </s.Right>

            </s.Post>
          </CenteredSection>
          <Section>



          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
