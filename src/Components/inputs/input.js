import React from 'react'
import './input.css'

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            propertyTitle: '',
            squareMeter: 0,
            rate: 0,
            address: '',
            avgPriceSquareMeter: 0,
            historyPuchase: 0,
            SbMinVal: 0,
            SbMaxVal: 0, 
            FNBVal: 0,
        }
        this.buildPDF = this.buildPDF.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleSqrMeterChange = this.handleSqrMeterChange.bind(this)
        this.handleRateChange = this.handleRateChange.bind(this)
        this.handleAddressChange = this.handleAddressChange.bind(this)
        this.handleAvgSqrMeterPriceChange = this.handleAvgSqrMeterPriceChange.bind(this)
        this.handleAvgSqrMeterPriceChange = this.handleAvgSqrMeterPriceChange.bind(this)
        this.handleAvgSqrMeterPriceChange = this.handleAvgSqrMeterPriceChange.bind(this)
        this.handleAvgSqrMeterPriceChange = this.handleAvgSqrMeterPriceChange.bind(this)
    }

    buildPDF() {
        this.props.onBuildpdf(this.state)   
    }

    handleNameChange(e) {
        this.setState({propertyTitle: e.target.value})
    }

    handleSqrMeterChange(e) {
        this.setState({squareMeter: e.target.value})
    }

    handleRateChange(e) {
        this.setState({rate: e.target.value})
    }

    handleAddressChange(e) {
        this.setState({address: e.target.value})
    }

    handleAvgSqrMeterPriceChange(e) {
        this.setState({avgPriceSquareMeter : e.target.value})
    }

    handlehistoryPuchaseChange(e) {
        this.setState({historyPuchase : e.target.value})
    }

    handleSbMinValChange(e) {
        this.setState({SbMinVal : e.target.value})
    }

    handleSbMaxValChange(e) {
        this.setState({SbMaxVal : e.target.value})
    }

    handleFNBValChange(e) {
        this.setState({FNBVal : e.target.value})
    }

    render() {
        return (
            <div className='container'>
                <div className ='flex container'>
                    <div className='input'>
                        <input placeHolder="House, Duplex ..." onChange={this.handleNameChange} type='text'/>
                        <input placeHolder="Square Meters" onChange={this.handleSqrMeterChange} type='number'/>
                        <input placeHolder="Average Price per m²" onChange={this.handleAvgSqrMeterPriceChange} type='number'/>
                        <input placeHolder="Going Rate %" onChange={this.handleRateChange} type='number'/>
                        <input placeHolder="Address" onChange={this.handleAddressChange} type='text'/>
                    </div>
                    <div className='input'>   
                        <input placeHolder="Standard Bank Minimum" onChange={this.handleSbMinValChange} type='number'/>
                        <input placeHolder="Standard Bank Maximun" onChange={this.handleSbMaxValChange} type='number'/>
                        <input placeHolder="First National Bank Valuation" onChange={this.handleFNBValChange} type='number'/>
                        <button className='inputButton' onClick={this.buildPDF}>Create Document</button>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Input