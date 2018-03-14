import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// eslint-disable-next-line
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import './index.css';

class Abstruct extends React.Component {
  render() {
    return (
      <div>
        <img src="02_F19-432.jpg"></img>
        <div>商品説明文書</div>
        <div>高級感のあるウール系のツィード素材を使用した、フレアースカート。ブラック×ゴールドのモールを装飾し、上品で価値の高い一着に仕上げました。表地は程よくハリ感のある素材なので、着用時のフレアシルエットが綺麗で、とてもフェミニン。また、ウェスト部分は後ろがゴム仕様になっていて、リラックス感が有り、穿き心地も快適。同素材のショートジャケット（商品番号：62F-22-607）と合わせれば、クラシカルなセットアップスタイルが完成する一着です。トルソー：H172B80W58.5H86着用サイズ:36</div>
      </div>
    );
  }
}
/*
class Specification extends React.Component {
  render() {
    return (
      <div>
        <div>商品名称</div>
        <div>【LOVELESS】WOMENSツィードフレアースカート</div>
        <div>メインカテゴリ</div>
        <div>スカート</div>
        <div>サブカテゴリ</div>
        <div>ひざ丈スカート</div>
        <div>商品コード</div>
        <div>62S9760909</div>
        <div>カラー</div>
        <div>ブラック</div>
        <div>値段</div>
        <div>￥20,520</div>
        <div>ブランド</div>
        <div>GUILD PRIME</div>
      </div>
    );
  }
}
*/
class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="apparel-demo">
          <AppBar />
          <Abstruct />
          <Specification />
        </div>
      </MuiThemeProvider>
    );
  }
}
