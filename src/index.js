import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// eslint-disable-next-line
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
import Slider, {createSliderWithTooltip } from 'rc-slider';
import AppBar from 'material-ui/AppBar';
import { BrowserRouter, Route, Link } from 'react-router-dom'
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
            <a href="./detail" target="blank">詳細</a>
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

const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      trriger={"manual"}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

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
              handle={handle}
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
              marks={this.props.mark2}
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
              marks={this.props.mark3}
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
              marks={this.props.mark4}
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
              marks={this.props.mark5}
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
              marks={this.props.mark6}
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
            <Line dataKey="value" data={s.data} name={s.name} key={s.name} stroke={s.stroke} strokeWidth={3} dot={{ strokeWidth: 8, r: 4}} strokeDasharray={s.strokeDasharray}
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
          <span className="week">
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
          id="input-text"
          className="performance"
          /* value={this.props.inputData} */
          onChange={(event) => this.props.onChangeInput(event)}
          /* style={width: 200;} */
          /* hintText="実績" */
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
           // currentWeek={history.length - 1}
           currentWeek={this.props.week}
           inputData={this.props.inputData}
           onClickNavi={(isNext) => this.props.onClickNavi(isNext)}
           onChangeInput={(event) => this.props.onChangeInput(event)}
           onClickInput={(value) => this.props.onClickInput(value)}
           onClickPredict={() => this.props.onClickPredict()}
           onClickFitting={() => this.props.onClickFitting()}
        />
      </div>
    );
  }
}

// 初期状態
// データ名のつけ方
// series_X_X_X
//        | | +-- 週（現在は５週まで）
//        | +---- スライダによる変化（現在は２件）
//        +------ 上部セレクタによる変化(現在は１件のみ)
const series_0_0_0 = [
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

// 予測実行１（スライダの平均値が０．５以下）
const series_0_1_0 = [
  {name: '予測値', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 10},
    {category: '第2週', value: 25},
    {category: '第3週', value: 50},
    {category: '第4週', value: 60},
    {category: '第5週', value: 84},
    {category: '第6週', value: 92},
    {category: '第7週', value: 93},
    {category: '第8週', value: 89},
    {category: '第9週', value: 80},
    {category: '第10週', value: 70},
    {category: '第11週', value: 59},
    {category: '第12週', value: 48},
    {category: '第13週', value: 39},
    {category: '第14週', value: 30},
    {category: '第15週', value: 21},
    {category: '第16週', value: 12},
    {category: '第17週', value: 9}
  ], stroke: '#E57373'},
];

// 予測実行１＋１週目実績
const series_0_1_1 = [
  {name: '予測値', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 10},
    {category: '第2週', value: 25},
    {category: '第3週', value: 50},
    {category: '第4週', value: 60},
    {category: '第5週', value: 84},
    {category: '第6週', value: 92},
    {category: '第7週', value: 93},
    {category: '第8週', value: 89},
    {category: '第9週', value: 80},
    {category: '第10週', value: 70},
    {category: '第11週', value: 59},
    {category: '第12週', value: 48},
    {category: '第13週', value: 39},
    {category: '第14週', value: 30},
    {category: '第15週', value: 21},
    {category: '第16週', value: 12},
    {category: '第17週', value: 9}
  ], stroke: '#E57373'},
  {name: '実績', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 25}
  ], stroke: '#8884d8'},
];

// 予測実行１＋２週目実績
const series_0_1_2 = [
  {name: '予測値', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 10},
    {category: '第2週', value: 25},
    {category: '第3週', value: 50},
    {category: '第4週', value: 60},
    {category: '第5週', value: 84},
    {category: '第6週', value: 92},
    {category: '第7週', value: 93},
    {category: '第8週', value: 89},
    {category: '第9週', value: 80},
    {category: '第10週', value: 70},
    {category: '第11週', value: 59},
    {category: '第12週', value: 48},
    {category: '第13週', value: 39},
    {category: '第14週', value: 30},
    {category: '第15週', value: 21},
    {category: '第16週', value: 12},
    {category: '第17週', value: 9}
  ], stroke: '#E57373'},
  {name: '実績', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 25},
    {category: '第2週', value: 32},
  ], stroke: '#8884d8'},
];

