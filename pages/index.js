import {Component} from 'react'
import MasterLayout from '../layouts/master'
import styled from 'react-emotion'
import FormRow from '../components/FormRow'
import { Highlight } from 'react-fast-highlight'
import CopyToClipboard from 'react-copy-to-clipboard'

const SiteContainer = styled('div')`
  text-align: left;
  max-width: 100%;
  margin: 0 auto;

  .html-viewer {
    background-color: #fff;
    padding: 20px;
  }

  .html-code {
    max-height: 500px;
    overflow-y: auto;
  }

  pre {
    margin: 0;
  }

  .message-copied {
    font-size: 12px;
    color: #f39c12;
  }

  input {
    color: #333;
  }

  button {
    position: relative;
    vertical-align: top;
    width: 100%;
    height: 60px;
    padding: 0;
    font-size: 22px;
    color: white;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    background: #f39c12;
    border: 0;
    border-bottom: 2px solid #e8930c;
    cursor: pointer;
    -webkit-box-shadow: inset 0 -2px #e8930c;
    box-shadow: inset 0 -2px #e8930c;
  }

  button:active {
    top: 1px;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .hljs {
    display: block;
    overflow-x: auto;
    padding: 20px;
    background: #2b2b2b;
    color: #bababa;
  }

  .hljs-strong,
  .hljs-emphasis {
    color: #a8a8a2;
  }

  .hljs-bullet,
  .hljs-quote,
  .hljs-link,
  .hljs-number,
  .hljs-regexp,
  .hljs-literal {
    color: #6896ba;
  }

  .hljs-code,
  .hljs-selector-class {
    color: #a6e22e;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-section,
  .hljs-attribute,
  .hljs-name,
  .hljs-variable {
    color: #cb7832;
  }

  .hljs-params {
    color: #b9b9b9;
  }

  .hljs-string {
    color: #6a8759;
  }

  .hljs-subst,
  .hljs-type,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-symbol,
  .hljs-selector-id,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-template-tag,
  .hljs-template-variable,
  .hljs-addition {

    color: #e0c46c;
  }

  .hljs-comment,
  .hljs-deletion,
  .hljs-meta {
    color: #7f7f7f;
  }

  .container {
    display: box;

    @media (min-width: 620px) {
      display: flex;
      overflow: hidden;
    }
 }

  .container .col {
    display: table-footer-group;

    @media (min-width: 620px) {
      flex: 1;
      width: 50%;
    }
  }

  .container .col:nth-child(1) {
    background: #2b2b2b;
    order: 1;
  }

  .container .col:nth-child(2) {
    background: #ffffff;
    order: 0;
  }
`

class Index extends Component {

    constructor(props) {
        super(props);
        this.onInputName = this.onInputName.bind(this);
        this.onInputTitle = this.onInputTitle.bind(this);
        this.onInputMobile = this.onInputMobile.bind(this);
        this.onCopy = this.onCopy.bind(this);

        this.state = {
            nameValue: 'Zak Zubair',
            titleValue: 'Full Stack Developer',
            mobileValue: '7450438466',
            copied: false
        };

        this.nameLabel = 'Name'
        this.namePlaceholder = 'Enter the name...'
        this.titleLabel = 'Title'
        this.titlePlaceholder = 'Enter the title...'
        this.mobileLabel = 'Mobile'
        this.mobilePlaceholder = 'Enter the mobile...'
        this.buttonLabel = 'Click here to copy the HTML code'
        this.htmlCopiedLabel = 'HTML code copied'

    }

    componentDidMount () {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('/static/service-worker.js')
          .then(registration => {
            console.log('service worker registration successful')
          })
          .catch(err => {
            console.warn('service worker registration failed', err.message)
          })
      }
    }

    onInputName(name) {
        this.setState({
            nameValue: name.target.value,
            copied: false
        });
    }

    onInputTitle(title) {
        this.setState({
            titleValue: title.target.value,
            copied: false
        });
    }

    onInputMobile(mobile) {
        this.setState({
            mobileValue: mobile.target.value,
            copied: false
        });
    }

    onCopy() {
        this.setState({
            copied: true
        });
    }

    render() {

        const template = `<table cellpadding="0" cellspacing="0" border="0" style="background: none; border-width: 0px; border: 0px; margin: 0; padding: 0;">
        <tbody><tr><td colspan="2" style="padding-bottom: 10px;"><img src="https://i.imgur.com/mEVjh8Y.jpg" style="width: 50%;"></td></tr>
        <tr><td colspan="3" style="padding-bottom: 3px; color: #000000; font-size: 13px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">${this.state.nameValue}</td></tr>
        <tr><td colspan="3" style="padding-bottom: 20px; color: #000000; font-size: 13px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"><b>${this.state.titleValue}</b></td></tr>
        <tr><td colspan="3" style="color: #000000; font-size: 13px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">5th Floor, 70 Wilson St</td></tr>
        <tr><td colspan="3" style="color: #000000; font-size: 13px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">London, EC2A 2DB</td></tr>
        <tr><td width="20" valign="top" style="vertical-align: top; width: 20px; color: #000000; font-size: 13px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"><b>m </b></td><td style="color: #000000; font-size: 13px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">+44 ${this.state.mobileValue}</td></tr>
        <tr><td colspan="3" style="color: #000000; font-size: 13px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"><a href="http://miyumi.ai" style="color: #000000; text-decoration: none; font-weight: normal; font-size: 13px;"><b>MiYuMi.Ai</b></a></td></tr>
        </tbody></table>
      `

        const emailTemplate = template

        return (
            <MasterLayout>
                <SiteContainer>
                    <FormRow label={this.nameLabel} value={this.state.nameValue} onChange={this.onInputName} placeholder={this.namePlaceholder} type='input'/>
                    <FormRow label={this.titleLabel} value={this.state.titleValue} onChange={this.onInputTitle} placeholder={this.titlePlaceholder} type='input'/>
                    <FormRow label={this.mobileLabel} value={this.state.mobileValue} onChange={this.onInputMobile} placeholder={this.mobilePlaceholder} type='input'/>

                    <div className="container">
                        {/*<div className="col">
                            <div className='html-code'>
                                <Highlight languages={['html']}>{emailTemplate}</Highlight>
                            </div>
                        </div>*/}

                        <div className="col">
                            <div className='html-viewer' dangerouslySetInnerHTML={{__html: emailTemplate}} />
                        </div>

                        {/**
                         * Build version
                         */}
                    </div>

                    {/*<div className='button-container'>
                        <CopyToClipboard text={emailTemplate} onCopy={this.onCopy}>
                            <button>{this.buttonLabel}</button>
                        </CopyToClipboard>

                        {this.state.copied ? <span className='message-copied'>{this.htmlCopiedLabel}</span> : ''}
                    </div>*/}
                </SiteContainer>
            </MasterLayout>
        )
    }
}

export default Index;
