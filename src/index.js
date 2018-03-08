import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// eslint-disable-next-line
import injectTapEventPlugin from 'react-tap-event-plugin';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
// import Slider from 'material-ui/Slider';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Slider, { Range, createSliderWithTooltip } from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';
import './index.css';

// eslint-disable-next-line
const styles = {
  customWidth: {
    width: 150,
  },
  margin:  12,
};

const SliderWithTooltip = createSliderWithTooltip(Slider);

class Selections extends React.Component {
  state = {
    value: 1,
  };

//  handleChange1 = (event, index, value) => this.props.onSelectChange1({value});
  handleChange1 = (event, index, value) => this.props.onSelectChange1({value});
  handleChange2 = (event, index, value) => this.props.onSelectChange2({value});
  handleChange3 = (event, index, value) => this.props.onSelectChange3({value});

  render() {
    return (
      <div className="selections">
        <div  className="selection-1">
          <SelectField 
            floatingLabelText="カテゴリ"
            fullWidth={true}
            value={this.props.selection1}
            onChange={this.handleChange1}
            floatingLabelStyle={{fontSize: '14pt'}}
          >
            <MenuItem value={1} primaryText="コート" />
            <MenuItem value={2} primaryText="ジャケット" />
            <MenuItem value={3} primaryText="ブルゾン" />
            <MenuItem value={4} primaryText="トップス" />
            <MenuItem value={5} primaryText="パンツ" />
            <MenuItem value={6} primaryText="スカート" />
            <MenuItem value={7} primaryText="ワンピース" />
        </SelectField>
        </div>

        <div  className="selection-1">
          <SelectField
            floatingLabelText="商品"
            fullWidth={true}
            value={this.props.selection2}
            onChange={this.handleChange2}
            floatingLabelStyle={{fontSize: '14pt'}}
          >
            <MenuItem value={1} primaryText="ミニ" />
            <MenuItem value={2} primaryText="ひざ丈" />
            <MenuItem value={3} primaryText="ロング" />
            <MenuItem value={4} primaryText="その他" />
          </SelectField>
        </div>
        <div className="detail-link">
            <a ref="#">詳細</a>
        </div>

        <div  className="selection-1">
          <SelectField  
            floatingLabelText="店舗"
            fullWidth={true}
            value={this.props.selection3}
            onChange={this.handleChange3}
            floatingLabelStyle={{fontSize: '14pt'}}
          >
            <MenuItem value={1} primaryText="Ａ店" />
            <MenuItem value={2} primaryText="Ｂ店" />
            <MenuItem value={3} primaryText="Ｃ店" />
            <MenuItem value={4} primaryText="Ｄ店" />
            <MenuItem value={5} primaryText="Ｅ店" />
            <MenuItem value={6} primaryText="Ｆ店" />
            <MenuItem value={7} primaryText="Ｇ店" />
            <MenuItem value={8} primaryText="Ｈ店" />
            <MenuItem value={9} primaryText="Ｉ店" />
            <MenuItem value={10} primaryText="Ｊ店" />
          </SelectField>
         </div>
      </div>
    );
  }
}

class Controls extends React.Component {
  render() {
    return(
      <div className="controls">
        <p style={{textDecoration: "underline", fontSize: "14pt"}}>属性パラメータ</p>
        <div>
          <div className="control">
            <div className="control-label">
              {'スタイル'}
            </div>
            <SliderWithTooltip  className="control-slider"
              min={0}
              max={1}
              step={0.01}
              marks={this.props.mark1}
              defaultValue={this.props.slider1}
              onChange={(value) => this.props.onSliderChange1(value)}
            />
          </div>
          <div className="control"> 
            <p className="control-label">
              {'スタイル'}
            </p>
            <SliderWithTooltip className="control-slider"
              min={0}
              max={1}
              step={0.01}
              defaultValue={this.props.slider2}
              onChange={(value) => this.props.onSliderChange2(value)}
            />
          </div>
          <div className="control">
            <p className="control-label">
              {'スタイル'}
            </p>
            <SliderWithTooltip className="control-slider"
              min={0}
              max={1}
              step={0.01}
              defaultValue={this.props.slider3}
              onChange={(value) => this.props.onSliderChange3(value)}
            />
          </div>
          <div className="control">
            <p className="control-label">
              {'スタイル'}
            </p>
            <SliderWithTooltip className="control-slider"
              min={0}
              max={1}
              step={0.01}
              defaultValue={this.props.slider4}
              onChange={(value) => this.props.onSliderChange4(value)}
            />
          </div>
          <div className="control">
            <p className="control-label">
              {'スタイル'}
            </p>
            <SliderWithTooltip className="control-slider"
              min={0}
              max={1}
              step={0.01}
              defaultValue={this.props.slider5}
              onChange={(value) => this.props.onSliderChange5(value)}
            />
          </div>
          <div className="control">
            <p className="control-label">
              <span>{'スタイル'}</span>
            </p>
            <SliderWithTooltip className="control-slider"
              min={0}
              max={1}
              step={0.01}
              defaultValue={[this.props.slider6]}
              onChange={(value) => this.props.onSliderChange6(value)}
            />
          </div>
        </div>
      </div>
    );
  }
}