// 予測実行１＋３週目実績
const series_0_1_3 = [
  {name: '予測値', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 10},
    {category: '第2週', value: 25},
    {category: '第3週', value: 50},
    {category: '第4週', value: 60},
    {category: '第5週', value: 84},
    {category: '第6週', value: 92},
    {category: '第7週', value: 93},
    {category: '第8週', value: 89},
    {category: '第9週', value: 80},
    {category: '第10週', value: 70},
    {category: '第11週', value: 59},
    {category: '第12週', value: 48},
    {category: '第13週', value: 39},
    {category: '第14週', value: 30},
    {category: '第15週', value: 21},
    {category: '第16週', value: 12},
    {category: '第17週', value: 9}
  ], stroke: '#E57373'},
  {name: '実績', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 25},
    {category: '第2週', value: 32},
    {category: '第3週', value: 58},
  ], stroke: '#8884d8'},
];

// 予測実行１＋４週目実績
const series_0_1_4 = [
  {name: '予測値', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 10},
    {category: '第2週', value: 25},
    {category: '第3週', value: 50},
    {category: '第4週', value: 60},
    {category: '第5週', value: 84},
    {category: '第6週', value: 92},
    {category: '第7週', value: 93},
    {category: '第8週', value: 89},
    {category: '第9週', value: 80},
    {category: '第10週', value: 70},
    {category: '第11週', value: 59},
    {category: '第12週', value: 48},
    {category: '第13週', value: 39},
    {category: '第14週', value: 30},
    {category: '第15週', value: 21},
    {category: '第16週', value: 12},
    {category: '第17週', value: 9}
  ], stroke: '#E57373'},
  {name: '実績', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 25},
    {category: '第2週', value: 32},
    {category: '第3週', value: 58},
    {category: '第4週', value: 66}
  ], stroke: '#8884d8'},
];

// 予測実行１＋５週目実績
const series_0_1_5 = [
  {name: '予測値', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 10},
    {category: '第2週', value: 25},
    {category: '第3週', value: 50},
    {category: '第4週', value: 60},
    {category: '第5週', value: 84},
    {category: '第6週', value: 92},
    {category: '第7週', value: 93},
    {category: '第8週', value: 89},
    {category: '第9週', value: 80},
    {category: '第10週', value: 70},
    {category: '第11週', value: 59},
    {category: '第12週', value: 48},
    {category: '第13週', value: 39},
    {category: '第14週', value: 30},
    {category: '第15週', value: 21},
    {category: '第16週', value: 12},
    {category: '第17週', value: 9}
  ], stroke: '#E57373'},
  {name: '実績', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 25},
    {category: '第2週', value: 32},
    {category: '第3週', value: 58},
    {category: '第4週', value: 66},
    {category: '第5週', value: 75}
  ], stroke: '#8884d8'},
];

// 予測実行１＋５週目実績＋予測修正値
const series_0_1_5_0 = [
  {name: '予測値', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 10},
    {category: '第2週', value: 25},
    {category: '第3週', value: 50},
    {category: '第4週', value: 60},
    {category: '第5週', value: 84},
    {category: '第6週', value: 92},
    {category: '第7週', value: 93},
    {category: '第8週', value: 89},
    {category: '第9週', value: 80},
    {category: '第10週', value: 70},
    {category: '第11週', value: 59},
    {category: '第12週', value: 48},
    {category: '第13週', value: 39},
    {category: '第14週', value: 30},
    {category: '第15週', value: 21},
    {category: '第16週', value: 12},
    {category: '第17週', value: 9}
  ], stroke: '#F8BBD0', strokeDasharray: "2 2"},
  {name: '実績', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 25},
    {category: '第2週', value: 32},
    {category: '第3週', value: 58},
    {category: '第4週', value: 66},
    {category: '第5週', value: 75}
  ], stroke: '#8884d8'},
  {name: '予測修正', data: [
    {category: '第5週', value: 75},
    {category: '第6週', value: 98},
    {category: '第7週', value: 105},
    {category: '第8週', value: 93},
    {category: '第9週', value: 85},
    {category: '第10週', value: 68},
    {category: '第11週', value: 62},
    {category: '第12週', value: 43},
    {category: '第13週', value: 32},
    {category: '第14週', value: 24},
    {category: '第15週', value: 15},
    {category: '第16週', value: 9},
    {category: '第17週', value: 2}
  ], stroke: '#E57373'},
];

