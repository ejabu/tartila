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
import { changeUsername, fetchMessages } from './actions';
import { makeSelectUsername, makeSelectMessages } from './selectors';

import styled from 'styled-components';

import ReactAudioPlayer from 'react-audio-player';
import Headroom from 'react-headroom';

import InfiniteScroll from 'redux-infinite-scroll';
// import InfiniteScroll from './ReduxInfiniteScroll';


// ...

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */

  constructor(props) {
    super(props);
    this.state = {
      loadingMore: false,

    };
  }
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }


  onPlay = (src, event) => {
    console.log("src", src);
    event.stopPropagation();
    // console.log('onPLAY');
    // console.log(this.rap.audioEl);
    // this.rap.audioEl.pause()
    const myAudio = this.rap.audioEl;
    myAudio.src = src
    myAudio.play()
    // return myAudio.paused ? myAudio.play() : myAudio.pause();
  }


  loadMore() {
    this.setState({loadingMore: true});
    setTimeout(() => {
      this.props.onLoadMore()
      // const messages = this._createMessages(this.state.messages, this.state.messages.length+1);
      this.setState( {loadingMore: false})
    }, 200)
 }

 renderMessages() {
   if (this.props.messages.get(1) == undefined) {
     return (
       <div key={1}></div>
        )
   }
    //supaya this nya masuk
    //stackoverflow.com/questions/30148827/this-is-undefined-inside-map-function-reactjs
    // var hasil = this.props.messages.map(function(item){
    const hasil = this.props.messages.map((item, index) => {
      return (
        <div key={index}>
        <s.Post >
          <s.Left>
            <s.Level>
              a
            </s.Level>

          </s.Left>
          <s.Right>
            <s.Materi>
              {item.materi}
            </s.Materi>
            <s.Sub>
              {item.sub}
            </s.Sub>
            <s.Arabic>
              {item.arabic}
            </s.Arabic>
            <s.PostFooter>
              <s.More>
              </s.More>
              <s.Like>
              </s.Like>
              <s.Play
                onClick={this.onPlay.bind(this, item.src)}>
              </s.Play>
            </s.PostFooter>
            <s.Title>
              {item.title}
            </s.Title>

          </s.Right>
        </s.Post>
      </div>
         )
    })
   return hasil

 }
 // renderMessages() {
 //     return this.props.messages.map((msg, index) => {
 //       return(
 //         <div className="item" key={index}>{msg.materi}</div>
 //       )
 //     })
 //   }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    if (true) {
      const TomatoButton = styled(H2)`
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
            src={`http://${process.env.IP_ADDRESS}:5000/01/main.mp3`}
          // src="http://192.168.2.148:5000/01/main.mp3"
          // src="http://192.168.43.109:5000/01/main.mp3"
            autoPlay
            controls
          />
        </s.Player>


         <CenteredSection>

           <InfiniteScroll
             items={this.renderMessages()}
             loadMore={this.loadMore.bind(this)}
             elementIsScrollable={false}
             loadingMore = {this.state.loadingMore}
             threshold= {220}
           />
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
    onLoadMore: (evt) => {
      dispatch(fetchMessages())
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  messages: makeSelectMessages(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