class SimpleAreaChart extends React.Component {
  render () {
    const currentSeries = this.props.series;

    return (
      <div className="graph">
        <p style={{textDecoration: "underline", fontSize: "14pt"}}>予測曲線</p>
        <LineChart width={750} height={450}>
          <CartesianGrid strokeDasharray="3 3" />          
          <XAxis dataKey="category" type="category" allowDuplicatedCategory={false} />
          <YAxis dataKey="value"/>
          <Tooltip/>
          <Legend />
          {currentSeries.map(s => (
            <Line dataKey="value" data={s.data} name={s.name} key={s.name} stroke={s.stroke} strokeWidth={3} dot={{ strokeWidth: 8, r: 4}}
            />
          ))}
        </LineChart>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return(
      <div className="action">
        <div className="current-week">
          <IconButton
            iconClassName="icon-prev"
            tooltip="Previous"
            tooltipPosition="bottom-center"
            onClick={() => this.props.onClickNavi(false)}
          />
          <span>第</span>
          <span>
            {this.props.currentWeek}
          </span>
          <span>週</span>
          <IconButton
            iconClassName="icon-next"
            tooltip="Next"
            tooltipPosition="bottom-center"
            onClick={() => this.props.onClickNavi(true)}
          />
        </div>
        <TextField
          className="performance"
          hintText="実績"
        />
        <RaisedButton
          className="input"
          label="実績値入力"
          primary={true}
          onClick={() => this.props.onClickInput(true)}
        />
        <RaisedButton
          className="execute"
          label="予測実行"
          secondary={true}
          onClick={() => this.props.onClickPredict(true)}
        />
        <RaisedButton
          className="atr-fitting"
          label="属性合わせ"
          onClick={() => this.props.onClickFitting(true)}
        />
      </div>
    );
  }
}

class Forcast extends React.Component {
  render() {
    const history = this.props.history;
    const currentSeries = history[history.length - 1];

    // currentSeriesを渡してグラフエリアを描画する
    // Actionに現在の週とクリック時のハンドラを渡す
    return (
      <div className="forcast">
        <SimpleAreaChart 
          series={currentSeries}
        />
        <Action 
           currentWeek={history.length - 1}
           onClickNavi={(isNext) => this.props.onClickNavi(isNext)}
           onClickInput={(value) => this.props.onClickInput(value)}
           onClickPredict={() => this.props.onClickPredict()}
           onClickFitting={() => this.props.onClickFitting()}
        />
      </div>
    );
  }
}

const series_0_0 = [
  {name: '予測値', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 0},
    {category: '第2週', value: 0},
    {category: '第3週', value: 0},
    {category: '第4週', value: 0},
    {category: '第5週', value: 0},
    {category: '第6週', value: 0},
    {category: '第7週', value: 0},
    {category: '第8週', value: 0},
    {category: '第9週', value: 0},
    {category: '第10週', value: 0},
    {category: '第11週', value: 0},
    {category: '第12週', value: 0},
    {category: '第13週', value: 0},
    {category: '第14週', value: 0},
    {category: '第15週', value: 0},
    {category: '第16週', value: 0},
    {category: '第17週', value: 0}
  ], stroke: '#E57373'},
];

const series_1_0 = [
  {name: '予測値', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 100},
    {category: '第2週', value: 250},
    {category: '第3週', value: 500},
    {category: '第4週', value: 600},
    {category: '第5週', value: 840},
    {category: '第6週', value: 920},
    {category: '第7週', value: 930},
    {category: '第8週', value: 890},
    {category: '第9週', value: 800},
    {category: '第10週', value: 700},
    {category: '第11週', value: 590},
    {category: '第12週', value: 480},
    {category: '第13週', value: 390},
    {category: '第14週', value: 300},
    {category: '第15週', value: 210},
    {category: '第16週', value: 120},
    {category: '第17週', value: 90}
  ], stroke: '#E57373'},
];

const series_2_0 = [
  {name: '予測値', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 100},
    {category: '第2週', value: 250},
    {category: '第3週', value: 500},
    {category: '第4週', value: 600},
    {category: '第5週', value: 840},
    {category: '第6週', value: 920},
    {category: '第7週', value: 930},
    {category: '第8週', value: 890},
    {category: '第9週', value: 800},
    {category: '第10週', value: 700},
    {category: '第11週', value: 590},
    {category: '第12週', value: 480},
    {category: '第13週', value: 390},
    {category: '第14週', value: 300},
    {category: '第15週', value: 210},
    {category: '第16週', value: 120},
    {category: '第17週', value: 90}
  ], stroke: '#E57373'},
  {name: '実績', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 250},
    {category: '第2週', value: 320},
    {category: '第3週', value: 580},
    {category: '第4週', value: 660}
  ], stroke: '#8884d8'},
];