// 予測実行２（スライダの平均値が0.5よりも大きい）
const series_0_2_0 = [
  {name: '予測値', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 10},
    {category: '第2週', value: 25},
    {category: '第3週', value: 50},
    {category: '第4週', value: 65},
    {category: '第5週', value: 90},
    {category: '第6週', value: 98},
    {category: '第7週', value: 94},
    {category: '第8週', value: 90},
    {category: '第9週', value: 86},
    {category: '第10週', value: 70},
    {category: '第11週', value: 59},
    {category: '第12週', value: 45},
    {category: '第13週', value: 30},
    {category: '第14週', value: 25},
    {category: '第15週', value: 19},
    {category: '第16週', value: 10},
    {category: '第17週', value: 10}
  ], stroke: '#E57373'},
];

// 予測実行２＋１週目実績
const series_0_2_1 = [
  {name: '予測値', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 10},
    {category: '第2週', value: 25},
    {category: '第3週', value: 50},
    {category: '第4週', value: 65},
    {category: '第5週', value: 90},
    {category: '第6週', value: 98},
    {category: '第7週', value: 94},
    {category: '第8週', value: 90},
    {category: '第9週', value: 86},
    {category: '第10週', value: 70},
    {category: '第11週', value: 59},
    {category: '第12週', value: 45},
    {category: '第13週', value: 30},
    {category: '第14週', value: 25},
    {category: '第15週', value: 19},
    {category: '第16週', value: 10},
    {category: '第17週', value: 10}
  ], stroke: '#E57373'},
  {name: '実績', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 25},
  ], stroke: '#8884d8'},
];

// 予測実行２＋２週目実績
const series_0_2_2 = [
  {name: '予測値', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 10},
    {category: '第2週', value: 25},
    {category: '第3週', value: 50},
    {category: '第4週', value: 65},
    {category: '第5週', value: 90},
    {category: '第6週', value: 98},
    {category: '第7週', value: 94},
    {category: '第8週', value: 90},
    {category: '第9週', value: 86},
    {category: '第10週', value: 70},
    {category: '第11週', value: 59},
    {category: '第12週', value: 45},
    {category: '第13週', value: 30},
    {category: '第14週', value: 25},
    {category: '第15週', value: 19},
    {category: '第16週', value: 10},
    {category: '第17週', value: 10}
  ], stroke: '#E57373'},
  {name: '実績', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 25},
    {category: '第2週', value: 32},
  ], stroke: '#8884d8'},
];

// 予測実行２＋３週目実績
const series_0_2_3 = [
  {name: '予測値', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 10},
    {category: '第2週', value: 25},
    {category: '第3週', value: 50},
    {category: '第4週', value: 65},
    {category: '第5週', value: 90},
    {category: '第6週', value: 98},
    {category: '第7週', value: 94},
    {category: '第8週', value: 90},
    {category: '第9週', value: 86},
    {category: '第10週', value: 70},
    {category: '第11週', value: 59},
    {category: '第12週', value: 45},
    {category: '第13週', value: 30},
    {category: '第14週', value: 25},
    {category: '第15週', value: 19},
    {category: '第16週', value: 10},
    {category: '第17週', value: 10}
  ], stroke: '#E57373'},
  {name: '実績', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 25},
    {category: '第2週', value: 32},
    {category: '第3週', value: 58},
  ], stroke: '#8884d8'},
];

// 予測実行２＋４週目実績
const series_0_2_4 = [
  {name: '予測値', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 10},
    {category: '第2週', value: 25},
    {category: '第3週', value: 50},
    {category: '第4週', value: 65},
    {category: '第5週', value: 90},
    {category: '第6週', value: 98},
    {category: '第7週', value: 94},
    {category: '第8週', value: 90},
    {category: '第9週', value: 86},
    {category: '第10週', value: 70},
    {category: '第11週', value: 59},
    {category: '第12週', value: 45},
    {category: '第13週', value: 30},
    {category: '第14週', value: 25},
    {category: '第15週', value: 19},
    {category: '第16週', value: 10},
    {category: '第17週', value: 10}
  ], stroke: '#E57373'},
  {name: '実績', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 25},
    {category: '第2週', value: 32},
    {category: '第3週', value: 58},
    {category: '第4週', value: 66},
  ], stroke: '#8884d8'},
];

