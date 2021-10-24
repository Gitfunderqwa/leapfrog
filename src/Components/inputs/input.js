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
            historyPuchaseDate: 0,
        }

        this.buildPDF = this.buildPDF.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleSqrMeterChange = this.handleSqrMeterChange.bind(this)
        this.handleRateChange = this.handleRateChange.bind(this)
        this.handleAddressChange = this.handleAddressChange.bind(this)
        this.handleAvgSqrMeterPriceChange = this.handleAvgSqrMeterPriceChange.bind(this)
        this.handlehistoryPuchaseChange = this.handlehistoryPuchaseChange.bind(this)
        this.handlehistoryPuchaseChange = this.handlehistoryPuchaseChange.bind(this)
        this.handleSbMinValChange = this.handleSbMinValChange.bind(this)
        this.handleSbMaxValChange = this.handleSbMaxValChange.bind(this)
        this.handleFNBValChange = this.handleFNBValChange.bind(this)
        this.handlehistoryPuchaseDateChange = this.handlehistoryPuchaseDateChange.bind(this)
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

    handlehistoryPuchaseDateChange(e) {
        this.setState({historyPuchaseDate : e.target.value})
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
                    <form required>
                    <div className='input'>
                        <h2>Basic House Information</h2>

                        <select name="property" id="propertyType" onChange={this.handleNameChange} required="required">
                            <option value="">Property Type</option>
                            <option value="house">House</option>
                            <option value="complex">Complex</option>
                            <option value="townhouse">Townhouse</option>
                            <option value="apartment">Apartment</option>
                            <option value="vacant land / plot">Vacant Land / Plot</option>
                            <option value="commercial property">Commercial Property</option>
                            <option value="industrial property">Industrial Property</option>
                        </select>
                        <input placeHolder="Square Meters" onChange={this.handleSqrMeterChange} type='number' required="required"/>
                        <input placeHolder="Average Price per m²" onChange={this.handleAvgSqrMeterPriceChange} type='number' required="required"/>
                        <input placeHolder="Growth Rate" onChange={this.handleRateChange} type='number' required="required"/>
                        <input placeHolder="Last Sale Date" onChange={this.handlehistoryPuchaseChange} type='number' required="required"/>
                        <input placeHolder="Last Sale Price" onChange={this.handlehistoryPuchaseChange} type='number' required="required"/>
                        <input placeHolder="Address" onChange={this.handleAddressChange} type='text' required="required"/>
                    </div>
                    <div className='input'>   
                        <h2>Bank Valuation</h2>
                        <input placeHolder="Standard Bank Minimum" pattern="^\R?([0-9]{1,3} ([0-9]{3} )*[0-9]{3}|[0-9]+)(,[0-9][0-9])?$" onChange={this.handleSbMinValChange} type='number' required="required"/>
                        <input placeHolder="Standard Bank Maximun" onChange={this.handleSbMaxValChange} type='number' required="required"/>
                        <input placeHolder="First National Bank Valuation" onChange={this.handleFNBValChange} type='number' required="required"/>
                        <button className='inputButton' type='submit' onClick={this.buildPDF}>Create Document</button>
                    </div>
                    </form>
                </div>
                
            </div>
        )
    }
}
export default Input