const series_3_0 = [
  {name: '予測値', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 100},
    {category: '第2週', value: 250},
    {category: '第3週', value: 500},
    {category: '第4週', value: 600},
    {category: '第5週', value: 840},
    {category: '第6週', value: 920},
    {category: '第7週', value: 930},
    {category: '第8週', value: 890},
    {category: '第9週', value: 800},
    {category: '第10週', value: 700},
    {category: '第11週', value: 590},
    {category: '第12週', value: 480},
    {category: '第13週', value: 390},
    {category: '第14週', value: 300},
    {category: '第15週', value: 210},
    {category: '第16週', value: 120},
    {category: '第17週', value: 90}
  ], stroke: '#E57373'},
  {name: '実績', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 250},
    {category: '第2週', value: 320},
    {category: '第3週', value: 580},
    {category: '第4週', value: 660}
  ], stroke: '#8884d8'},
];

const series_4_0 = [
  {name: '予測値', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 100},
    {category: '第2週', value: 250},
    {category: '第3週', value: 500},
    {category: '第4週', value: 600},
    {category: '第5週', value: 840},
    {category: '第6週', value: 920},
    {category: '第7週', value: 930},
    {category: '第8週', value: 890},
    {category: '第9週', value: 800},
    {category: '第10週', value: 700},
    {category: '第11週', value: 590},
    {category: '第12週', value: 480},
    {category: '第13週', value: 390},
    {category: '第14週', value: 300},
    {category: '第15週', value: 210},
    {category: '第16週', value: 120},
    {category: '第17週', value: 90}
  ], stroke: '#E57373'},
  {name: '実績', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 250},
    {category: '第2週', value: 320},
    {category: '第3週', value: 580},
    {category: '第4週', value: 660}
  ], stroke: '#8884d8'},
];

const mark0 = {
  
}

const mark1 = {
  0.3: {
    style: {
      color: 'red',
    },
    label:<strong>0.3</strong>,
  },
}

const mark2 = {
  0.6: '0.6',
}

const mark3 = {
  0.3: '0.3',
}

const mark4 = {
  0.7: '0.7',
}

const mark5 = {
  0.7: '0.7',
}

const mark6 = {
  0.4: '0.4',
}

class ApparelDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection1: 1,
      selection2: 1,
      selection3: 1,
      slider1:  0.5,
      slider2:  0.5,
      slider3:  0.5,
      slider4:  0.5,
      slider5:  0.5,
      slider6:  0.5,
      mark1:  mark1,
      history: [
        series_0_0,
      ],
    }
  }

  handleClickNavi(isNext) {
    this.setState({
    });
  }

  handleClickInput(value) {
    // 直前の描画単位のコピーを作成する
    
    // コピーに入力値を追加する


  }

  handleClickPredict() {
    // seriesBaseを切り替える
    const newHistory = [series_1_0];
    this.setState({
      history: newHistory,
    });
  }

  handleClickFitting() {
    // 最後の実績値につないだ新しいシリーズを追加する
    // 属性パラメータを変更する

  }

  handleSelectChange1(i){
    this.setState({
      selection1: i.value,
    })
  }

  handleSelectChange2(i){
    this.setState({
      selection2: i.value,
    })
  }

  handleSelectChange3(i){
    this.setState({
      selection3: i.value,
    })
  }

  handleSliderChange1(i){
    this.setState({
      slider1: i,
    })
  }

  handleSliderChange2(i){
    this.setState({
      slider2: i,
    })
  }

  handleSliderChange3(i){
    this.setState({
      slider3: i,
    })
  }

  handleSliderChange4(i){
    this.setState({
      slider4: i,
    })
  }

  handleSliderChange5(i){
    this.setState({
      slider5: i,
    })
  }

  handleSliderChange6(i){
    this.setState({
      slider6: i,
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="apparel-demo">
          <Selections 
            selection1={this.state.selection1}
            selection2={this.state.selection2}
            selection3={this.state.selection3}
            onSelectChange1={(i) => this.handleSelectChange1(i)}
            onSelectChange2={(event, index, value) => this.handleSelectChange2(event, index, value)}
            onSelectChange3={(i) => this.handleSelectChange3(i)}
          />
          <div className="prediction">
            <Controls
              slider1={this.state.slider1}
              slider2={this.state.slider2}
              slider3={this.state.slider3}
              slider4={this.state.slider4}
              slider5={this.state.slider5}
              slider6={this.state.slider6}
              onSliderChange1={(i) => this.handleSliderChange1(i)}
              onSliderChange2={(i) => this.handleSliderChange2(i)}
              onSliderChange3={(i) => this.handleSliderChange3(i)}
              onSliderChange4={(i) => this.handleSliderChange4(i)}
              onSliderChange5={(i) => this.handleSliderChange5(i)}
              onSliderChange6={(i) => this.handleSliderChange6(i)}
              mark1={this.state.mark1}
            />
            <Forcast 
              history={this.state.history}
              onClickNavi={(isNext) => this.handleClickNavi(isNext)}
              onClickInput={(value) => this.handleClickInput(value)}
              onClickPredict={() => this.handleClickPredict()}
              onClickFitting={() => this.handleClickFitting()}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

// ========================================

ReactDOM.render(
  <ApparelDemo />,
  document.getElementById('root')
);