// 予測実行２＋５週目実績
const series_0_2_5 = [
  {name: '予測値', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 10},
    {category: '第2週', value: 25},
    {category: '第3週', value: 50},
    {category: '第4週', value: 65},
    {category: '第5週', value: 90},
    {category: '第6週', value: 98},
    {category: '第7週', value: 94},
    {category: '第8週', value: 90},
    {category: '第9週', value: 86},
    {category: '第10週', value: 70},
    {category: '第11週', value: 59},
    {category: '第12週', value: 45},
    {category: '第13週', value: 30},
    {category: '第14週', value: 25},
    {category: '第15週', value: 19},
    {category: '第16週', value: 10},
    {category: '第17週', value: 10}
  ], stroke: '#E57373'},
  {name: '実績', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 25},
    {category: '第2週', value: 32},
    {category: '第3週', value: 58},
    {category: '第4週', value: 66},
    {category: '第5週', value: 75}
  ], stroke: '#8884d8'},
];

// 予測実行２＋５週目実績＋予測修正
const series_0_2_5_0 = [
  {name: '予測値', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 10},
    {category: '第2週', value: 25},
    {category: '第3週', value: 50},
    {category: '第4週', value: 65},
    {category: '第5週', value: 90},
    {category: '第6週', value: 98},
    {category: '第7週', value: 94},
    {category: '第8週', value: 90},
    {category: '第9週', value: 86},
    {category: '第10週', value: 70},
    {category: '第11週', value: 59},
    {category: '第12週', value: 45},
    {category: '第13週', value: 30},
    {category: '第14週', value: 25},
    {category: '第15週', value: 19},
    {category: '第16週', value: 10},
    {category: '第17週', value: 10}
  ], stroke: '#F8BBD0', strokeDasharray: "2 2"},
  {name: '実績', data: [
    {category: '第0週', value: 0},
    {category: '第1週', value: 25},
    {category: '第2週', value: 32},
    {category: '第3週', value: 58},
    {category: '第4週', value: 66},
    {category: '第5週', value: 75}
  ], stroke: '#8884d8'},
  {name: '予測修正', data: [
    {category: '第5週', value: 75},
    {category: '第6週', value: 96},
    {category: '第7週', value: 94},
    {category: '第8週', value: 90},
    {category: '第9週', value: 86},
    {category: '第10週', value: 70},
    {category: '第11週', value: 59},
    {category: '第12週', value: 45},
    {category: '第13週', value: 30},
    {category: '第14週', value: 25},
    {category: '第15週', value: 19},
    {category: '第16週', value: 10},
    {category: '第17週', value: 10}
], stroke: '#E57373'},
];

