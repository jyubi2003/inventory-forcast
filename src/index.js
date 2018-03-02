import React from 'react';
import ReactDOM from 'react-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// eslint-disable-next-line
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
// import Slider from 'material-ui/Slider';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Slider, { Range } from 'rc-slider';
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

class Selections extends React.Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div className="selections">
        <div  className="selection-1">
          <SelectField 
            floatingLabelText="カテゴリ"
            fullWidth={true}
            value={this.state.value}
            onChange={this.handleChange}
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
            value={this.state.value}
            onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText="ミニ" />
            <MenuItem value={2} primaryText="ひざ丈" />
            <MenuItem value={3} primaryText="ロング" />
            <MenuItem value={4} primaryText="その他" />
          </SelectField>
        </div>

        <div  className="selection-1">
          <SelectField  
            floatingLabelText="店舗"
            fullWidth={true}
            value={this.state.value}
            onChange={this.handleChange}
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
  state = {
    firstSlider: 0.1,
    secondSlider: 0.2,
    thirdSlider: 0.3,
    fourthSlider: 0.4,
    fifthSlider: 0.5,
    sixthSlider: 0.6,
  };

  handleFirstSlider = (event, value) => {
    this.setState({firstSlider: value});
  };

  handleSecondSlider = (event, value) => {
    this.setState({secondSlider: value});
  };

  handleThirdSlider = (event, value) => {
    this.setState({thirdSlider: value});
  };

  handleFourthSlider = (event, value) => {
    this.setState({fourthSlider: value});
  };

  handleFifthSlider = (event, value) => {
    this.setState({fifthSlider: value});
  };

  handleSixthSlider = (event, value) => {
    this.setState({sixthSlider: value});
  };

  changeValue = (event, value) => {
    this.setState({currentValue: value});
  };

  render() {
    return(
      <div className="controls">
        <p style={{textDecoration: "underline"}}>属性パラメータ</p>
        <div>
          <div className="control">
            <div className="control-label">
              {'スタイル'}
            </div>
            <Slider  className="control-slider"
              min={0}
              max={1}
              step={0.01}
              defaultValue={this.state.firstSlider}
              onChange={this.handleFirstSlider}
            />
          </div>
          <div className="control"> 
            <p className="control-label">
              {'スタイル'}
            </p>
            <Slider className="control-slider"
              min={0}
              max={1}
              step={0.01}
              defaultValue={this.state.secondSlider}
              onChange={this.handleSecondSlider}
            />
          </div>
          <div className="control">
            <p className="control-label">
              {'スタイル'}
            </p>
            <Slider className="control-slider"
              min={0}
              max={1}
              step={0.01}
              defaultValue={this.state.thirdSlider}
              onChange={this.handleThirdSlider}
            />
          </div>
          <div className="control">
            <p className="control-label">
              {'スタイル'}
            </p>
            <Slider className="control-slider"
              min={0}
              max={1}
              step={0.01}
              defaultValue={this.state.fourthSlider}
              onChange={this.handleFourthSlider}
            />
          </div>
          <div className="control">
            <p className="control-label">
              {'スタイル'}
            </p>
            <Slider className="control-slider"
              min={0}
              max={1}
              step={0.01}
              defaultValue={this.state.fifthSlider}
              onChange={this.handleFifthSlider}
            />
          </div>
          <div className="control">
            <p className="control-label">
              <span>{'スタイル'}</span>
            </p>
            <Range className="control-slider"
              min={0}
              max={1}
              step={0.01}
              defaultValue={[0.2,0.4]}
              onChange={this.handleFifthSlider}
            />
          </div>
        </div>
      </div>
    );
  }
}

const data = [
  {name: '0th Week', est: 0, act: 0, amt: 0},
  {name: '1th Week', est: 100, act: 120, amt: 20},
  {name: '2nd Week', est: 250, act: 280, amt: 30},
  {name: '3rd Week', est: 400, act: 360, amt: -40},
  {name: '4th Week', est: 450, act: 460, amt: 10},
  {name: '5th Week', est: 700, act: 750, amt: 50},
  {name: '6th Week', est: 850, act: 840, amt: -10},
  {name: '7th Week', est: 900, act: 960, amt: 60},
  {name: '8th Week', est: 1000, act: 0, amt: 100},
  {name: '9th Week', est: 980, act: 0, amt: 170},
  {name: '10th Week', est: 900, act: 0, amt: 90},
  {name: '11th Week', est: 820, act: 0, amt: 40},
  {name: '12th Week', est: 700, act: 0, amt: -20},
  {name: '13th Week', est: 660, act: 0, amt: -30},
  {name: '14th Week', est: 510, act: 0, amt: 30},
  {name: '15th Week', est: 399, act: 0, amt: 21},
  {name: '16th Week', est: 280, act: false, amt: 30},
];

class SimpleLineChart extends React.Component {
  render () {
    return (
      <div className="graph">
        <p style={{textDecoration: "underline"}}>予測曲線</p>
        <LineChart width={750} height={450} data={data} 
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="est" stroke="#8884d8" activeDot={{r: 8}} />
          <Line type="monotone" dataKey="act" stroke="#82ca9d" />
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
          />
          <span>第</span>
          <span>
            {1}
          </span>
          <span>週</span>
          <IconButton
            iconClassName="icon-next"
            tooltip="Next"
            tooltipPosition="bottom-center"
          />
        </div>
        <TextField
         className="performance"
          hintText="Hint Text"
        />
        <RaisedButton
          className="input"
          label="実績値入力"
          primary={true}
        />
        <RaisedButton
          className="execute"
          label="予測実行"
          secondary={true}
        />
        <RaisedButton
          className="atr-fitting"
          label="属性合わせ"
        />
      </div>
    );
  }
}

class ApparelDemo extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="apparel-demo">
          <Selections />
          <div className="prediction">
            <Controls />
            <div className="forcast">
              <SimpleLineChart />
              <Action />
            </div>
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