// スライダのバリエーション用（未使用）
// eslint-disable-next-line
const series_0_3_0 = [
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

// スライダのバリエーション用（未使用）
// eslint-disable-next-line
const series_0_4_0 = [
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

const styles2 = {
 color: 'red',
 font: 'bold large/150% "メイリオ"',
}

const mark0 = {

}

const mark1 = {
  0.3: {
    style: styles2,
    label:<strong>0.3</strong>,
  },
}

const mark2 = {
  0.6: {
    style: styles2,
    label:<strong>0.6</strong>,
  },
}

const mark3 = {
  0.3: {
    style: styles2,
    label:<strong>0.3</strong>,
  },
}

const mark4 = {
  0.7: {
    style: styles2,
    label:<strong>0.7</strong>,
  },
}

const mark5 = {
  0.7: {
    style: styles2,
    label:<strong>0.7</strong>,
  },
}

const mark6 = {
  0.4: {
    style: styles2,
    label:<strong>0.6</strong>,
  },
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
      week:     0,
      weekWithData: 0,
      inputData: undefined,
      mark1:  mark0,
      mark2:  mark0,
      mark3:  mark0,
      mark4:  mark0,
      mark5:  mark0,
      mark6:  mark0,
      history: [
        series_0_0_0,
      ],
      attr_avg: 0.5,
    }
  }


  /*
   * 上部セレクタのハンドラ群
   */
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


  /*
   * 左部コントロールスライダーのハンドラ群
   */
  handleSliderChange1(i){
    this.setState({
      slider1: i,
    })
    this.calcAverage();
  }

  handleSliderChange2(i){
    this.setState({
      slider2: i,
    })
    this.calcAverage();
  }

  handleSliderChange3(i){
    this.setState({
      slider3: i,
    })
    this.calcAverage();
  }

  handleSliderChange4(i){
    this.setState({
      slider4: i,
    })
    this.calcAverage();
  }

  handleSliderChange5(i){
    this.setState({
      slider5: i,
    })
    this.calcAverage();
  }

  handleSliderChange6(i){
    this.setState({
      slider6: i,
    })
    this.calcAverage();
  }

  calcAverage = () => this.setState({
      attr_avg: ( this.state.slider1
                + this.state.slider2
                + this.state.slider3
                + this.state.slider4
                + this.state.slider5
                + this.state.slider6 ) / 6 ,
    })

  /*
   * 下部アクション部のハンドラ群
   */
  // [矢印]ボタン
  handleClickNavi(isNext) {
    const weekWithData = this.state.weekWithData;
    var week=this.state.week;
    if(isNext) {
      if (week <= weekWithData){
        this.setState({
          week: ++week,
        });
      }
    } else {
      if (week > 0){
        this.setState({
          week: --week,
        });
      }
    }

    if (week > weekWithData){
      return;
    }

    if (this.state.attr_avg <= 0.5){
      switch (week) {
        case 0:
          this.setState({
            history: [series_0_1_0],
          });
          break;
        case 1:
          this.setState({
            history: [series_0_1_1],
          });
          break;
        case 2:
          this.setState({
            history: [series_0_1_2],
          });
          break;
        case 3:
          this.setState({
            history: [series_0_1_3],
          });
          break;
        case 4:
          this.setState({
            history: [series_0_1_4],
          });
          break;
        default:
      }
    } else {
      switch (week) {
        case 0:
          this.setState({
            history: [series_0_2_0],
          });
          break;
        case 1:
          this.setState({
            history: [series_0_2_1],
          });
          break;
        case 2:
          this.setState({
            history: [series_0_2_2],
          });
          break;
        case 3:
          this.setState({
            history: [series_0_2_3],
          });
          break;
        case 4:
          this.setState({
            history: [series_0_2_4],
          });
          break;
        default:
      }
    }

  }

  // 実績値入力フィールド変更
  handleChangeInput(event){
  }

  // [実績値入力]ボタン
  handleClickInput(value) {
    // 最終的にやること
    //  直前の描画単位のコピーを作成する
    //  コピーに入力値を追加する
    // デモに向けて　取り急ぎ固定的なデータを出力する
    const week = this.state.week;
    const weekWithData = this.state.weekWithData;
    if (week > weekWithData + 1){
      return;
    }
    if (this.state.attr_avg <= 0.5){
      switch (this.state.week) {
        case 0:
          this.setState({
            history: [series_0_1_0],
          });
          break;
        case 1:
          this.setState({
            history: [series_0_1_1],
          });
          break;
        case 2:
          this.setState({
            history: [series_0_1_2],
          });
          break;
        case 3:
          this.setState({
            history: [series_0_1_3],
          });
          break;
        case 4:
          this.setState({
            history: [series_0_1_4],
          });
          break;
        case 5:
          this.setState({
            history: [series_0_1_5],
          });
          break;
        default:
      }
    } else {
      switch (this.state.week) {
        case 0:
          this.setState({
            history: [series_0_2_0],
          });
          break;
        case 1:
          this.setState({
            history: [series_0_2_1],
          });
          break;
        case 2:
          this.setState({
            history: [series_0_2_2],
          });
          break;
        case 3:
          this.setState({
            history: [series_0_2_3],
          });
          break;
        case 4:
          this.setState({
            history: [series_0_2_4],
          });
          break;
        case 5:
          this.setState({
            history: [series_0_2_5],
          });
          break;
        default:
      }
    }
    this.setState({
      week: week,
      weekWithData: week,
      inputData: "",
    })
  }

  // [予測実行]ボタン
  handleClickPredict() {
    // seriesBaseを切り替える
/*    const newHistory = [series_0_1_0];
    this.setState({
      history: newHistory,
    });
*/
    if (this.state.attr_avg <= 0.5){
      this.setState({
        history: [series_0_1_0],
      });
    } else {
      this.setState({
        history: [series_0_2_0],
      });
    }

    // スライダーのマーク削除
    this.setState({
      mark1: mark0,
      mark2: mark0,
      mark3: mark0,
      mark4: mark0,
      mark5: mark0,
      mark6: mark0,
    })

  }

  // [属性合わせ]ボタン
  handleClickFitting() {
    // 最後の実績値につないだ新しいシリーズを追加する
    // 属性パラメータを変更する

    // グラフのデータ変更
    // 予測修正のシリーズを追加
    if (this.state.attr_avg <= 0.5){
      this.setState({
        history: [series_0_1_5_0],
      });
    } else {
      this.setState({
        history: [series_0_2_5_0],
      });
    }

    // スライダーにマーク追加
    this.setState({
      mark1: mark1,
      mark2: mark2,
      mark3: mark3,
      mark4: mark4,
      mark5: mark5,
      mark6: mark6,
    })

  }

  /*
   * 描画ルーチン
   */
  render() {
    return (
      <MuiThemeProvider>
        <div className="apparel-demo">
          <AppBar />
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
              mark1={this.state.mark1}
              mark2={this.state.mark2}
              mark3={this.state.mark3}
              mark4={this.state.mark4}
              mark5={this.state.mark5}
              mark6={this.state.mark6}
              onSliderChange1={(i) => this.handleSliderChange1(i)}
              onSliderChange2={(i) => this.handleSliderChange2(i)}
              onSliderChange3={(i) => this.handleSliderChange3(i)}
              onSliderChange4={(i) => this.handleSliderChange4(i)}
              onSliderChange5={(i) => this.handleSliderChange5(i)}
              onSliderChange6={(i) => this.handleSliderChange6(i)}
            />
            <Forcast
              history={this.state.history}
              week={this.state.week}
              inputData={this.state.inputData}
              onClickNavi={(isNext) => this.handleClickNavi(isNext)}
              onChangeInput={(value) => this.handleChangeInput(value)}
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

// 商品説明ページ　左
class Abstruct extends React.Component {
  render() {
    return (
      <div className="abstruct">
        <div><img src="d092_sl_113.jpg" alt="商品イメージ"></img></div>
        <div className="title">商品説明文書</div>
        <div>高級感のあるウール系のツィード素材を使用した、フレアースカート。ブラック×ゴールドのモールを装飾し、上品で価値の高い一着に仕上げました。表地は程よくハリ感のある素材なので、着用時のフレアシルエットが綺麗で、とてもフェミニン。また、ウェスト部分は後ろがゴム仕様になっていて、リラックス感が有り、穿き心地も快適。同素材のショートジャケット（商品番号：62F-22-607）と合わせれば、クラシカルなセットアップスタイルが完成する一着です。トルソー：H172B80W58.5H86着用サイズ:36</div>
      </div>
    );
  }
}

// 商品説明ページ　右
class Specification extends React.Component {
  render() {
    return (
      <div className="specification">
        <div className="spec">
          <div className="title">商品名称</div>
          <div>【LOVELESS】WOMENSツィードフレアースカート</div>
        </div>
        <div className="spec">
          <div className="title">メインカテゴリ</div>
          <div>スカート</div>
        </div>
        <div className="spec">
          <div className="title">サブカテゴリ</div>
          <div>ひざ丈スカート</div>
        </div>
        <div className="spec">
          <div className="title">商品コード</div>
          <div>62S9760909</div>
        </div>
        <div className="spec">
          <div className="title">カラー</div>
          <div>ブラック</div>
        </div>
        <div className="spec">
          <div className="title">値段</div>
          <div>￥20,520</div>
        </div>
        <div className="spec">
          <div className="title">ブランド</div>
          <div>GUILD PRIME</div>
        </div>
      </div>
    );
  }
}

// 商品説明ページ　全体
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

// アプリケーション全体
// Apparel-demo：予測グラフページ
// Detail:商品説明ページ
class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Route exact path="/" component={ApparelDemo} />
          <Route path="/detail" component={Detail} />
        </div>
      </BrowserRouter>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
